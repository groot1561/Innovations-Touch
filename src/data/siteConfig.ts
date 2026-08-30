/**
 * Site Configuration — Innovations Touch
 * ========================================
 * All company information is centralized here for easy replacement.
 * Update these values when deploying for a real client.
 */

export const siteConfig = {
  // Brand
  name: "Innovations Touch",
  tagline: "Remodeling & Design",
  description:
    "Innovations Touch creates thoughtfully designed residential remodeling and renovation spaces with quality craftsmanship and attention to detail.",

  // URLs
  url: "https://innovationstouch.com",
  canonical: "https://innovationstouch.com",

  // Contact
  phone: "+1 (000) 000-0000",
  phoneRaw: "+10000000000",
  email: "hello@innovationstouch.com",

  // Location
  city: "Dallas",
  state: "Texas",
  address: {
    street: "1234 Example Avenue",
    city: "Dallas",
    stateAbbr: "TX",
    zip: "75201",
  },

  // Business Hours
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // Social Links
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },

  // Navigation
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact Us", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
