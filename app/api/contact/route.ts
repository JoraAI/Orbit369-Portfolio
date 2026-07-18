import { NextResponse } from 'next/server';

/**
 * Placeholder contact form handler.
 *
 * Currently logs the submission and returns success. To make this live,
 * replace the body with a call to your email/CRM provider, e.g.:
 *
 *   await resend.emails.send({ ... })
 *   await sendgrid.send({ ... })
 *   await fetch('https://your-crm.com/api/leads', { ... })
 *
 * Recommended env vars to add: RESEND_API_KEY, CONTACT_TO_EMAIL.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic server-side sanity check (the client validates too).
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields.' },
        { status: 400 },
      );
    }

    // TODO: replace with real email/CRM integration before launch.
    console.log('[contact] new submission:', {
      name: data.name,
      email: data.email,
      company: data.company,
      budget: data.budget,
      projectType: data.projectType,
      message: data.message,
      receivedAt: new Date().toISOString(),
    });

    // Simulate slight latency for realistic UX.
    await new Promise((r) => setTimeout(r, 300));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Something went wrong.' },
      { status: 500 },
    );
  }
}