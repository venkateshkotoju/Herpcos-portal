"use client";

import { useState, useEffect, useCallback } from "react";

export interface SavedAnswer {
  id: string;
  content: string;
  savedAt: string; // ISO string — safe for localStorage serialisation
}

const STORAGE_KEY = "herpcos_saved_answers";

function readFromStorage(): SavedAnswer[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedAnswer[]) : [];
  } catch {
    return [];
  }
}

function writeToStorage(answers: SavedAnswer[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // localStorage quota exceeded or unavailable — fail silently
  }
}

export function useSavedAnswers() {
  const [savedAnswers, setSavedAnswers] = useState<SavedAnswer[]>([]);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setSavedAnswers(readFromStorage());
  }, []);

  const saveAnswer = useCallback((content: string): boolean => {
    const current = readFromStorage();
    // Prevent exact duplicates
    if (current.some((a) => a.content === content)) return false;
    const next: SavedAnswer[] = [
      { id: Date.now().toString(), content, savedAt: new Date().toISOString() },
      ...current,
    ];
    writeToStorage(next);
    setSavedAnswers(next);
    return true;
  }, []);

  const removeAnswer = useCallback((id: string) => {
    const next = readFromStorage().filter((a) => a.id !== id);
    writeToStorage(next);
    setSavedAnswers(next);
  }, []);

  const isSaved = useCallback(
    (content: string) => savedAnswers.some((a) => a.content === content),
    [savedAnswers]
  );

  return { savedAnswers, saveAnswer, removeAnswer, isSaved };
}
