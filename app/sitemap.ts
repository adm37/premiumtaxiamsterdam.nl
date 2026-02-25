import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumtaxiamsterdam.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/reserveren`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/schiphol`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Locatie pagina's
  const locations = [
    { name: 'amsterdam-centrum', priority: 0.8 },
    { name: 'amsterdam-zuid', priority: 0.8 },
    { name: 'amsterdam-west', priority: 0.75 },
    { name: 'amsterdam-noord', priority: 0.75 },
    { name: 'de-pijp', priority: 0.8 },
    { name: 'diemen', priority: 0.7 },
    { name: 'ijburg', priority: 0.7 },
    { name: 'zeeburg', priority: 0.7 },
  ];

  locations.forEach((location) => {
    routes.push({
      url: `${SITE_URL}/${location.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: location.priority,
    });
  });

  return routes;
}
