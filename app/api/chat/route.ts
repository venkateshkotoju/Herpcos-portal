import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a PCOS-focused women's health assistant.

Your goals:
- Explain things simply (beginner-friendly)
- Be empathetic and supportive
- Keep responses under 150–200 words

Always use this exact response structure:

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

Rules:
- Never diagnose or prescribe
- Avoid fear-based language
- Use markdown formatting exactly as shown above`;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      max_tokens: 400,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    });

    // Stream the response as plain text chunks
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
