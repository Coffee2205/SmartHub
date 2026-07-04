import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  console.log("Handler started");

  if (req.method !== "POST") {
    console.log("Wrong method:", req.method);
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  try {
    console.log("Body:", req.body);

    const { messages } = req.body;

    console.log("Calling Groq...");

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_completion_tokens: 1024,
    });

    console.log("Groq success");

    return res.status(200).json(response.choices[0].message);
  } catch (error) {
    console.error("Groq error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}