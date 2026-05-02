"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, LogOut, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { logoutDummyUser, useDummyUser } from "@/lib/dummy-auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" }
];

export default function Navbar({ dark = false }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { user } = useDummyUser();
  const isLoggedIn = Boolean(user);

  function handleLogout() {
    logoutDummyUser();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className={`site-header ${dark ? "site-header-dark" : ""}`}>
      <Link href="/" className="brand" aria-label="TileCraft home">
        <Image src="/images/brand/final-logo.png" alt="TileCraft" width={68} height={65} priority />
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
        {isLoggedIn ? (
          <button className="mobile-auth-link" onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
        ) : (
          <Link href="/login" className="mobile-auth-link" onClick={() => setOpen(false)}>
            <UserRound size={18} /> Login
          </Link>
        )}
      </nav>

      <div className="nav-actions">
        <button aria-label="Notifications" className="icon-btn">
          <Bell size={20} />
        </button>
        {isLoggedIn ? (
          <>
            <Link href="/my-profile" aria-label="Open profile">
              <span className="avatar">
                {user.image ? (
                  <img src={user.image} alt={user.name || "User"} />
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
