"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Lock, Mail, UserRound, Image as ImageIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function AuthForm({ mode }) {
  const isLogin = mode === "login";
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";
  const [form, setForm] = useState({ name: "", email: "", image: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = isLogin
        ? await authClient.signIn.email({ email: form.email, password: form.password })
        : await authClient.signUp.email({
            name: form.name,
            email: form.email,
            password: form.password,
            image: form.image
          });

      if (response?.error) {
        setMessage(response.error.message || "Authentication failed. Please try again.");
        return;
      }

      router.push(isLogin ? next : "/login");
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Something went wrong. Please check your configuration.");
    } finally {
      setLoading(false);
    }
  }

  async function googleLogin() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: next
    });
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <Image src="/images/brand/website-logo.png" alt="TileCraft" width={92} height={92} className="auth-logo" />
        <h1>{isLogin ? "Welcome Back!" : "Create Account"}</h1>
        <p>{isLogin ? "Login to your account and explore premium tiles" : "Register yourself to save favorites and manage your profile"}</p>

        <form onSubmit={submit} className="auth-form">
          {!isLogin && (
            <>
              <label className="field">Name<span><UserRound size={19} /><input placeholder="Your full name" value={form.name} onChange={(event) => update("name", event.target.value)} required /></span></label>
              <label className="field">Photo URL<span><ImageIcon size={19} /><input placeholder="https://example.com/photo.jpg" value={form.image} onChange={(event) => update("image", event.target.value)} /></span></label>
            </>
          )}
          <label className="field">Email Address<span><Mail size={19} /><input type="email" placeholder="your@email.com" value={form.email} onChange={(event) => update("email", event.target.value)} required /></span></label>
          <label className="field">Password<span><Lock size={19} /><input type="password" placeholder="Enter your password" value={form.password} onChange={(event) => update("password", event.target.value)} required /></span></label>
          {message && <p className="form-error">{message}</p>}
          <button type="submit" className="dark-btn wide" disabled={loading}>{loading ? "Please wait..." : isLogin ? "Login" : "Register"}</button>
        </form>

        <div className="divider"><span />Or continue with<span /></div>
        <button className="google-btn" onClick={googleLogin}>
          <span className="google-mark">G</span> Continue with Google
        </button>
        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Link href={isLogin ? "/register" : "/login"}>{isLogin ? " Register" : " Login"}</Link>
        </p>
      </div>
    </main>
  );
}
