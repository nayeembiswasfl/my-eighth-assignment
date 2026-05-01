"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import TileCard from "@/components/tiles/TileCard";
import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedTiles({ tiles }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <h2>Featured Tiles</h2>
          <span className="heading-line" />
        </div>
        <Link href="/all-tiles" className="outline-btn">View All</Link>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 2 },
          980: { slidesPerView: 4 }
        }}
        className="featured-swiper"
      >
        {tiles.slice(0, 4).map((tile) => (
          <SwiperSlide key={tile.id}>
            <TileCard tile={tile} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
