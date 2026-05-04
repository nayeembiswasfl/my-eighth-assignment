"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Lock, Mail, UserRound, Image as ImageIcon } from "lucide-react";
import { loginDummyUser, registerDummyUser } from "@/lib/dummy-auth";

export default function AuthForm({ mode }) {
  const isLogin = mode === "login";
  const router = useRouter();
  const [next, setNext] = useState("/");
  const [form, setForm] = useState({
    name: "",
    email: isLogin ? "examiner@example.com" : "",
    image: "",
    password: isLogin ? "1234" : ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNext(params.get("next") || "/");
  }, []);

  function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!form.email.trim() || !form.password.trim()) {
      setMessage("Please provide both email and password.");
      setLoading(false);
      return;
    }

    if (form.password.length < 4) {
      setMessage("Password should be at least 4 characters for this demo.");
      setLoading(false);
      return;
    }

    if (!isLogin && !form.name.trim()) {
      setMessage("Please provide your name to register.");
      setLoading(false);
      return;
    }

    if (isLogin) {
      loginDummyUser({
        name: form.name,
        email: form.email,
        image: form.image
      });
    } else {
      registerDummyUser({
        name: form.name,
        email: form.email,
        image: form.image
      });
    }

    router.push(isLogin ? next : "/login");
    router.refresh();
    setLoading(false);
  }

  function googleLogin() {
    loginDummyUser({
      name: "Google Demo User",
      email: "google.user@example.com",
      image: "https://i.ibb.co.com/5x9C3qK/user-avatar.png"
    });
    router.push(next);
    router.refresh();
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <Image src="/images/brand/final-logo.png" alt="TileCraft" width={84} height={80} className="auth-logo" />
        <h1>{isLogin ? "Welcome Back!" : "Create Account"}</h1>
        <p>{isLogin ? "Use any email and password to explore premium tiles" : "Register yourself to save favorites and manage your profile"}</p>
        {isLogin && <p className="auth-note">You can reach this page from the navbar Login button or when opening private routes like Tile Details and My Profile.</p>}
        {isLogin && <p className="auth-note">Demo login is ready. Just press Login to review private pages.</p>}

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
