import { useState } from "react";
import { submissions } from "@wix/forms";

interface FormField {
  label: string;
  target: string;
  required: boolean;
  componentType: string;
  identifier?: string;
}

interface ContactFormProps {
  formId: string;
  fields: FormField[];
  successMessage?: string;
  submitLabel?: string;
}

export default function ContactForm({
  formId,
  fields,
  successMessage = "Thanks — Studio Moire will reply with the next available option and any details to prepare.",
  submitLabel = "Send a note",
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    try {
      const result = await submissions.createSubmission({
        formId,
        submissions: formData,
      } as any);
      const s = (result as any)?.status;
      if (s === "PENDING" || s === "CONFIRMED" || result) {
        setStatus("success");
        setFormData({});
      } else {
        setStatus("error");
      }
    } catch (err: unknown) {
      const violations = (err as any)?.details?.validationError?.fieldViolations ?? [];
      const errorMap: Record<string, string> = {};
      for (const v of violations) {
        const fieldErrs: { errorPath?: string; errorMessage?: string }[] = v?.data?.errors ?? [];
        for (const fe of fieldErrs) {
          if (fe.errorPath && !errorMap[fe.errorPath]) {
            errorMap[fe.errorPath] = fe.errorMessage ?? "Invalid value";
          }
        }
      }
      if (Object.keys(errorMap).length > 0) {
        setFieldErrors(errorMap);
        setStatus("idle");
      } else {
        setStatus("error");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-container" noValidate>
      {fields.map((field) => (
        <div key={field.target} className="form-field">
          <label className="form-label" htmlFor={`f-${field.target}`}>
            {field.label}
            {field.required && <span className="required" aria-hidden="true"> *</span>}
          </label>
          {field.identifier === "TEXT_AREA" || field.target === "message" ? (
            <textarea
              id={`f-${field.target}`}
              required={field.required}
              value={formData[field.target] ?? ""}
              onChange={(e) => setFormData((p) => ({ ...p, [field.target]: e.target.value }))}
              rows={4}
              className={`form-textarea${fieldErrors[field.target] ? " form-input-error" : ""}`}
            />
          ) : (
            <input
              id={`f-${field.target}`}
              type={
                field.target === "email"
                  ? "email"
                  : field.componentType === "PHONE_INPUT"
                    ? "tel"
                    : "text"
              }
              required={field.required}
              value={formData[field.target] ?? ""}
              onChange={(e) => setFormData((p) => ({ ...p, [field.target]: e.target.value }))}
              className={`form-input${fieldErrors[field.target] ? " form-input-error" : ""}`}
            />
          )}
          {fieldErrors[field.target] && (
            <p className="form-field-error">{fieldErrors[field.target]}</p>
          )}
        </div>
      ))}
      <p className="form-reassurance">No payment is taken until you confirm the selected option.</p>
      <button type="submit" disabled={status === "submitting"} className="btn-primary form-button">
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
      {status === "error" && (
        <p className="form-error" role="alert">Something went wrong. Please try again, or email hello@studio-moire.example.</p>
      )}
    </form>
  );
}
