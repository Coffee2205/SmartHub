type NewsletterPayload = {
  fullName: string
  email: string
}

export async function submitNewsletter(payload: NewsletterPayload): Promise<void> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.fullName,
      email: payload.email,
      source: 'smart-home-hub-landing',
      createdAt: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    throw new Error('Unable to subscribe at this time')
  }
}
