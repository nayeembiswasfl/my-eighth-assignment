"use client";

import { useEffect, useState } from "react";
import FeaturedTiles from "@/components/tiles/FeaturedTiles";

export default function HomeFeaturedTiles({ fallbackTiles }) {
  const [tiles, setTiles] = useState(fallbackTiles);

  useEffect(() => {
    let active = true;

    async function loadTiles() {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 3500);

      try {
        const response = await fetch("/api/tiles", {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Could not load featured tiles.");
        }

        const data = await response.json();
        if (active) setTiles(Array.isArray(data) ? data.slice(0, 4) : fallbackTiles);
      } catch {
        if (active) setTiles(fallbackTiles);
      } finally {
        window.clearTimeout(timeout);
      }
    }

    loadTiles();

    return () => {
      active = false;
    };
  }, [fallbackTiles]);

  return <FeaturedTiles tiles={tiles} />;
}
