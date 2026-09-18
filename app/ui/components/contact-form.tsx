"use client";

import { useState, type SubmitEvent } from "react";
import Button from "./button";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setPending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Sending failed");

      setStatus("Message sent. Thanks for reaching out!");
      form.reset();
    } catch {
      setStatus("Could not send your message. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const inputTitle = "flex flex-col w-full text-label-S-general text-gray-600 gap-1"

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-4 mt-4 rounded-xl bg-gray-20 ring-1 ring-gray-50"
    >
      <fieldset disabled={pending} className="space-y-2">
        <div className="flex gap-3">
          <label className={inputTitle}>
            Name
            <input
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              maxLength={100}
              className="form-input text-label-S-general"
            />
          </label>

          <label className={inputTitle}>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              required
              maxLength={254}
              className="form-input text-label-S-general"
            />
          </label>
        </div>

        <label className={inputTitle}>
          Subject
          <input
            name="subject"
            placeholder="Subject"
            required
            maxLength={200}
            className="form-input text-label-S-general"
          />
        </label>

        <label className={inputTitle}>
          Message
          <textarea
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            className="form-input text-label-S-general min-h-30"
          />
        </label>

        <div className="flex justify-end">
          <Button variant="primary-blue" size="small" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </fieldset>

      <p role="status" className="mt-2 text-body-S-general">
        {status}
      </p>
    </form>
  );
}