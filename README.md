# TileCraft Gallery

TileCraft Gallery is a responsive single page tile showcase built for the Tiles Gallery assignment. It presents premium tile collections, searchable gallery cards, protected tile details, BetterAuth authentication, and profile update flows.

## Live URL

Deployment URL: add your Vercel or Render URL here after hosting.

## Purpose

The project helps visitors discover tile styles, view detailed tile information, and manage a logged-in profile. It follows the required public/private route split and is ready for SPA hosting on Vercel with reload-safe App Router routes.

## Key Features

- Home page with hero banner, announcement marquee, Swiper-powered featured tiles, and trust highlights.
- All Tiles page with a large styled search input for title-based filtering.
- Protected tile details pages with high-resolution preview, creator, style description, specs, stock status, and tags.
- Login and registration pages with email/password and Google social authentication through BetterAuth.
- My Profile page showing active user data and a protected update route for name and image URL changes.
- Custom navbar, footer, contact section, social links, loader state, and not-found page.
- Fully responsive layouts for mobile, tablet, and desktop.
- Environment variable based configuration for BetterAuth, MongoDB, and Google OAuth secrets.

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `mongodb`
- `swiper`
- `lucide-react`
- `eslint`
- `eslint-config-next`

## Environment Variables

Create a `.env.local` file using `.env.example` as a template.

```bash
BETTER_AUTH_SECRET="replace-with-a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
MONGODB_URI="mongodb+srv://user:password@cluster.mongodb.net/tilecraft"
GOOGLE_CLIENT_ID="your-google-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-client-secret"
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Route Permissions

- Public: `/`, `/all-tiles`, `/login`, `/register`
- Private: `/tile/[id]`, `/my-profile`, `/my-profile/update`

## Deployment Notes

Deploy the app to Vercel or Render and configure the same environment variables in the hosting dashboard. For Vercel, the App Router handles route reloads for dynamic and nested routes.
