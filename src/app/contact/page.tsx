"use client";

import { useState, type FormEvent } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { contactSchema } from "@/lib/validations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors({});
    setStatusMessage("");

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20 text-white">
      <PageHeader subtitle="Any Query?" title="Contact Us" />

      {/* Contact Info + Form */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            {/* Call */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-[#33cc33]">
                Call
              </h3>
              <p className="text-gray-300">+23347-430-9510</p>
              <p className="text-gray-300">+23358-745-5400</p>
            </div>

            {/* Mail */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-[#33cc33]">
                Mail
              </h3>
              <p className="text-gray-300">ricomghana@gmail.com</p>
              <p className="text-gray-300">info@ricomghana.com</p>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-[#33cc33]">
                Location
              </h3>
              <p className="text-gray-300">
                7232 Accra Dansoman 308,
                <br />
                Obonu Street, 11372,
                <br />
                GH, Ghana
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-[#1a1a2e] px-4 py-2.5 text-white placeholder-gray-400 transition-all duration-200 focus:border-[#33cc33] focus:outline-none focus:ring-2 focus:ring-[#33cc33]/30"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {statusMessage && (
                <p
                  className={`text-sm font-medium ${
                    status === "success" ? "text-[#33cc33]" : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                isLoading={status === "loading"}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full">
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.27!3d5.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDansoman%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>
    </main>
  );
}
