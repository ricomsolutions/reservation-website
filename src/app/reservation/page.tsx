"use client";

import { useState, type FormEvent } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { reservationSchema } from "@/lib/validations";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    partySize: 1,
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "partySize" ? Number(value) : value,
    }));
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
    setMessage("");

    const result = reservationSchema.safeParse(formData);
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
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit reservation");
      }

      setStatus("success");
      setMessage("Your reservation has been submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        partySize: 1,
        date: "",
        time: "",
      });
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20 text-white">
      <PageHeader subtitle="Book your Table" title="Reservation" />

      {/* Reservation Info */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-gray-300 leading-relaxed">
          Restaurant will be open for all days, Sunday night will be closed. All
          booking payment is secured with credit card, no charges will be applied
          for online booking. Non-refundable.
        </p>
        <p className="mt-4 text-lg font-semibold text-[#33cc33]">
          Phone: +233-123-123456
        </p>
      </section>

      {/* Reservation Form */}
      <section className="mx-auto max-w-2xl px-4 pb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
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
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <div className="w-full">
              <label
                htmlFor="partySize"
                className="mb-1.5 block text-sm font-medium text-gray-300"
              >
                Party Size
              </label>
              <select
                id="partySize"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-[#1a1a2e] px-4 py-2.5 text-white transition-all duration-200 focus:border-[#33cc33] focus:outline-none focus:ring-2 focus:ring-[#33cc33]/30"
              >
                <option value={1}>1 Person</option>
                <option value={2}>2 People</option>
                <option value={3}>3 People</option>
                <option value={4}>4 People</option>
              </select>
              {errors.partySize && (
                <p className="mt-1 text-sm text-red-400">{errors.partySize}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              error={errors.date}
            />
            <Input
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              error={errors.time}
            />
          </div>

          {message && (
            <p
              className={`text-center text-sm font-medium ${
                status === "success" ? "text-[#33cc33]" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              isLoading={status === "loading"}
            >
              Book A Table
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
