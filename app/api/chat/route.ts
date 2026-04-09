import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a PCOS expert assistant.

Provide:
- Clear, simple explanations
- Actionable steps (diet, lifestyle, exercise)
- Structured answers (use bullet points when helpful)

Always include:
- Practical tips
- What to do next

Avoid:
- Medical diagnosis
- Complex jargon

End every answer with:
"This is for educational purposes only. Please consult a healthcare professional."`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'message' field." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData?.error?.message ?? "OpenAI request failed." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ message: aiMessage });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
