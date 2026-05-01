"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, PenLine, ShieldCheck, UserRound } from "lucide-react";
import { useDummyUser } from "@/lib/dummy-auth";

export default function ProfileClient() {
  const { user } = useDummyUser();

  return (
    <main className="profile-page">
      <section className="profile-panel">
        <div className="profile-cover" />
        <div className="profile-content">
          <div className="profile-avatar">
            {user?.image ? (
              <Image src={user.image} alt={user.name || "Profile"} width={150} height={150} />
            ) : (
              <UserRound size={74} />
            )}
          </div>
          <div className="profile-meta">
            <span className="stock-pill">Verified Member</span>
            <h1>{user?.name || "TileCraft Member"}</h1>
            <p><Mail size={18} /> {user?.email}</p>
            <p><ShieldCheck size={18} /> Profile data is saved locally for hassle-free assignment checking.</p>
          </div>
          <Link href="/my-profile/update" className="gold-btn">
            <PenLine size={18} />
            Update Profile
          </Link>
        </div>
      </section>
    </main>
  );
}
