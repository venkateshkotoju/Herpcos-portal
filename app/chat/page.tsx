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
- Be empathetic and supportive
- Keep responses under 150–200 words

Response format (always use this structure):
**[Topic Title]**

**What's happening**
One or two plain-English sentences explaining the concept.

**What you can do**
- Bullet 1
- Bullet 2
- Bullet 3

**Quick tips**
- Bullet 1
- Bullet 2

*This is for educational purposes only. Please consult a healthcare professional.*

Avoid medical diagnosis and fear-based language.`;

const SAMPLE_RESPONSES: string[] = [
  `**What is PCOS?**

**What's happening**
PCOS is a hormonal condition where the ovaries produce excess androgens, often disrupting your cycle, metabolism, and skin. It's common and very manageable.

**What you can do**
- Track your cycle with an app (Clue or Flo) to spot patterns
- Keep a short symptom log to share with your doctor
- Focus on one small change at a time — consistency beats perfection

**Quick tips**
- Cut back on processed sugar and refined carbs
- Aim for 7–9 hours of sleep — poor sleep disrupts hormones

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Insulin Resistance & PCOS**

**What's happening**
With insulin resistance, your cells don't respond well to insulin, so blood sugar stays high. This is linked to PCOS and can make symptoms worse — but lifestyle changes help a lot.

**What you can do**
- Pair every meal with protein + fiber + healthy fat
- Take a 10-minute walk after meals to lower blood sugar
- Avoid skipping meals, especially breakfast

**Quick tips**
- Swap white bread/rice for oats, quinoa, or brown rice
- Replace sugary drinks with water, herbal tea, or sparkling water

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**PCOS Symptoms Checklist**

**What's happening**
PCOS symptoms vary widely — you may have just a few or several. Recognizing them helps you track progress and have better conversations with your doctor.

**What you can do**
- Note which symptoms you experience: irregular periods, acne, hair thinning, weight changes, low energy, unwanted hair growth
- Rate each symptom weekly (1–5) to spot trends
- Bring your log to your next appointment

**Quick tips**
- Anti-inflammatory foods (berries, leafy greens, fatty fish) can ease acne and bloating
- Stress reduction through journaling or meditation supports hormone balance

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Best Diet for PCOS**

**What's happening**
Food directly affects your hormones and insulin levels. A PCOS-friendly diet focuses on stable blood sugar — not restriction.

**What you can do**
- Build your plate: ½ vegetables, ¼ lean protein, ¼ complex carbs
- Eat every 3–4 hours to avoid blood sugar spikes
- Stay hydrated — aim for 6–8 glasses of water daily

**Quick tips**
- Eat more: leafy greens, eggs, salmon, lentils, berries, nuts
- Limit: white bread, sugary cereals, fried foods, fizzy drinks

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Exercise & PCOS**

**What's happening**
Movement naturally lowers insulin, reduces androgens, and improves mood. You don't need intense workouts — consistency is what matters most.

**What you can do**
- Aim for 30 minutes of activity most days (walking counts!)
- Add strength training 2–3x per week to build insulin-sensitive muscle
- Start small — even 10-minute sessions add up

**Quick tips**
- Cardio: walking, cycling, swimming, or dancing
- Recovery: yoga or stretching helps balance cortisol levels

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**How to Regulate Periods Naturally**

**What's happening**
Irregular periods with PCOS are caused by hormonal imbalance — mainly elevated androgens and insulin disrupting ovulation. Lifestyle changes can help restore rhythm.

**What you can do**
- Reduce refined sugar and carbs to lower insulin spikes
- Exercise regularly — even 20–30 min of walking most days helps
- Manage stress: high cortisol disrupts your cycle further

**Quick tips**
- Spearmint tea (1–2 cups daily) may help lower androgen levels
- Consistent sleep and wake times support hormonal rhythm

*This is for educational purposes only. Please consult a healthcare professional.*`,

  `**Managing Stress with PCOS**

**What's happening**
Stress raises cortisol, which throws other hormones further out of balance and can worsen PCOS symptoms like irregular periods and weight gain.

**What you can do**
- Try 5 minutes of deep breathing or a short walk when overwhelmed
- Protect your sleep — aim for a consistent bedtime
- Connect with a PCOS support community for shared experience

**Quick tips**
- Magnesium-rich foods (spinach, almonds, dark chocolate) ease stress response
- Limit caffeine after noon to protect sleep quality

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

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
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
