"use client"

import { useState } from "react"

export default function Footer() {
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmission(e) {
    e.preventDefault()

    if (!feedback.trim()) return alert("Please enter feedback")

    const res = await fetch("/api/submit-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback })
    })

    const result = await res.json()
    setSubmitted(true)
    console.log(result)
  }

  return (
    <section className="footer dark">
      <span className="footer-title">CREATE TOGETHER.</span>
      <p>Let's explore the fashionable world of machine-generated art together.</p>
      <textarea
        value={feedback}
        onInput={(e) => setFeedback(e.target.value)}
        placeholder="Provide some feedback"
      />
      <br />
      <br />
      <button onClick={handleSubmission}>Submit Feedback</button>
      {submitted && <p style={{ color: "lightgreen" }}>Thanks for your feedback!</p>}
    </section>
  );

}
