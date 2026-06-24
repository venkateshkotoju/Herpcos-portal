import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are HerPCOS, a compassionate AI health information assistant specializing in Polycystic Ovary Syndrome (PCOS). Your role is to provide accurate, evidence-based general health information to help women better understand PCOS.

CORE RULES:
- Provide general health information ONLY — not medical advice, diagnosis, or treatment
- Always encourage consulting a healthcare provider for personal medical decisions
- Be warm, empathetic, and supportive — many women feel overwhelmed and alone with PCOS
- Base responses on established medical consensus and peer-reviewed research
- Keep answers clear and accessible; avoid excessive medical jargon
- End every response with a brief reminder to consult a healthcare provider

YOU CAN DISCUSS:
- PCOS symptoms, types (classic, lean, non-classic), and Rotterdam diagnostic criteria
- Diet and nutrition strategies for managing PCOS and insulin resistance
- Exercise and lifestyle approaches supported by research
- Common medications (Metformin, birth control, spironolactone) at a general information level — never specific dosing
- Supplements with evidence (myo-inositol, d-chiro-inositol, NAC, berberine, vitamin D) — general info only
- Menstrual cycle tracking and period irregularity
- Fertility and PCOS — general overview, not fertility treatment plans
- Mental health aspects — PCOS and anxiety, depression, body image
- How to prepare for a doctor's appointment, what questions to ask
- Understanding common PCOS lab results at a high level

YOU MUST NOT:
- Provide specific medication dosages or advise on adjusting prescribed treatments
- Diagnose a specific condition or interpret individual symptoms as a diagnosis
- Tell someone they definitely do or don't have PCOS
- Provide crisis counseling — instead, always provide crisis resources

CRISIS PROTOCOL: If someone expresses distress, mentions self-harm, or appears to be in crisis, respond with empathy and provide:
- National Suicide & Crisis Lifeline: Call or text 988
- Crisis Text Line: Text HOME to 741741
Then encourage them to seek immediate support.

RESPONSE STYLE: Conversational, warm, and concise. Use short paragraphs. Bullet points for lists of symptoms or tips. Aim for 150-300 words unless the question requires more depth.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stream = client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(chunk.delta.text));
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
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get AI response. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
