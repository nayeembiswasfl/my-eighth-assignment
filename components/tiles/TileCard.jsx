import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TileCard({ tile, compact = false }) {
  return (
    <article className="tile-card">
      <div className="tile-card-image">
        <Image src={tile.image} alt={tile.title} width={520} height={420} />
      </div>
      <div className="tile-card-body">
        <h3>{tile.title}</h3>
        {!compact && <p className="tile-price">BDT {tile.price.toLocaleString()} <span>/ sq.ft</span></p>}
        <Link href={`/tile/${tile.id}`} className="dark-btn">
          {compact ? "Details" : "View Details"} <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
