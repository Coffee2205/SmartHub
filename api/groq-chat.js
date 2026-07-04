async function readJsonBody(request) {
  if (typeof request.json === 'function') {
    return request.json().catch(() => null)
  }

  if (typeof request.text === 'function') {
    const text = await request.text().catch(() => '')
    if (!text) {
      return null
    }

    try {
      return JSON.parse(text)
    } catch {
      return null
    }
  }

  if (request.body == null) {
    return null
  }

  if (typeof request.body === 'string') {
    try {
      return JSON.parse(request.body)
    } catch {
      return null
    }
  }

  if (Buffer.isBuffer(request.body)) {
    try {
      return JSON.parse(request.body.toString('utf8'))
    } catch {
      return null
    }
  }

  if (typeof request.body === 'object') {
    return request.body
  }

  return null
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const body = await readJsonBody(request)
  const prompt = body?.prompt

  if (!prompt || typeof prompt !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing or invalid prompt' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const apiKey = process.env.GROQ_API_KEY
  const apiUrl = process.env.GROQ_API_URL || 'https://api.groq.com/openai/v1/chat/completions'
  const model = process.env.GROQ_MODEL || 'llama-3.1-8b-instant'

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GROQ_API_KEY is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const payload = {
    model,
    messages: [
      {
        role: 'system',
        content:
          'You are a premium Smart Home Hub assistant. Answer clearly and concisely about features, setup, energy, security, and pricing.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.2,
    max_tokens: 250,
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error')
    return new Response(JSON.stringify({ error: 'Groq API request failed', details: errorText }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const data = await response.json().catch(() => null)
  const reply =
    data?.choices?.[0]?.message?.content ||
    data?.output_text ||
    data?.text ||
    'Sorry, Groq could not generate a reply right now.'

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
