import Navbar from "@/components/layout/Navbar";
import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: "Login | TileCraft Gallery"
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <AuthForm mode="login" />
    </>
  );
}
