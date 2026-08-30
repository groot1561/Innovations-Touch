/**
 * Portfolio Data — Innovations Touch
 * =====================================
 * 4 demo projects. Replace with actual project data for production.
 */

export interface PortfolioProject {
  number: string;
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const projects: PortfolioProject[] = [
  {
    number: "01",
    name: "Oak House",
    category: "Whole Home Renovation",
    location: "Dallas, Texas",
    description:
      "An extensive residential transformation focused on natural materials, open spaces, and warm contemporary detailing.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "Oak House whole home renovation featuring open living spaces with natural materials",
  },
  {
    number: "02",
    name: "River Residence",
    category: "Kitchen & Living Renovation",
    location: "Austin, Texas",
    description:
      "A thoughtful renovation connecting kitchen and living areas with seamless flow and refined material choices.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "River Residence kitchen renovation with modern cabinetry and integrated living area",
  },
  {
    number: "03",
    name: "North Park Home",
    category: "Bathroom & Interior Remodel",
    location: "Dallas, Texas",
    description:
      "A carefully considered interior remodel bringing calm sophistication to every room through material and proportion.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "North Park Home interior remodel with elegant bathroom and refined detailing",
  },
  {
    number: "04",
    name: "Modern Heights",
    category: "Complete Home Transformation",
    location: "Plano, Texas",
    description:
      "A complete home transformation embracing clean lines, generous natural light, and timeless architectural character.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format&fit=crop",
    imageAlt:
      "Modern Heights complete home transformation with contemporary exterior and landscaping",
  },
];
