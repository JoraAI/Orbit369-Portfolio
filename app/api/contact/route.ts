import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Inbox that receives contact form submissions. Override via CONTACT_TO_EMAIL.
 */
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'orbit369media@gmail.com';

/**
 * "From" address for outgoing mail. Must be on a domain verified in Resend
 * (https://resend.com/domains). Override via CONTACT_FROM_EMAIL.
 *
 * NOTE: Resend's sandbox sender `onboarding@resend.dev` only delivers to the
 * email you signed up with — verify a domain to send to any inbox.
 */
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectType?: string;
  message: string;
}

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

    const submission: ContactSubmission = {
      name: String(data.name),
      email: String(data.email),
      company: data.company ? String(data.company) : undefined,
      budget: data.budget ? String(data.budget) : undefined,
      projectType: data.projectType ? String(data.projectType) : undefined,
      message: String(data.message),
    };

    // Not configured yet — log and return success so the form keeps working
    // in local dev. Set RESEND_API_KEY to start delivering real emails.
    if (!process.env.RESEND_API_KEY) {
      console.warn('[contact] RESEND_API_KEY is not set — submission logged only.');
      console.log('[contact] new submission:', {
        ...submission,
        receivedAt: new Date().toISOString(),
      });
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: `Orbit 369 Media <${CONTACT_FROM_EMAIL}>`,
      to: [CONTACT_TO_EMAIL],
      replyTo: submission.email,
      subject: `New contact submission — ${submission.name}`,
      html: buildEmailHtml(submission),
    });

    if (error) {
      console.error('[contact] Resend send failed:', error);
      return NextResponse.json(
        { ok: false, error: 'Something went wrong.' },
        { status: 500 },
      );
    }

    console.log('[contact] submission delivered to', CONTACT_TO_EMAIL);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Something went wrong.' },
      { status: 500 },
    );
  }
}

/** Minimal HTML escaping so user input can't inject markup into the email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Table row for a labeled field; omitted entirely when the value is empty. */
function fieldRow(label: string, value?: string): string {
  if (!value) return '';
  return `<tr>
    <td style="padding:6px 0;color:#8a8f98;font-size:13px;vertical-align:top;width:130px;">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:#16181d;font-size:13px;font-weight:600;">${escapeHtml(value)}</td>
  </tr>`;
}

function buildEmailHtml(submission: ContactSubmission): string {
  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#07080b;padding:22px 28px;">
                <span style="color:#e8c077;font-size:20px;font-weight:bold;">Orbit 369 Media</span>
                <span style="color:#8a8f98;font-size:12px;display:block;margin-top:2px;">New contact form submission</span>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 16px;color:#16181d;font-size:14px;">A visitor submitted the contact form:</p>
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                  ${fieldRow('Name', submission.name)}
                  ${fieldRow('Email', submission.email)}
                  ${fieldRow('Company', submission.company)}
                  ${fieldRow('Budget', submission.budget)}
                  ${fieldRow('Project type', submission.projectType)}
                </table>
                <p style="margin:20px 0 8px;color:#8a8f98;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                <p style="margin:0;padding:14px 16px;background:#f9f9fb;border:1px solid #eeeeee;border-radius:8px;color:#16181d;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(submission.message)}</p>
                <hr style="border:none;border-top:1px solid #eeeeee;margin:24px 0 16px;" />
                <p style="margin:0;color:#8a8f98;font-size:12px;line-height:1.6;">
                  Reply directly to this email to reach ${escapeHtml(submission.name)} at ${escapeHtml(submission.email)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}