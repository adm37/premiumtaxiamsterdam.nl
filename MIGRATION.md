# Next.js + Supabase + Gemini Project

## Next.js Migration

This project has been migrated from Vite + React to **Next.js 14** with the App Router.

### Key Changes

1. **Framework**: Vite → Next.js 14
2. **Routing**: Custom React routing → Next.js App Router
3. **Build System**: Vite → Next.js build system
4. **File Structure**: Components moved to `/app/components`
5. **Pages**: Each route has its own page file in `/app`

### File Structure

```
app/
├── page.tsx                 # Home page
├── reserveren/page.tsx      # Booking page
├── schiphol/page.tsx        # Schiphol rates page
├── contact/page.tsx         # Contact page
├── admin/page.tsx           # Admin page
├── api/                     # Optional: API routes
├── components/              # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Services.tsx
├── lib/                     # Utilities and services
│   ├── supabase.ts
│   └── geminiService.ts
├── layout.tsx               # Root layout
└── globals.css              # Global styles
```

### Setup & Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with your configuration:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
GEMINI_API_KEY=your_api_key
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Key Features

- ✅ Responsive design with Tailwind CSS
- ✅ Next.js App Router for modern routing
- ✅ Supabase integration for bookings
- ✅ Gemini AI integration for chatbot
- ✅ TypeScript support
- ✅ SEO optimized

### NextJS Benefits Over Vite

- Built-in server rendering (SSR)
- Automatic image optimization
- Built-in API routes
- Better SEO support
- Incremental Static Regeneration (ISR)
- Better production performance

### Configuration Files

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm start` - Start production server
- `npm run lint` - Run linter

---

For more information on Next.js, visit: https://nextjs.org/docs
