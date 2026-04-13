import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a warm, supportive PCOS health assistant. You help women understand and manage Polycystic Ovary Syndrome in simple, everyday language.

For every response, always follow this structure:
1. **What's happening** – A short, plain-English explanation of what's going on in the body (1–2 sentences).
2. **What you can do** – 3 to 4 clear, practical action steps the person can take.
3. **Quick tips** – 2–3 bite-sized tips covering diet, exercise, or daily habits.

Apply these rules based on the topic:
- If the question involves weight, metabolism, or difficulty losing weight → always mention insulin resistance and how managing blood sugar helps.
- If the question involves irregular periods, missed cycles, or cycle tracking → always mention cycle regulation strategies (e.g. stress reduction, consistent sleep, inositol, progesterone support).
- If the question involves acne, facial hair, hair loss, or oily skin → always mention elevated androgens (male hormones) as the root cause and how to lower them naturally or medically.

Guidelines:
- Keep every response under 150–180 words total.
- Use simple, everyday language — no medical jargon unless you briefly explain it.
- Be warm and encouraging, never alarming or dismissive.
- Do not diagnose or prescribe medication. Always encourage consulting a doctor for medical decisions.
- If a question is unrelated to PCOS, hormones, or women's health, gently redirect: "I'm best at helping with PCOS-related questions — let me know what's on your mind about that!"`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ content: reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 }
    );
  }
}
