"use client";

import { useState, useRef, useEffect } from "react";
import Disclaimer from "../components/Disclaimer";

// Shape of a single chat message
type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

// Canned responses for demo purposes (no backend)
const demoResponses: Record<string, string> = {
  default:
    "Thank you for your question! This portal is currently in educational mode. For personalised advice, please consult your healthcare provider.",
  period:
    "Irregular periods are one of the hallmark symptoms of PCOS. They occur because of hormonal imbalances that disrupt the normal ovulation cycle. Tracking your cycle and speaking with a gynaecologist can help determine the best management approach.",
  weight:
    "Weight management with PCOS can be challenging due to insulin resistance. A low-glycaemic diet, regular exercise, and sometimes medication (like metformin) are commonly recommended. Always work with a dietitian or doctor for a personalised plan.",
  diet:
    "A PCOS-friendly diet typically focuses on whole grains, lean proteins, healthy fats, and plenty of vegetables. Reducing refined carbohydrates and sugar can help manage insulin levels. Foods like leafy greens, berries, and nuts are especially beneficial.",
  insulin:
    "Insulin resistance is common in PCOS and can worsen symptoms. It means your cells don't respond effectively to insulin, leading to higher blood sugar. Lifestyle changes, and sometimes medication like metformin, can improve insulin sensitivity.",
  hair: "Excess facial or body hair (hirsutism) in PCOS is caused by elevated androgens. Management options include laser hair removal, medications like spironolactone, or oral contraceptives. A dermatologist or endocrinologist can guide treatment.",
  acne: "Acne in PCOS is driven by high androgen levels that increase oil production. Topical treatments, oral contraceptives, and anti-androgen medications are common approaches. A dermatologist can help find the right treatment plan.",
  pregnant:
    "PCOS is a leading cause of fertility issues, but many women with PCOS do conceive — sometimes with lifestyle changes alone, and other times with fertility treatments like clomiphene or IVF. A fertility specialist can help evaluate your options.",
};

// Pick a demo response based on keywords in the user message
function getDemoResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("period") || lower.includes("menstrual") || lower.includes("cycle"))
    return demoResponses.period;
  if (lower.includes("weight") || lower.includes("lose") || lower.includes("fat"))
    return demoResponses.weight;
  if (lower.includes("diet") || lower.includes("eat") || lower.includes("food"))
    return demoResponses.diet;
  if (lower.includes("insulin") || lower.includes("sugar") || lower.includes("glucose"))
    return demoResponses.insulin;
  if (lower.includes("hair") || lower.includes("hirsutism"))
    return demoResponses.hair;
  if (lower.includes("acne") || lower.includes("skin"))
    return demoResponses.acne;
  if (lower.includes("pregnant") || lower.includes("fertility") || lower.includes("conceive"))
    return demoResponses.pregnant;
  return demoResponses.default;
}

// Suggested starter questions
const suggestions = [
  "What causes irregular periods in PCOS?",
  "How does insulin resistance affect PCOS?",
  "What foods should I eat with PCOS?",
  "Can I get pregnant with PCOS?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hi! I'm the HerPCOS assistant. Ask me anything about PCOS — symptoms, diet, lifestyle, or treatment options. Remember, I provide educational information only.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function handleSend(text?: string) {
    const messageText = (text ?? input).trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate assistant "thinking" delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: getDemoResponse(messageText),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 900);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6 h-full">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Chat with HerPCOS</h1>
        <p className="text-sm text-slate-400 mt-1">
          Ask questions about PCOS symptoms, diet, treatments, and more.
        </p>
      </div>

      <Disclaimer />

      {/* Message List */}
      <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-4 overflow-y-auto min-h-[340px] max-h-[460px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-rose-500 text-white rounded-br-sm"
                  : "bg-slate-100 text-slate-700 rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-400 px-4 py-3 rounded-2xl rounded-bl-sm text-sm flex gap-1 items-center">
              <span className="animate-bounce delay-0">•</span>
              <span className="animate-bounce delay-100">•</span>
              <span className="animate-bounce delay-200">•</span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggested Questions */}
      <div>
        <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
          Suggested questions
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSend(s)}
              className="text-xs bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question about PCOS…"
          className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white placeholder-slate-400"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className="bg-rose-500 hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
