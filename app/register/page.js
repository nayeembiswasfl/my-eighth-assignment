import Navbar from "@/components/layout/Navbar";
import AuthForm from "@/components/auth/AuthForm";
import { Suspense } from "react";

export const metadata = {
  title: "Register | TileCraft Gallery"
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <Suspense>
        <AuthForm mode="register" />
      </Suspense>
    </>
  );
}
