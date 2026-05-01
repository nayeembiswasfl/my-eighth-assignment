import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthGuard from "@/components/auth/AuthGuard";
import UpdateProfileClient from "./UpdateProfileClient";

export const metadata = {
  title: "Update Profile | TileCraft Gallery"
};

export default function UpdateProfilePage() {
  return (
    <AuthGuard>
      <Navbar />
      <UpdateProfileClient />
      <Footer />
    </AuthGuard>
  );
}
