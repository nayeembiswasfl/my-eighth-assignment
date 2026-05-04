"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/banners/banner-3.png",
    label: "Modern Surface Design"
  },
  {
    image: "/images/banners/banner-1.png",
    label: "Premium Interiors"
  },
  {
    image: "/images/banners/banner-2.png",
    label: "Luxury Tile Gallery"
  },
  {
    image: "/images/banners/banner-4.png",
    label: "Inspired Living Spaces"
  }
];

export default function LiveHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-hero live-hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.label}
            className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="hero-copy">
        <span className="hero-kicker">{slides[activeSlide].label}</span>
        <h1>Discover Your <span>Perfect</span> Aesthetic</h1>
        <p>Premium tiles for modern living spaces</p>
        <Link href="/all-tiles" className="dark-btn hero-btn">
          Browse Now <ArrowRight size={20} />
        </Link>
      </div>

      <div className="hero-dots" aria-label="Hero slide indicator">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            className={index === activeSlide ? "is-active" : ""}
            aria-label={`Show ${slide.label}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
