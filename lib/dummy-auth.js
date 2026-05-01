"use client";

import { useEffect, useState } from "react";

const USER_KEY = "tilecraft_user";
const CHANGE_EVENT = "tilecraft-auth-change";

const defaultUser = {
  name: "TileCraft User",
  email: "student@example.com",
  image: ""
};

function readUser() {
  if (typeof window === "undefined") return null;

  try {
    const saved = window.localStorage.getItem(USER_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function writeUser(user) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function loginDummyUser({ email, name, image } = {}) {
  const user = {
    name: name || email?.split("@")[0] || defaultUser.name,
    email: email || defaultUser.email,
    image: image || ""
  };

  writeUser(user);
  return user;
}

export function logoutDummyUser() {
  window.localStorage.removeItem(USER_KEY);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function updateDummyUser(data) {
  const current = readUser() || defaultUser;
  const updated = {
    ...current,
    name: data.name || current.name,
    image: data.image || ""
  };

  writeUser(updated);
  return updated;
}

export function useDummyUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function syncUser() {
      setUser(readUser());
      setLoading(false);
    }

    syncUser();
    window.addEventListener(CHANGE_EVENT, syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener(CHANGE_EVENT, syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  return { user, loading };
}
