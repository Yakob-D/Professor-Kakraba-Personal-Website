"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/app/lib/utils";
import { contactReasons } from "@/app/contact/data";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Client-side contact form.
 *
 * BACKEND NOTE: `handleSubmit` currently only validates and simulates a
 * network round-trip. Wire it to a real submit path once one exists —
 * e.g. a Next.js Server Action that sends mail via a provider, or a POST to
 * the future CMS backend's /contact endpoint. The field shape below (name,
 * email, reason, message) is the payload contract to keep stable.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [reason, setReason] = useState(contactReasons[0].value);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      // TODO: replace with a real submission once a backend endpoint exists.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
      setReason(contactReasons[0].value);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-brand-300/60 bg-brand-gradient-soft p-10 text-center dark:border-brand-600">
        <span className="grid size-14 place-items-center rounded-full bg-brand-gradient text-white shadow-md dark:text-brand-950">
          <Icon name="check" className="size-6" />
        </span>
        <h3 className="text-xl font-semibold text-ink">Message sent</h3>
        <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted">
          Thanks for reaching out — a reply will come directly from his inbox, usually within a
          few business days.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" required placeholder="jane@example.org" />
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2.5 text-[0.8125rem] font-medium text-ink-soft">Reason</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {contactReasons.map((r) => (
            <label
              key={r.value}
              className={cn(
                "flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border px-3 py-3 text-center transition-colors",
                reason === r.value
                  ? "border-brand-400 bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200"
                  : "border-line text-muted hover:border-brand-300/60",
              )}
            >
              <input
                type="radio"
                name="reason"
                value={r.value}
                checked={reason === r.value}
                onChange={() => setReason(r.value)}
                className="sr-only"
              />
              <Icon name={r.icon} className="size-4" />
              <span className="text-[0.6875rem] font-medium leading-tight">{r.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-[0.8125rem] font-medium text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can I help?"
          className="w-full resize-none rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-[0.8125rem] font-medium text-accent-700">
          <Icon name="x" className="size-4" />
          Please fill in your name, email and a short message.
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[0.8125rem] font-medium text-ink-soft">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-full border border-line bg-bg px-4 text-sm text-ink placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      />
    </div>
  );
}
