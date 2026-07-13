import { useState } from "react";
import { submissions } from "@wix/forms";

const NEWSLETTER_FORM_ID = "aeae8442-6e30-4c34-8c14-b32e70fb38a1";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      await submissions.createSubmission({
        formId: NEWSLETTER_FORM_ID,
        submissions: { email },
      } as any);
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("[newsletter] submit failed:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="newsletter-success" role="status">You're on the list — we'll share studio news and openings.</p>;
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="nl-email" className="newsletter-label">Studio news &amp; booking openings</label>
      <div className="newsletter-row">
        <input
          id="nl-email"
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input"
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "submitting"} className="newsletter-button">
          {status === "submitting" ? "…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && <p className="newsletter-error" role="alert">Something went wrong — try again.</p>}
    </form>
  );
}
