import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const systemPrompt = "You are designed to make concise flashcards on a given topic to make education and learning effective. Return in the following JSON format { 'flashcards' : [{ 'front' : str, 'back': str }] }"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY, dangerouslyAllowBrowser: true});

export async function POST(req) {
  
    const { message } = await req.json();
    
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: data },
      ],
      model: "llama3-70b-8192",
      response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcard)
}