"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { useDummyUser } from "@/lib/dummy-auth";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useDummyUser();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [loading, pathname, router, user]);

  if (loading || !user) {
    return (
      <div className="page-loader">
        <LoaderCircle className="spin" size={34} />
        <span>Loading secure space...</span>
      </div>
    );
  }

  return children;
}
