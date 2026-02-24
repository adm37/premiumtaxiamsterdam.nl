import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumtaxiamsterdam.nl';
const DEFAULT_TITLE = 'Premium Taxi Amsterdam | Betrouwbare Taximservice';
const DEFAULT_DESCRIPTION = 'Professionele taximservice in Amsterdam. Luxe Mercedes en Tesla vloot. Directe contact, vaste prijzen.';

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  imageUrl?: string
): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const image = imageUrl || `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Premium Taxi Amsterdam',
      locale: 'nl_NL',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export function getLocationMetadata(
  neighborhood: string,
  path: string
): Metadata {
  const title = `Taxi ${neighborhood} Amsterdam | Premium Taxi Service`;
  const description = `Snel en betrouwbare taximservice in ${neighborhood}, Amsterdam. Luxe vloot, vaste prijzen en professionele chauffeurs.`;

  return generatePageMetadata(title, description, path);
}

export function getAdminMetadata(): Metadata {
  return {
    title: 'Admin Dashboard | Premium Taxi Amsterdam',
    description: 'Admin dashboard voor Premium Taxi Amsterdam boekingen en beheer.',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: 'Admin Dashboard',
      description: 'Admin dashboard',
      type: 'website',
    },
  };
}

export const SITE_CONFIG = {
  url: SITE_URL,
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
};
