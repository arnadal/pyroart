import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  const { feedback } = await req.json()

  if (!feedback || typeof feedback !== 'string' || feedback.trim() === '') {
    return NextResponse.json({ error: 'Feedback is required' }, { status: 400 })
  }

  const entry = await prisma.feedback.create({
    data: { content: feedback.trim() }
  })

  return NextResponse.json({ message: 'Feedback saved', entry })
}
