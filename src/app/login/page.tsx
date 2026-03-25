"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { loginSchema } from "@/lib/validations";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#1a1a2e] p-8 shadow-xl">
        <div className="mb-6 text-center">
          <Link href="/">
            <Image
              src="/images/Rational.png"
              alt="Logo"
              width={150}
              height={60}
              className="mx-auto mb-4"
            />
          </Link>
          <h2 className="text-2xl font-bold text-white">Welcome Back!</h2>
          <p className="mt-1 text-sm text-gray-400">Sign In To Continue</p>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-primary" />
              Remember Me
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>
          <Button type="submit" fullWidth isLoading={isLoading}>
            Login
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        <div className="flex justify-center gap-4">
          {[FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle].map((Icon, i) => (
            <button
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a0a] text-white transition-colors hover:bg-primary"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t Have An Account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
