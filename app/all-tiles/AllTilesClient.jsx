"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import TileCard from "@/components/tiles/TileCard";

export default function AllTilesClient({ tiles }) {
  const [query, setQuery] = useState("");

  const filteredTiles = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return tiles;
    return tiles.filter((tile) => tile.title.toLowerCase().includes(term));
  }, [query, tiles]);

  return (
    <section className="section gallery-section">
      <div className="gallery-search">
        <label className="input-shell">
          <Search size={22} />
          <input aria-label="Search tiles by title" placeholder="Search tiles by name..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <button className="outline-btn filter-btn"><SlidersHorizontal size={19} /> Filter</button>
      </div>
      <div className="tile-grid">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} compact />
        ))}
      </div>
      {!filteredTiles.length && <p className="empty-state">No tiles matched your search.</p>}
    </section>
  );
}
