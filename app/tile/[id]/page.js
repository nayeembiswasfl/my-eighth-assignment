import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Box, Brush, Heart, Minus, Plus, Ruler, ShoppingCart, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer, { TrustStrip } from "@/components/layout/Footer";
import AuthGuard from "@/components/auth/AuthGuard";
import { getTileById, tiles } from "@/data/tiles";

export function generateStaticParams() {
  return tiles.map((tile) => ({ id: tile.id }));
}

export function generateMetadata({ params }) {
  const tile = getTileById(params.id);
  return { title: tile ? `${tile.title} | TileCraft Gallery` : "Tile Details" };
}

export default function TileDetailsPage({ params }) {
  const tile = getTileById(params.id);
  if (!tile) notFound();

  const specs = [
    { icon: Ruler, label: "Dimensions", value: tile.dimensions },
    { icon: Box, label: "Material", value: tile.material },
    { icon: Sparkles, label: "Finish", value: tile.finish },
    { icon: BadgeCheck, label: "Category", value: `${tile.category[0].toUpperCase()}${tile.category.slice(1)} Tiles` },
    { icon: Brush, label: "Style", value: tile.style },
    { icon: Box, label: "Usage", value: tile.usage }
  ];

  return (
    <AuthGuard>
      <Navbar />
      <main className="details-page">
        <Link href="/all-tiles" className="back-link"><ArrowLeft size={18} /> Back to All Tiles</Link>
        <section className="details-layout">
          <div className="details-visuals">
            <div className="thumb-stack">
              {[tile.image, "/images/brand/hero-banner.png", tile.image, "/images/tiles/modern-geometric-grey.jpg"].map((src, index) => (
                <Image key={`${src}-${index}`} src={src} alt={`${tile.title} preview ${index + 1}`} width={96} height={96} className={index === 0 ? "selected" : ""} />
              ))}
            </div>
            <div className="main-preview">
              <Image src={tile.image} alt={tile.title} width={920} height={720} priority />
            </div>
          </div>
          <div className="details-info">
            <div className="stock-pill">{tile.inStock ? "In Stock" : "Out of Stock"}</div>
            <div className="details-title-row">
              <h1>{tile.title}</h1>
              <span>ID: {tile.id.toUpperCase()}</span>
            </div>
            <p className="creator">Creator: {tile.creator}</p>
            <p className="details-price">BDT {tile.price.toLocaleString()} <span>/ sq.ft</span></p>
            <p>{tile.description}</p>
            <p className="style-description">{tile.styleDescription}</p>
            <div className="spec-grid">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <Icon size={20} />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="tag-list">
              {tile.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="purchase-row">
              <div className="quantity"><Minus size={17} /> 1 <Plus size={17} /></div>
              <button className="dark-btn"><ShoppingCart size={20} /> Add to Cart</button>
              <button className="outline-btn"><Heart size={19} /> Add to Favorite</button>
            </div>
          </div>
        </section>
        <TrustStrip />
        <section className="description-tabs">
          <h2>Description</h2>
          <p>{tile.title} brings the beauty of curated surfaces into your space. Its {tile.finish.toLowerCase()} finish, reliable {tile.material.toLowerCase()} body, and {tile.style.toLowerCase()} character make it ideal for residential and commercial interiors.</p>
        </section>
      </main>
      <Footer />
    </AuthGuard>
  );
}
