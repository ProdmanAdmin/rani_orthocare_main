"use client";

import { useState } from "react";
import { phoneHref, site } from "@/lib/site";

// Contact form delivered by Netlify Forms (Next.js runtime v5).
// - The form is declared in public/__forms.html (Netlify only detects forms in static HTML) and this
//   component POSTs to that file. Field names here must match that file exactly.
// - Success is shown ONLY when the response is ok. Any failure says so honestly and offers the phone number.
// - "bot-field" is the honeypot: hidden from people, filled in by spam bots, which Netlify then drops.
// - Locally (`next start`) the POST is not handled, so you will see the error state. Test on a Netlify
//   deploy and send one real test enquiry before launch.
const EMPTY = { name: "", phone: "", email: "", message: "" };

export default function ContactForm() {
  const [fields, setFields] = useState(EMPTY);
  const [botField, setBotField] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function validate() {
    const e = {};
    if (fields.name.trim().length < 2) e.name = "Please enter your name.";
    if (fields.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a phone number with at least 10 digits.";
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Please enter a valid email address.";
    if (fields.message.trim().length < 10) e.message = "Please write at least 10 characters.";
    return e;
  }

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", "bot-field": botField, ...fields }).toString(),
      });
      if (!res.ok) throw new Error(`Form service returned ${res.status}`);
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-green-800">Message sent</h3>
        <p className="text-green-800">Thank you. We have received your message and will contact you soon.</p>
      </div>
    );
  }

  const field = (name, label, props = {}, optional = false) => (
    <div>
      <label htmlFor={name} className="mb-1 block font-medium">
        {label} {optional ? <span className="font-normal text-muted">(optional)</span> : <span aria-hidden="true">*</span>}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={fields[name]}
          onChange={handleChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className="field"
        />
      ) : (
        <input
          id={name}
          name={name}
          value={fields[name]}
          onChange={handleChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className="field"
          {...props}
        />
      )}
      {errors[name] && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form name="contact" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <p className="sr-only">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} />
        </label>
      </p>
      {field("name", "Name", { type: "text", autoComplete: "name" })}
      {field("phone", "Phone number", { type: "tel", autoComplete: "tel" })}
      {field("email", "Email", { type: "email", autoComplete: "email" }, true)}
      {field("message", "How can we help?", { as: "textarea" })}

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          Sorry, your message could not be sent. Please call us on{" "}
          <a href={phoneHref} className="font-semibold underline">
            {site.phone}
          </a>{" "}
          or try again.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary self-start">
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
