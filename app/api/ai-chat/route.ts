import { GoogleGenerativeAI } from "@google/generative-ai"
import { type NextRequest, NextResponse } from "next/server"

interface ConversationMessage {
  role: "user" | "assistant"
  content: string
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message, conversationHistory = [] } = body as {
      message: string
      conversationHistory?: ConversationMessage[]
    }

    console.log("Received message:", { message, historyLength:conversationHistory.length }) // Debug log
    console.log("API Key exists:", !!process.env.GEMINI_API_KEY) // Debug log

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      )
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set")
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      )
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    })

    // Enhanced context for the AI
    const systemContext = `
      You are PolyConnect AI, a helpful assistant for Kenule Benson Saro-Wiwa Polytechnic in Rivers State, Nigeria.

    Your role:
    - Help students, faculty, and staff with information about the polytechnic
    - Provide accurate information about courses, departments, faculty, events, admissions, and campus life
    - Be friendly, engaging, and professional
    - Always ask thoughtful follow-up questions to continue the conversation
    - If you don't know something specific, acknowledge it and offer to help find resources

    Guidelines:
    - Keep responses conversational and helpful (2-4 sentences)
    - Always end with a relevant follow-up question
    - Be encouraging and supportive of student success
    - Provide actionable advice when possible

    Current date: ${new Date().toLocaleDateString()}
    Institution: Kenule Benson Saro-Wiwa Polytechnic, Rivers State, Nigeria
    `

    let prompt = `${systemContext}\n\nUser: ${message}\n\nAssistant:`

    // Add conversation history if available
    if (conversationHistory.length > 0) {
      const history = conversationHistory
        .slice(-6)
        .map((msg: ConversationMessage) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
        .join("\n")
      prompt = `${systemContext}\n\nConversation History:\n${history}\n\nUser: ${message}\n\nAssistant:`
    }

    console.log("Sending to Gemini...")
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    console.log("Gemini response received:", text.substring(0, 100) + "...")

    return NextResponse.json({
      response: text,
      success: true,
    })
  } catch (error: unknown) {
     const err = error as Error
    console.error("Detailed API error:", err)

    let errorMessage = "I apologize, but I'm experiencing technical difficulties. Please try again! 🤖"

    if (err.message?.includes("API_KEY")) {
      errorMessage = "There's an issue with the API configuration. Please contact support."
    } else if (err.message?.includes("quota") || err.message?.includes("limit")) {
      errorMessage = "I'm currently experiencing high demand. Please try again in a moment."
    } else if (err.message?.includes("network") || err.message?.includes("fetch")) {
      errorMessage = "I'm having trouble connecting right now. Please check your internet and try again."
    }

    return NextResponse.json(
      {
        error: err.message || "Failed to generate response",
        response: errorMessage,
        success: false,
      },
      { status: 500 },
    )
  }
}