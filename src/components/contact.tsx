"use client";

import { CheckCircle2, AlertCircle, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CopyEmail } from "@/components/copy-email";
import { profile } from "@/data/portfolio";
import { isValidEmail } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "success" | "error";

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

/**
 * Submission handler. Currently opens a prefilled email via mailto.
 * Replace the body with a fetch() call to Formspree, Resend, or an API route when ready.
 */
async function submitContact(values: FormValues): Promise<void> {
  const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
  const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (field: keyof FormValues) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    try {
      await submitContact(values);
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const fields: { id: keyof FormValues; label: string; type: string; autoComplete: string }[] = [
    { id: "name", label: "Name", type: "text", autoComplete: "name" },
    { id: "email", label: "Email", type: "email", autoComplete: "email" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's connect"
          description="Open to conversations about enterprise development, AI-assisted engineering, and new opportunities. Send a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <Reveal className="space-y-3">
            <a href={`mailto:${profile.email}`} className="glass flex min-h-11 items-center gap-3 p-4 transition-colors hover:border-accent/40">
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span className="min-w-0 break-words text-sm">{profile.email}</span>
            </a>
            <CopyEmail email={profile.email} />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3 p-4 transition-colors hover:border-accent/40"
            >
              <Linkedin className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-sm">linkedin.com/in/ejcaubat</span>
            </a>
            {profile.github ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 p-4 transition-colors hover:border-accent/40"
              >
                <Github className="h-5 w-5 text-accent" aria-hidden />
                <span className="text-sm">GitHub</span>
              </a>
            ) : (
              <div className="glass flex items-center gap-3 p-4 opacity-60">
                <Github className="h-5 w-5" aria-hidden />
                <span className="text-muted text-sm">GitHub — coming soon</span>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <form noValidate onSubmit={onSubmit} className="glass space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.id}>
                    <label htmlFor={`contact-${f.id}`} className="mb-1.5 block text-sm font-medium">
                      {f.label}
                    </label>
                    <input
                      id={`contact-${f.id}`}
                      name={f.id}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      value={values[f.id]}
                      onChange={(e) => onChange(f.id)(e.target.value)}
                      aria-invalid={Boolean(errors[f.id])}
                      aria-describedby={errors[f.id] ? `contact-${f.id}-error` : undefined}
                      className="input"
                      required
                    />
                    {errors[f.id] && (
                      <p id={`contact-${f.id}-error`} className="mt-1.5 text-xs text-red-500">
                        {errors[f.id]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => onChange("message")(e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className="input resize-y"
                  required
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                  <Send className="h-4 w-4" aria-hidden /> {submitting ? "Sending…" : "Send message"}
                </button>
                <div aria-live="polite" className="text-sm">
                  {status === "success" && (
                    <p className="flex items-center gap-2 text-emerald-500">
                      <CheckCircle2 className="h-4 w-4" aria-hidden /> Your email app should open with the message ready to send.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-2 text-red-500">
                      <AlertCircle className="h-4 w-4" aria-hidden /> Something went wrong. Please email me directly.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
