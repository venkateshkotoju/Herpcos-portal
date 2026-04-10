"use client";

import { useState, useRef, useEffect } from "react";
import Disclaimer from "@/components/Disclaimer";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const FALLBACK_ERROR =
  "**Something went wrong**\n\n**What's happening**\nI wasn't able to get a response right now. This may be a connection issue or a configuration problem.\n\n**What you can do**\n- Check your internet connection and try again\n- Refresh the page if the problem persists\n- Contact support if this keeps happening\n\n*This is for educational purposes only. Please consult a healthcare professional.*";

/** Renders a subset of markdown: **bold**, *italic*, and - bullet lines */
function renderMarkdown(text: string) {
  return text.split("\n").map((line, i) => {
    const isBullet = line.trimStart().startsWith("- ");
    const content = isBullet ? line.trimStart().slice(2) : line;

    // Inline: **bold** and *italic*
    const parts = content.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    const inline = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={j}>{part.slice(1, -1)}</em>;
      }
      return part;
    });

    if (isBullet) {
      return (
        <li key={i} className="ml-4 list-disc">
          {inline}
        </li>
      );
    }
    if (line.trim() === "") {
      return <br key={i} />;
    }
    return <p key={i}>{inline}</p>;
  });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi there! I'm your HerPCOS assistant — here to support you with clear, friendly information about PCOS, hormones, and everyday wellness.\n\nYou're not alone in this journey. Whether you're newly diagnosed or have been managing PCOS for years, I'm here to help with practical tips on diet, lifestyle, and more.\n\nWhat's on your mind today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    // Build the updated history including the new user message
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    // Placeholder for the streaming assistant reply
    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "", timestamp: new Date() },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`API error: ${res.status}`);
      }

      // Stream text chunks into the assistant message
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + chunk } : m
          )
        );
      }
    } catch (err) {
      console.error("[chat] fetch error:", err);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: FALLBACK_ERROR } : m
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => sendMessage(input);

  const handleQuickSend = (question: string) => {
    setInput(question);
    sendMessage(question);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Chat Assistant
          </h1>
          <p className="text-gray-500">
            Ask anything about PCOS, symptoms, treatments, or lifestyle tips.
          </p>
        </div>

        {/* Disclaimer */}
        <Disclaimer />

        {/* Chat Window */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-pink-100 flex flex-col h-[550px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed space-y-1 ${
                    message.role === "user"
                      ? "bg-pink-600 text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  {message.role === "assistant"
                    ? message.content
                      ? renderMarkdown(message.content)
                      : // Empty placeholder while first chunk hasn't arrived yet
                        <span className="flex gap-1 items-center h-4">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        </span>
                    : message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
            {/* Quick Questions */}
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "Best diet for PCOS?",
                "How to lose weight with PCOS?",
                "How to regulate periods naturally?",
                "PCOS symptoms checklist",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickSend(q)}
                  disabled={isTyping}
                  className="text-xs bg-pink-50 border border-pink-200 text-pink-700 px-3 py-1.5 rounded-full hover:bg-pink-100 hover:border-pink-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex items-end gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                placeholder="Ask about PCOS symptoms, treatments, diet..."
                className="flex-1 resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-pink-600 text-white p-3 rounded-xl hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send &middot; Shift+Enter for new line
            </p>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-500 mb-3">
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "What are common PCOS symptoms?",
              "How does diet affect PCOS?",
              "What is insulin resistance?",
              "What exercises help with PCOS?",
              "How does stress affect PCOS?",
            ].map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="bg-white border border-pink-200 text-pink-700 px-3 py-1.5 rounded-full text-sm hover:bg-pink-50 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
