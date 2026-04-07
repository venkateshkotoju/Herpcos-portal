import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import Disclaimer from "../components/Disclaimer";

interface Message {
  role: "user" | "bot";
  text: string;
  timestamp: string;
}

const PCOS_RESPONSES: Record<string, string> = {
  default: "Thank you for your question about PCOS. Please consult a healthcare professional for personalized advice. I can share general information to help you understand PCOS better.",
  symptoms: "Common PCOS symptoms include: irregular or missed periods, excess androgen (elevated male hormones causing acne or facial hair), polycystic ovaries, weight gain especially around the abdomen, and fatigue. Symptoms vary widely between individuals.",
  diet: "A PCOS-friendly diet typically includes: low glycemic index (GI) foods to manage insulin, anti-inflammatory foods (berries, leafy greens, fatty fish), lean proteins, and fiber-rich foods. Limiting sugar, refined carbs, and processed foods can help regulate hormones.",
  treatment: "PCOS treatments include: lifestyle changes (diet and exercise), hormonal birth control to regulate periods, metformin to manage insulin resistance, anti-androgens for hair/acne symptoms, and fertility treatments if needed. Treatment is personalized — work with your doctor.",
  pregnancy: "Many people with PCOS successfully conceive. Options include: lifestyle modifications, ovulation induction medications (like clomiphene or letrozole), and in some cases IVF. Working with a reproductive endocrinologist can significantly improve outcomes.",
  exercise: "Exercise is highly beneficial for PCOS. Aim for a mix of cardio (30 min, 3-5x/week) and strength training. Exercise helps improve insulin sensitivity, reduce weight, lower androgen levels, and improve mood. Even walking consistently can make a difference.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("symptom") || lower.includes("sign")) return PCOS_RESPONSES.symptoms;
  if (lower.includes("diet") || lower.includes("eat") || lower.includes("food") || lower.includes("nutrition")) return PCOS_RESPONSES.diet;
  if (lower.includes("treatment") || lower.includes("medication") || lower.includes("medicine") || lower.includes("cure")) return PCOS_RESPONSES.treatment;
  if (lower.includes("pregnant") || lower.includes("fertility") || lower.includes("conceive") || lower.includes("baby")) return PCOS_RESPONSES.pregnancy;
  if (lower.includes("exercise") || lower.includes("workout") || lower.includes("gym") || lower.includes("fitness")) return PCOS_RESPONSES.exercise;
  return PCOS_RESPONSES.default;
}

function getTimestamp(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I'm your HerPCOS expert assistant. I can answer general questions about PCOS — symptoms, diet, treatment, exercise, and fertility. How can I help you today?",
      timestamp: getTimestamp(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input.trim(), timestamp: getTimestamp() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        role: "bot",
        text: getBotResponse(userMsg.text),
        timestamp: getTimestamp(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Chat - HerPCOS Portal</title>
        <meta name="description" content="Chat with PCOS expert assistant" />
      </Head>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Chat with PCOS Expert</h1>
        <p className="text-gray-500 text-sm mb-4">
          Ask about symptoms, diet, treatment, fertility, and more.
        </p>
        <Disclaimer />

        {/* Chat Window */}
        <div className="border border-purple-200 rounded-2xl bg-gray-50 h-96 overflow-y-auto p-4 mt-4 space-y-3 shadow-inner">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl text-sm shadow-sm ${
                  m.role === "user"
                    ? "bg-purple-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-purple-100 rounded-bl-none"
                }`}
              >
                <p>{m.text}</p>
                <p className={`text-xs mt-1 ${m.role === "user" ? "text-purple-200" : "text-gray-400"}`}>
                  {m.timestamp}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-purple-100 rounded-2xl rounded-bl-none px-4 py-2 text-sm text-gray-400 shadow-sm">
                Expert is typing...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2 mt-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about PCOS (e.g. What are PCOS symptoms?)"
            className="flex-grow border border-purple-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          >
            Send
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-2 text-center">
          Try asking: &quot;What are PCOS symptoms?&quot; or &quot;What diet helps PCOS?&quot;
        </p>
      </div>
    </>
  );
}
