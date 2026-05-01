"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, LogOut, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const links = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" }
];

export default function Navbar({ dark = false }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const isLoggedIn = Boolean(session?.user);

  async function handleLogout() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className={`site-header ${dark ? "site-header-dark" : ""}`}>
      <Link href="/" className="brand" aria-label="TileCraft home">
        <Image src="/images/brand/website-logo.png" alt="TileCraft" width={178} height={64} priority />
      </Link>

      <nav className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <button aria-label="Notifications" className="icon-btn">
          <Bell size={20} />
        </button>
        {isLoggedIn ? (
          <>
            <Link href="/my-profile" aria-label="Open profile">
              <span className="avatar">
                {session.user.image ? (
                  <img src={session.user.image} alt={session.user.name || "User"} />
                ) : (
                  <UserRound size={20} />
                )}
              </span>
            </Link>
            <button className="gold-btn" onClick={handleLogout}><LogOut size={18} /> Logout</button>
          </>
        ) : (
          <Link href="/login" className="gold-btn">
            <UserRound size={18} />
            Login
          </Link>
        )}
        <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
