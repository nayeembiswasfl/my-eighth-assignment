import Navbar from "@/components/layout/Navbar";
import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: "Register | TileCraft Gallery"
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <AuthForm mode="register" />
    </>
  );
}
