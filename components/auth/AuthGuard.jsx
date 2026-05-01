"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [isPending, pathname, router, session]);

  if (isPending || !session?.user) {
    return (
      <div className="page-loader">
        <LoaderCircle className="spin" size={34} />
        <span>Loading secure space...</span>
      </div>
    );
  }

  return children;
}
