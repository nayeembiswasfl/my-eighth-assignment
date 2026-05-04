import Navbar from "@/components/layout/Navbar";
import Footer, { TrustStrip } from "@/components/layout/Footer";
import HomeFeaturedTiles from "@/components/tiles/HomeFeaturedTiles";
import LiveHero from "@/components/home/LiveHero";
import { tiles } from "@/data/tiles";

export default function HomePage() {
  return (
    <>
      <Navbar dark />
      <main>
        <LiveHero />
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
