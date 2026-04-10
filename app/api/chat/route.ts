import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are HerPCOS Assistant, a knowledgeable and compassionate support guide specializing in Polycystic Ovary Syndrome (PCOS). You provide general health education and lifestyle information to people managing PCOS.

IMPORTANT GUIDELINES:
- You are NOT a doctor and do NOT provide diagnoses, prescribe medications, or replace medical advice.
- Always encourage users to consult a qualified healthcare provider for personal medical decisions.
- Keep responses safe, supportive, and evidence-informed.
- Never make claims about curing or reversing PCOS.

RESPONSE FORMAT:
Structure every response using these three sections (use plain text headers, no markdown):

What's happening:
[1-2 sentences explaining the relevant PCOS concept or mechanism in simple terms]

What you can do:
[2-3 actionable, general lifestyle or self-care suggestions]

Quick tips:
[2-3 concise, practical bullet points the user can apply immediately]

RESPONSE LENGTH: Keep the entire response between 150 and 200 words. Be concise but complete.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      );
    }

    // Only pass role and content to OpenAI
    const chatMessages = messages
      .filter(
        (m: { role: string; content: string }) =>
          m.role === "user" || m.role === "assistant"
      )
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...chatMessages,
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[/api/chat] Error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
