"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Image as ImageIcon, UserRound } from "lucide-react";
import { updateDummyUser, useDummyUser } from "@/lib/dummy-auth";

export default function UpdateProfileClient() {
  const router = useRouter();
  const { user } = useDummyUser();
  const [form, setForm] = useState({ name: "", image: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        image: user.image || ""
      });
    }
  }, [user]);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    updateDummyUser({
      name: form.name,
      image: form.image
    });

    router.push("/my-profile");
    router.refresh();
    setLoading(false);
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
