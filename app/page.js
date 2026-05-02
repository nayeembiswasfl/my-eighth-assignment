import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer, { TrustStrip } from "@/components/layout/Footer";
import HomeFeaturedTiles from "@/components/tiles/HomeFeaturedTiles";
import { tiles } from "@/data/tiles";

export default function HomePage() {
  return (
    <>
      <Navbar dark />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <h1>Discover Your <span>Perfect</span> Aesthetic</h1>
            <p>Premium tiles for modern living spaces</p>
            <Link href="/all-tiles" className="dark-btn hero-btn">
              Browse Now <ArrowRight size={20} />
            </Link>
          </div>
        </section>
        <div className="marquee" aria-label="TileCraft announcements">
          <div>
            New Arrivals: Ocean Blue Ceramic | Weekly Feature: Modern Geometric Patterns | Join the Community & Get Inspiring Ideas!
          </div>
        </div>
        <HomeFeaturedTiles fallbackTiles={tiles.slice(0, 4)} />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
