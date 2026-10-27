"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    inquiry: "POS Software Demo",
    message: "",
  });

  const whatsappNumber = "94789787495";
  const contactEmail = "damithmthennakoon@gmail.com";

  function updateField(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function getMessage() {
    return `Mind Sync Website Inquiry

Name: ${form.name}
Business: ${form.business}
Email: ${form.email}
Phone: ${form.phone}
Inquiry: ${form.inquiry}

Message:
${form.message}`;
  }

  function sendWhatsApp() {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      getMessage(),
    )}`;

    window.open(url, "_blank");
  }

  function sendEmail() {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Mind Sync Inquiry - ${form.inquiry}`);

    const body = encodeURIComponent(getMessage());

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#080b12] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact Mind Sync
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s Talk About Your Business
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have questions about our POS software? Contact us for a demo,
            pricing details, or technical support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#111722] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                ✉
              </div>

              <h2 className="text-lg font-semibold">Email Us</h2>

              <p className="mt-2 break-all text-sm text-gray-400">
                {contactEmail}
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Send an Email →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111722] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400">
                ☎
              </div>

              <h2 className="text-lg font-semibold">WhatsApp</h2>

              <p className="mt-2 text-sm text-gray-400">+94 78 978 7495</p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-green-400 hover:text-green-300"
              >
                Chat on WhatsApp →
              </a>
            </div>

            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">
              <h2 className="font-semibold text-cyan-300">Need a POS Demo?</h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Tell us about your business. We can help you find the right
                solution for your shop.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#111722] p-6 sm:p-8 lg:col-span-2">
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>

            <p className="mt-2 text-sm text-gray-400">
              Fill in the form below and choose how you want to contact us.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Business Name
                  </label>

                  <input
                    name="business"
                    value={form.business}
                    onChange={updateField}
                    placeholder="Your business"
                    className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+94 7X XXX XXXX"
                    className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Inquiry Type
                </label>

                <select
                  name="inquiry"
                  value={form.inquiry}
                  onChange={updateField}
                  className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none focus:border-cyan-400"
                >
                  <option>POS Software Demo</option>
                  <option>Pricing Inquiry</option>
                  <option>Technical Support</option>
                  <option>Barcode & Label Designer</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="flex-1 rounded-full bg-green-500 px-6 py-3.5 font-semibold text-white transition hover:bg-green-400"
                >
                  Send via WhatsApp →
                </button>

                <button
                  type="button"
                  onClick={sendEmail}
                  className="flex-1 rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-[#080b12] transition hover:bg-cyan-300"
                >
                  Send via Email →
                </button>
              </div>

              <p className="text-xs leading-5 text-gray-500">
                WhatsApp opens a pre-filled message. Email opens your email
                application with the message prepared. You must press Send in
                the selected application.
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 Mind Sync. All rights reserved.
        </div>
      </div>
    </main>
  );
}
