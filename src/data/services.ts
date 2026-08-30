/**
 * Services Data — Innovations Touch
 * ====================================
 * Exactly 4 services. Update descriptions and images for production.
 */

export interface Service {
  number: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    number: "01",
    name: "Kitchen Renovation",
    description:
      "Beautiful, functional kitchens designed around the way you live.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "Modern luxury kitchen with marble countertops and warm natural lighting",
  },
  {
    number: "02",
    name: "Bathroom Remodeling",
    description:
      "Calm, refined bathrooms combining comfort, function, and thoughtful detail.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "Elegant modern bathroom with freestanding tub and natural stone finishes",
  },
  {
    number: "03",
    name: "Design Build Homes",
    description:
      "Complete design-build solutions that bring your vision from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "Contemporary residential home exterior with clean architectural lines",
  },
  {
    number: "04",
    name: "Hall Renovation",
    description:
      "Refined living spaces designed with thoughtful proportions, materials, lighting, and detail.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "Spacious renovated living hall with natural light and contemporary finishes",
  },
];
