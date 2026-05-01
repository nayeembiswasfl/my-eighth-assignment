import Navbar from "@/components/layout/Navbar";
import AuthForm from "@/components/auth/AuthForm";
import { Suspense } from "react";

export const metadata = {
  title: "Login | TileCraft Gallery"
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Suspense>
        <AuthForm mode="login" />
      </Suspense>
    </>
  );
}
