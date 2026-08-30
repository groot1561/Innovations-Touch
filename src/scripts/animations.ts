/**
 * Animations — Innovations Touch
 * =================================
 * Global GSAP animation system with ScrollTrigger.
 * Handles: header scroll, hero load, services horizontal scroll,
 * portfolio reveals, contact reveals.
 *
 * Uses gsap.matchMedia() for responsive breakpoints.
 * Respects prefers-reduced-motion.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Header Scroll Transition
// ============================================
function initHeaderScroll(): void {
  const header = document.getElementById("site-header");
  if (!header) return;

  ScrollTrigger.create({
    start: "top -80",
    onUpdate: (self) => {
      if (self.direction === 1 && self.scroll() > 80) {
        header.classList.add("header-scrolled");
      } else if (self.scroll() <= 80) {
        header.classList.remove("header-scrolled");
      }
    },
  });
}

// ============================================
// Active Navigation Tracking
// ============================================
function initActiveNav(): void {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("[data-section]");

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveNav(`#${section.id}`),
      onEnterBack: () => setActiveNav(`#${section.id}`),
    });
  });

  function setActiveNav(href: string): void {
    navLinks.forEach((link) => {
      if (link.getAttribute("data-section") === href) {
        link.classList.add("nav-active");
      } else {
        link.classList.remove("nav-active");
      }
    });
  }
}

// ============================================
// Hero Load Animation
// ============================================
function initHeroLoad(): void {
  const tl = gsap.timeline({ delay: 0.3 });

  // Image scale
  tl.fromTo(
    ".hero-image-wrapper",
    { scale: 1.05 },
    { scale: 1, duration: 1.8, ease: "power2.out" },
    0
  );

  // Label
  tl.fromTo(
    ".hero-label",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    0.4
  );

  // Heading lines
  tl.fromTo(
    ".hero-heading-line",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.15 },
    0.6
  );

  // Supporting text
  tl.fromTo(
    ".hero-text",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    1.0
  );

  // CTAs
  tl.fromTo(
    ".hero-ctas",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    1.2
  );

  // Scroll indicator
  tl.fromTo(
    ".hero-scroll-indicator",
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: "power2.out" },
    1.6
  );

  // Header
  tl.fromTo(
    "#site-header",
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    0.2
  );
}

// ============================================
// Hero Parallax
// ============================================
function initHeroParallax(): void {
  gsap.to(".hero-image-wrapper", {
    y: 80,
    ease: "none",
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Fade hero content on scroll
  gsap.to(".hero-content", {
    opacity: 0,
    y: -30,
    ease: "none",
    scrollTrigger: {
      trigger: "#home",
      start: "30% top",
      end: "70% top",
      scrub: true,
    },
  });
}

// ============================================
// Services Architectural Grid Reveal
// ============================================
function initServicesGridReveal(): void {
  const cards = document.querySelectorAll(".services-grid .service-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    // Card Entrance Animation
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Inner Image Parallax on Scroll
    const img = card.querySelector(".service-card-img");
    if (img) {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  });
}

// ============================================
// Portfolio Section Reveal
// ============================================
function initPortfolioReveal(): void {
  const header = document.querySelector(".portfolio-header");
  if (header) {
    gsap.fromTo(
      header.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  const imageContainer = document.querySelector(".portfolio-image-container");
  if (imageContainer) {
    gsap.fromTo(
      imageContainer,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainer,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  const info = document.querySelector(".portfolio-info");
  if (info) {
    gsap.fromTo(
      info,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: info,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }
}

// ============================================
// Contact Section Reveal
// ============================================
function initContactReveal(): void {
  const header = document.querySelector(".contact-header");
  if (header) {
    gsap.fromTo(
      header.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  const info = document.querySelector(".contact-info");
  if (info) {
    gsap.fromTo(
      info.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: info,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  const formWrapper = document.querySelector(".contact-form-wrapper");
  if (formWrapper) {
    gsap.fromTo(
      formWrapper,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formWrapper,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }
}

// ============================================
// Services Section Header Reveal
// ============================================
function initServicesHeaderReveal(): void {
  const header = document.querySelector(".services-header");
  if (header) {
    gsap.fromTo(
      header.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }
}

// ============================================
// Main Initialization
// ============================================
function initAllAnimations(): void {
  // Kill existing ScrollTriggers to prevent duplicates
  ScrollTrigger.getAll().forEach((st) => st.kill());

  const mm = gsap.matchMedia();

  // Reduced motion check
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    // Make everything visible without animation
    gsap.set(
      [
        ".hero-label",
        ".hero-heading-line",
        ".hero-text",
        ".hero-ctas",
        ".hero-scroll-indicator",
        "#site-header",
      ],
      { opacity: 1, y: 0 }
    );
    gsap.set(".hero-image-wrapper", { scale: 1 });

    // Still init header scroll for functionality
    initHeaderScroll();
    initActiveNav();
    return;
  }

  // Always active
  initHeaderScroll();
  initActiveNav();
  initHeroLoad();
  initServicesHeaderReveal();
  initServicesGridReveal();
  initPortfolioReveal();
  initContactReveal();

  // Responsive animations
  mm.add("(min-width: 1024px)", () => {
    initHeroParallax();
    return () => {
      // Cleanup handled by matchMedia
    };
  });
}

// ============================================
// Initialize on DOM Ready
// ============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllAnimations);
} else {
  initAllAnimations();
}

// Handle Astro page transitions
document.addEventListener("astro:page-load", initAllAnimations);
document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
});
