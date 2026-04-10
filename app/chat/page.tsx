"use client";

import { useState, useRef, useEffect } from "react";
import Disclaimer from "@/components/Disclaimer";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// System prompt defining the PCOS assistant's behavior and response format
const SYSTEM_PROMPT = `You are a PCOS-focused women's health assistant.

Your goals:
- Explain things simply (beginner-friendly)
- Give actionable steps (diet, lifestyle, exercise)
- Be empathetic and supportive
- Use bullet points when helpful

For every answer include:
1. Short explanation
2. Actionable steps (what to do)
3. Optional tips (diet, exercise, habits)

Avoid:
- Medical diagnosis
- Fear-based language

End every response with:
"This is for educational purposes only. Please consult a healthcare professional."`;

const SAMPLE_RESPONSES: string[] = [
  `**What is PCOS?**

PCOS (Polycystic Ovary Syndrome) is a hormonal condition that affects how your ovaries work. It's very common — and importantly, it's manageable with the right support.

**What you can do:**
- Track your menstrual cycle using an app (e.g. Clue, Flo) to spot patterns
- Keep a symptom journal to share with your doctor
- Start with small lifestyle changes — even 5% weight loss can improve symptoms

**Helpful tips:**
- Diet: Focus on whole foods and reduce processed sugar
- Exercise: Even a 20-minute daily walk makes a difference
- Habit: Prioritize 7–9 hours of sleep — poor sleep worsens hormonal imbalance

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Insulin Resistance & PCOS**

Insulin resistance means your body's cells don't respond well to insulin, causing blood sugar to stay elevated. This is closely linked to PCOS and can make symptoms worse — but it's very much within your control.

**What you can do:**
- Eat balanced meals with protein + fiber + healthy fats at every meal
- Avoid skipping meals, especially breakfast
- Move your body after meals — even a 10-minute walk helps lower blood sugar

**Helpful tips:**
- Diet: Swap white rice/bread for brown rice, oats, or quinoa
- Exercise: Strength training 2–3x per week improves insulin sensitivity
- Habit: Reduce sugary drinks — opt for water, herbal teas, or sparkling water

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Common PCOS Symptoms**

PCOS looks different for everyone. You might experience some or all of these symptoms — and that's completely okay. Knowing what to look for is the first step.

**Common symptoms include:**
- Irregular or missed periods
- Acne, especially along the jawline and chin
- Unwanted hair growth (face, chest, back)
- Hair thinning on the scalp
- Difficulty losing weight
- Low energy or mood changes

**What you can do:**
- Log your symptoms weekly to track changes
- Talk openly with your doctor about what bothers you most
- Address one symptom at a time — small wins add up

**Helpful tips:**
- Diet: Anti-inflammatory foods (berries, leafy greens, fatty fish) can reduce acne and bloating
- Habit: Stress management (meditation, journaling) can help regulate hormones

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**PCOS-Friendly Diet**

Food is one of the most powerful tools for managing PCOS. The goal isn't to restrict — it's to nourish your body in a way that balances hormones and keeps blood sugar stable.

**What you can do:**
- Build your plate: ½ vegetables, ¼ protein, ¼ complex carbs
- Eat every 3–4 hours to keep blood sugar steady
- Stay hydrated — aim for 6–8 glasses of water daily

**Helpful tips:**
- Eat more of: leafy greens, eggs, salmon, lentils, berries, nuts, seeds
- Limit: white bread, sugary cereals, fried foods, sodas
- Habit: Meal prep on Sundays to make healthy eating easier during the week

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Exercise & PCOS**

Movement is a natural hormone balancer. The good news? You don't need intense workouts — consistency matters far more than intensity.

**What you can do:**
- Aim for 150 minutes of moderate activity per week (that's just 30 min, 5 days)
- Mix cardio and strength training for best results
- Start where you are — even stretching or yoga counts

**Helpful tips:**
- Cardio: Walking, cycling, swimming, or dancing all support heart health and insulin sensitivity
- Strength: Bodyweight exercises (squats, lunges, push-ups) help build muscle and regulate hormones
- Habit: Find movement you enjoy — you're more likely to stick with it

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Managing Stress with PCOS**

Stress triggers cortisol, which can throw your hormones further out of balance and worsen PCOS symptoms. Managing stress isn't a luxury — it's a key part of your care.

**What you can do:**
- Practice deep breathing for 5 minutes when you feel overwhelmed
- Set boundaries around your schedule and protect your rest time
- Connect with others who understand — PCOS communities can be a great source of support

**Helpful tips:**
- Diet: Magnesium-rich foods (dark chocolate, spinach, almonds) support stress response
- Exercise: Yoga and Pilates are especially helpful for stress and hormonal balance
- Habit: Limit caffeine after noon — it can amplify cortisol and disrupt sleep

*This is for educational purposes only. Please consult a healthcare professional.*`,
];

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

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response =
        SAMPLE_RESPONSES[Math.floor(Math.random() * SAMPLE_RESPONSES.length)];
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
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
                    ? renderMarkdown(message.content)
                    : message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 rounded-2xl rounded-bl-sm px-4 py-3 text-sm">
                  <span className="flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
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
