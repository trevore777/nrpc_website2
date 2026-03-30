import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const { transcript } = await req.json();

    if (!transcript) {
      return NextResponse.json(
        { error: "Transcript is required" },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
You are summarising a Christian Pentecostal sermon.

Return:
1. Title (short and clear)
2. 100-word summary
3. 3-5 key points
4. Main scriptures
5. 1 application paragraph

Transcript:
${transcript}
      `
    });

    const text = response.output_text || "";

    return NextResponse.json({ result: text });
  } catch {
    return NextResponse.json(
      { error: "Failed to summarise sermon" },
      { status: 500 }
    );
  }
}