import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthGuard from "@/components/auth/AuthGuard";
import ProfileClient from "./ProfileClient";

export const metadata = {
  title: "My Profile | TileCraft Gallery"
};

export default function MyProfilePage() {
  return (
    <AuthGuard>
      <Navbar />
      <ProfileClient />
      <Footer />
    </AuthGuard>
  );
}
