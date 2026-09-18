export async function POST(request: Request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject =
    typeof body.subject === "string" ? body.subject.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name || name.length > 100 ||
    !email || email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !subject || subject.length > 200 ||
    /[\r\n]/.test(subject) ||
    !message || message.length > 5000
  ) {
    return Response.json({ error: "Invalid fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!key || !from) {
    return Response.json(
      { error: "Email is not configured" },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["namhnguyen0103@gmail.com"],
        reply_to: email,
        subject: subject,
        text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return Response.json({ error: "Sending failed" }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Sending failed" }, { status: 502 });
  }
}