import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found">
        <h1>404</h1>
        <p>The tile surface you are looking for does not exist.</p>
        <Link href="/all-tiles" className="dark-btn">Browse Tiles</Link>
      </main>
    </>
  );
}
