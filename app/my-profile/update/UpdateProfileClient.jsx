"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Image as ImageIcon, UserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileClient() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [form, setForm] = useState({ name: "", image: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setForm({
        name: session.user.name || "",
        image: session.user.image || ""
      });
    }
  }, [session]);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await authClient.updateUser({
        name: form.name,
        image: form.image
      });

      if (response?.error) {
        setMessage(response.error.message || "Update failed.");
        return;
      }

      router.push("/my-profile");
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Could not update profile.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="profile-page">
      <section className="update-panel">
        <h1>Update Information</h1>
        <p>Change the name and image URL shown on your TileCraft profile.</p>
        <form onSubmit={submit} className="auth-form">
          <label className="field">Name<span><UserRound size={19} /><input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required /></span></label>
          <label className="field">Image URL<span><ImageIcon size={19} /><input value={form.image} onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))} /></span></label>
          {message && <p className="form-error">{message}</p>}
          <button type="submit" className="dark-btn wide" disabled={loading}>{loading ? "Updating..." : "Update Information"}</button>
        </form>
      </section>
    </main>
  );
}
