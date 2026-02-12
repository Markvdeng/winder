// Image paths mapped to their purpose
// All images downloaded from the current winder.nl WordPress site

export const images = {
  logo: "/images/hero/logo.bmp",
  heroHomepage: "/images/hero/homepage-hero.jpeg",

  // Backgrounds
  aerialDrone: "/images/backgrounds/aerial-drone.jpg",
  contactHero: "/images/backgrounds/contact-hero.jpg",
  galleryHero: "/images/backgrounds/gallery-hero.jpg",
  torenkraanHero: "/images/backgrounds/torenkraan-hero.jpg",
  telescoopBg: "/images/backgrounds/telescoop-bg.jpg",
  autolaadkraanHero: "/images/backgrounds/autolaadkraan-hero.jpg",

  // Service card images
  services: {
    "mobiele-torenkranen": "/images/services/mobiele-torenkraan.jpg",
    telescoopkraan: "/images/services/telescoopkraan.jpg",
    autolaadkraan: "/images/services/autolaadkraan.jpg",
    transport: "/images/transport/hero-bg.jpg",
    "chalet-transport": "/images/services/chalet-transport.jpg",
    "adr-transport": "/images/services/adr-transport.jpg",
    pakketdienst: "/images/services/pakketdienst.jpg",
    werkvoorbereiding: "/images/services/werkvoorbereiding.jpg",
    "op-en-overslag": "/images/services/op-en-overslag.jpg",
    "propaangas-depot": "/images/services/propaangas.png",
    "exceptioneel-transport": "/images/transport/hero-bg.jpg",
    groupage: "/images/services/pakketdienst.jpg",
  } as Record<string, string>,

  // Crane spec images
  torenkranen: {
    "38m": "/images/cranes/torenkranen/38m.jpg",
    "44m": "/images/cranes/torenkranen/44m.jpg",
    "48m": "/images/cranes/torenkranen/48m.jpg",
    "60m": "/images/cranes/torenkranen/60m.jpg",
  },
  telescoopkranen: {
    main: "/images/cranes/telescoop/ltm-main.jpg",
    slides: [
      "/images/cranes/telescoop/slide-1.jpg",
      "/images/cranes/telescoop/slide-2.jpg",
      "/images/cranes/telescoop/slide-3.jpg",
      "/images/cranes/telescoop/slide-4.jpg",
      "/images/cranes/telescoop/slide-5.jpg",
      "/images/cranes/telescoop/300-ton.jpeg",
    ],
  },
  autolaadkranen: {
    main: "/images/cranes/autolaadkraan/main.jpg",
    "60tm-jib": "/images/cranes/autolaadkraan/60tm-jib.jpg",
    "35tm-jib": "/images/cranes/autolaadkraan/35tm-jib.jpg",
    "60-100tm-semi": "/images/cranes/autolaadkraan/60-100tm-semi.jpg",
    "80tm": "/images/cranes/autolaadkraan/80tm.jpg",
  },

  // About / Over ons
  about: {
    team1: "/images/about/team-1.jpg",
    team2: "/images/about/team-2.jpg",
    heroBg: "/images/about/hero-bg.jpg",
  },

  // Historie
  historie: {
    photo1: "/images/historie/historie-1.jpg",
    vintage: "/images/historie/historie-vintage.jpg",
    heroBg: "/images/historie/hero-bg.jpg",
  },

  // Locations
  locations: {
    alkmaar: "/images/locations/alkmaar.jpg",
    denhelder: "/images/locations/denhelder.jpg",
    hoornMap: "/images/locations/hoorn-map.png",
  },

  // Vacatures
  vacatures: {
    mechanic: "/images/vacatures/mechanic.jpg",
    newCrane: "/images/vacatures/new-crane.jpg",
    heroBg: "/images/vacatures/hero-bg.jpg",
  },

  // Propaangas
  propaangas: {
    benegas: "/images/propaangas/benegas.png",
    campingaz: "/images/propaangas/campingaz.png",
    heroBg: "/images/propaangas/hero-bg.jpg",
  },

  // Op en overslag
  overslag: {
    main: "/images/overslag/main.jpg",
    heroBg: "/images/overslag/hero-bg.jpg",
  },

  // Gallery (30 photos)
  gallery: Array.from({ length: 30 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    const ext = i === 7 ? "jpeg" : "jpg"; // #8 is .jpeg
    return `/images/gallery/${num}.${ext}`;
  }),
};
