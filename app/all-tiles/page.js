import Navbar from "@/components/layout/Navbar";
import Footer, { TrustStrip } from "@/components/layout/Footer";
import AllTilesClient from "./AllTilesClient";
import { tiles } from "@/data/tiles";

export const metadata = {
  title: "All Tiles | TileCraft Gallery"
};

export default function AllTilesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero compact-hero">
          <div>
            <h1>All Tiles</h1>
            <span className="heading-line" />
            <p>Explore our wide collection of premium tiles for every style and space.</p>
          </div>
        </section>
        <AllTilesClient tiles={tiles} />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
