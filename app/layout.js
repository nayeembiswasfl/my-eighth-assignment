import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "TileCraft Gallery",
  description: "A premium responsive tile gallery built with Next.js and BetterAuth."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
