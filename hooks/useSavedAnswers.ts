"use client";

import { useState, useEffect, useCallback } from "react";

export interface SavedAnswer {
  id: string;
  content: string;
  savedAt: string; // ISO string
}

const STORAGE_KEY = "herpcos_saved_answers";

function loadFromStorage(): SavedAnswer[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedAnswer[]) : [];
  } catch {
    return [];
  }
}

function saveToStorage(answers: SavedAnswer[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

export function useSavedAnswers() {
  const [savedAnswers, setSavedAnswers] = useState<SavedAnswer[]>([]);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setSavedAnswers(loadFromStorage());
  }, []);

  const saveAnswer = useCallback((content: string) => {
    const newEntry: SavedAnswer = {
      id: Date.now().toString(),
      content,
      savedAt: new Date().toISOString(),
    };
    setSavedAnswers((prev) => {
      const updated = [newEntry, ...prev];
      saveToStorage(updated);
      return updated;
    });
  }, []);

  const removeAnswer = useCallback((id: string) => {
    setSavedAnswers((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      saveToStorage(updated);
      return updated;
    });
  }, []);

  const isSaved = useCallback(
    (content: string) => savedAnswers.some((a) => a.content === content),
    [savedAnswers]
  );

  return { savedAnswers, saveAnswer, removeAnswer, isSaved };
}
