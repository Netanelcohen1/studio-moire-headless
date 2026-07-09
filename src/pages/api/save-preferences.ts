import type { APIRoute } from 'astro';
import { items } from '@wix/data';
import { members } from '@wix/members';

const COLLECTION = 'MemberPreferences';

export const POST: APIRoute = async ({ request }) => {
  // Identify the logged-in member (contextual member session).
  let member: any = null;
  try {
    const res = await members.getCurrentMember();
    member = (res as any)?.member ?? res;
  } catch {
    member = null;
  }
  if (!member?._id) {
    return new Response(null, { status: 302, headers: { Location: '/api/auth/login?returnToUrl=/account' } });
  }

  const form = await request.formData();
  const data = {
    memberId: member._id,
    email: member.loginEmail ?? member.contact?.email ?? '',
    preferredShootType: String(form.get('preferredShootType') ?? ''),
    preferredContact: String(form.get('preferredContact') ?? ''),
    preferredDate: String(form.get('preferredDate') ?? ''),
    notes: String(form.get('notes') ?? ''),
  };

  try {
    // Find this member's existing record (author-scoped read returns only their own).
    const { items: existing } = await items.query(COLLECTION).eq('memberId', member._id).limit(1).find();
    if (existing[0]?._id) {
      await items.update(COLLECTION, { ...existing[0], ...data });
    } else {
      await items.insert(COLLECTION, data);
    }
    return new Response(null, { status: 302, headers: { Location: '/account?saved=1' } });
  } catch (err) {
    console.error('[save-preferences] write failed:', err);
    return new Response(null, { status: 302, headers: { Location: '/account?error=1' } });
  }
};
