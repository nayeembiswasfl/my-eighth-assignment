import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Play, Gem, Grid2X2, ShieldCheck, Headphones, Send } from "lucide-react";

export function TrustStrip() {
  const items = [
    { icon: Gem, title: "Premium Quality", text: "Finest materials for lasting beauty" },
    { icon: Grid2X2, title: "Wide Variety", text: "Styles for every taste & space" },
    { icon: ShieldCheck, title: "Built to Last", text: "Durable, reliable & long-lasting tiles" },
    { icon: Headphones, title: "Expert Support", text: "We are here to help you" }
  ];

  return (
    <section className="trust-strip">
      {items.map(({ icon: Icon, title, text }) => (
        <article key={title} className="trust-item">
          <Icon size={42} />
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Image src="/images/brand/website-logo.png" alt="TileCraft" width={180} height={64} className="footer-logo" />
          <p>We provide a wide range of premium tiles to elevate every corner of your space with elegance and durability.</p>
          <div className="socials">
            <Link href="https://facebook.com" aria-label="Facebook"><Facebook size={20} /></Link>
            <Link href="https://instagram.com" aria-label="Instagram"><Instagram size={20} /></Link>
            <Link href="https://pinterest.com" aria-label="Pinterest"><Send size={20} /></Link>
            <Link href="https://youtube.com" aria-label="YouTube"><Play size={20} /></Link>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>
          <Link href="/my-profile">My Profile</Link>
          <Link href="/login">Contact Us</Link>
        </div>
        <div>
          <h3>Categories</h3>
          <span>Ceramic Tiles</span>
          <span>Porcelain Tiles</span>
          <span>Marble Tiles</span>
          <span>Mosaic Tiles</span>
          <span>Outdoor Tiles</span>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p className="contact-line"><MapPin size={20} /> 123, Tile Street, Dhaka, Bangladesh</p>
          <p className="contact-line"><Phone size={20} /> +880 1234-567890</p>
          <p className="contact-line"><Mail size={20} /> info@tilecraft.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TileCraft. All Rights Reserved.</span>
        <span>Privacy Policy | Terms & Conditions</span>
      </div>
    </footer>
  );
}
