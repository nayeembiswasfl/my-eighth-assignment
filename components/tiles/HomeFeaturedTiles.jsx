"use client";

import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import FeaturedTiles from "@/components/tiles/FeaturedTiles";

export default function HomeFeaturedTiles({ fallbackTiles }) {
  const [tiles, setTiles] = useState(fallbackTiles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadTiles() {
      try {
        const response = await fetch("/api/tiles");
        const data = await response.json();
        if (active) setTiles(data.slice(0, 4));
      } catch {
        if (active) setTiles(fallbackTiles);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadTiles();

    return () => {
      active = false;
    };
  }, [fallbackTiles]);

  if (loading) {
    return (
      <section className="section">
        <div className="section-heading">
          <div>
            <h2>Featured Tiles</h2>
            <span className="heading-line" />
          </div>
        </div>
        <div className="inline-loader">
          <LoaderCircle className="spin" size={28} />
          <span>Loading featured tiles...</span>
        </div>
      </section>
    );
  }

  return <FeaturedTiles tiles={tiles} />;
}
