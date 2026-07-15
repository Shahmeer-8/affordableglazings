// Product catalogue — content mirrors the reference site (affordableglazings.co.uk/products)
// verbatim: category taglines, product names, summaries, detail taglines and feature lists.
import productWindows from "@/assets/product-windows.jpg";
import windowsHero from "@/assets/windows-hero.jpg";
import windowsDetail from "@/assets/windows-detail.jpg";
import windowsInterior from "@/assets/windows-interior.jpg";
import windowsSash from "@/assets/windows-sash.jpg";
import windowsBay from "@/assets/windows-bay.jpg";
import productDoors from "@/assets/product-doors.jpg";
import doorsHero from "@/assets/doors-hero.jpg";
import doorsHardware from "@/assets/doors-hardware.jpg";
import doorsFrench from "@/assets/doors-french.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsBifold from "@/assets/doors-bifold.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import consHero from "@/assets/cons-hero.jpg";
import consGable from "@/assets/cons-gable.jpg";
import consInterior from "@/assets/cons-interior.jpg";
import consVictorian from "@/assets/cons-victorian.jpg";
import consTiled from "@/assets/cons-tiled.jpg";
import heroHome from "@/assets/hero-home.jpg";
import craftsman from "@/assets/craftsman.jpg";
import installer from "@/assets/installer.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  /** Short description shown on the products index card. */
  summary: string;
  /** Two key features highlighted on the index card. */
  cardFeatures: [string, string];
  /** Intro sentence(s) on the product detail hero. */
  tagline: string;
  /** Full feature list on the detail page. */
  features: string[];
  images: string[];
};

export type ProductCategory = {
  key: string;
  title: string;
  tagline: string;
  products: Product[];
};

export const SUPPLIERS = ["Cortizo", "Rehau", "Deceuninck", "Aluplast", "Origin", "Smart Systems"];

const WINDOWS: Product[] = [
  {
    slug: "sashwindows",
    name: "Sash Windows",
    category: "Windows",
    summary: "Classic vertical sliding windows that suit heritage-style and period homes.",
    cardFeatures: ["Smooth vertical sliding system", "High-quality draught proofing"],
    tagline: "Our sash windows combine classic charm with modern performance, perfect for heritage-style homes.",
    features: [
      "Smooth vertical sliding system",
      "Traditional aesthetics",
      "High-quality draught proofing",
      "Low maintenance uPVC or aluminium options",
    ],
    images: [windowsSash, windowsDetail, installer],
  },
  {
    slug: "casementwindows",
    name: "Casement Windows",
    category: "Windows",
    summary: "Versatile outward-opening windows that provide excellent airflow and energy performance.",
    cardFeatures: ["Highly energy-efficient seals", "Secure hinge and locking systems"],
    tagline: "Casement windows offer excellent airflow and versatility with their outward-opening design.",
    features: [
      "Highly energy-efficient seals",
      "Multiple opening styles",
      "Secure hinge and locking systems",
      "Suitable for all property types",
    ],
    images: [productWindows, windowsHero, installer],
  },
  {
    slug: "heritagewindows",
    name: "Heritage Windows",
    category: "Windows",
    summary: "Traditional-look windows for conservation areas and character properties.",
    cardFeatures: ["Authentic sightlines", "Slim frames"],
    tagline: "Designed to replicate traditional timber styles, our heritage windows are ideal for conservation areas or character homes.",
    features: [
      "Authentic sightlines",
      "Slim frames",
      "Superior insulation",
      "Customisable colours and finishes",
    ],
    images: [windowsBay, windowsSash, craftsman],
  },
  {
    slug: "baywindows",
    name: "Bay Windows",
    category: "Windows",
    summary: "Projecting window bays that create extra space and invite more natural light in.",
    cardFeatures: ["Expands room space outward", "Enhances natural light"],
    tagline: "Create a spacious, light-filled feature in your home with our custom bay windows.",
    features: [
      "Expands room space outward",
      "Enhances natural light",
      "Stylish and energy-efficient",
      "Custom configurations available",
    ],
    images: [windowsBay, heroHome, windowsDetail],
  },
  {
    slug: "flushwindows",
    name: "Flush Windows",
    category: "Windows",
    summary: "Sleek, modern windows where the sash sits perfectly flush within the outer frame.",
    cardFeatures: ["Smooth, flush-fitting sash design", "Slim, clean sightlines"],
    tagline: "Sleek, modern windows with sash frames that sit perfectly flush within the outer frame, offering a clean, minimalist, and timber-style appearance.",
    features: [
      "Smooth, flush-fitting sash design",
      "Slim, clean sightlines",
      "Modern or traditional timber-look finish",
      "Low-maintenance uPVC or aluminium options",
    ],
    images: [windowsDetail, windowsHero, productWindows],
  },
];

const DOORS: Product[] = [
  {
    slug: "singledoors",
    name: "Single Doors",
    category: "Doors",
    summary: "Secure composite entrance doors that combine kerb appeal with everyday durability.",
    cardFeatures: ["Multi-point locking for maximum security", "Excellent thermal efficiency"],
    tagline: "Upgrade your home's security and kerb appeal with our high-performance composite front doors. Built with a robust timber or steel-reinforced core and advanced GRP skins, these doors offer exceptional durability, insulation, and weather resistance.",
    features: [
      "Multi-point locking for maximum security",
      "Wide range of colours and woodgrain finishes",
      "Excellent thermal efficiency",
      "Low maintenance and long-lasting performance",
    ],
    images: [doorsHero, doorsHardware, craftsman],
  },
  {
    slug: "crittalldoors",
    name: "Crittall Doors",
    category: "Doors",
    summary: "Modern steel-look glazing with ultra-slim sightlines and industrial-inspired grid patterns.",
    cardFeatures: ["Ultra-slim sightlines", "Modern industrial grid design"],
    tagline: "Stylish steel-look doors with slim frames and grid glazing, designed to bring maximum light and a modern industrial finish to any space.",
    features: [
      "Ultra-slim sightlines",
      "Modern industrial grid design",
      "Strong steel or aluminium build",
      "High natural light flow",
    ],
    images: [windowsInterior, windowsDetail, productDoors],
  },
  {
    slug: "frenchdoors",
    name: "French Doors",
    category: "Doors",
    summary: "Classic double doors that suit traditional and contemporary homes alike.",
    cardFeatures: ["Twin-door opening for ventilation", "Secure multi-point locking"],
    tagline: "Classic and stylish, French doors bring a touch of elegance to any home.",
    features: [
      "Twin-door opening for ventilation",
      "Timeless design for traditional and modern homes",
      "Secure multi-point locking",
      "Energy-efficient glazing options",
    ],
    images: [doorsFrench, doorsHero, doorsHardware],
  },
  {
    slug: "slidingdoors",
    name: "Sliding Doors",
    category: "Doors",
    summary: "Large glass panels and effortless glide mechanisms that frame garden views.",
    cardFeatures: ["Effortless sliding mechanism", "Large glass panels for maximum natural light"],
    tagline: "Our smooth and sleek sliding doors are perfect for creating wide, uninterrupted views of your outdoor space.",
    features: [
      "Effortless sliding mechanism",
      "Large glass panels for maximum natural light",
      "Energy-efficient double or triple glazing",
      "Ideal for patios, gardens, and balconies",
    ],
    images: [doorsSliding, productDoors, heroHome],
  },
  {
    slug: "bifoldingdoors",
    name: "Bi-folding Doors",
    category: "Doors",
    summary: "Open-plan living solutions that stack panels neatly for seamless indoor-outdoor flows.",
    cardFeatures: ["Slim aluminium frames", "Flexible opening options"],
    tagline: "Transform your living space with our modern bi-folding doors, designed to open up entire walls and create seamless indoor-outdoor living.",
    features: [
      "Slim aluminium frames",
      "Flexible opening options",
      "High thermal insulation",
      "Secure locking and enhanced weather resistance",
    ],
    images: [doorsBifold, productDoors, doorsSliding],
  },
];

const ROOFLIGHTS: Product[] = [
  {
    slug: "slimrooflight",
    name: "Slim Rooflights",
    category: "Rooflights",
    summary: "Ultra-slim framed roof lanterns that maximise daylight with minimal sightlines.",
    cardFeatures: ["Super-slim aluminium profiles", "Maximum natural light entry"],
    tagline: "Ultra-slim framed roof lanterns designed to maximise daylight with modern minimal sightlines and superior thermal performance.",
    features: [
      "Super-slim aluminium profiles",
      "Maximum natural light entry",
      "Contemporary minimal design",
      "High thermal efficiency",
      "Ideal for kitchens, extensions & flat roofs",
    ],
    images: [consHero, consInterior],
  },
  {
    slug: "pyramidrooflight",
    name: "Pyramid Rooflights",
    category: "Rooflights",
    summary: "Four-sided architectural roof lanterns with balanced daylight and strong structure.",
    cardFeatures: ["Symmetrical pyramid design", "360° natural light flow"],
    tagline: "Pyramid sky lanterns: a four-sided architectural roof lantern offering balanced daylight, elegant aesthetics, and excellent structural stability.",
    features: [
      "Symmetrical pyramid design",
      "360° natural light flow",
      "Strong and weather-resistant frame",
      "Excellent insulation performance",
      "Suitable for flat and pitched roofs",
    ],
    images: [consGable, consHero],
  },
];

const CONSERVATORIES: Product[] = [
  {
    slug: "conservatories",
    name: "Conservatories",
    category: "Conservatories",
    summary: "Light-filled extensions that add usable space, comfort, and value to your home.",
    cardFeatures: ["Creates a bright, relaxing space", "Modern thermal glazing for year-round comfort"],
    tagline: "A beautiful light-filled extension that transforms your home with extra space, warmth, and year-round comfort.",
    features: [
      "Creates a bright, relaxing space for dining, lounging, or hosting",
      "Floods your home with natural light",
      "Modern thermal glazing keeps it warm in winter, cool in summer",
      "Low-maintenance uPVC or aluminium frames",
      "Custom designs: Victorian, Edwardian, Lean-to & bespoke styles",
    ],
    images: [productConservatories, consVictorian, consTiled, consInterior],
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    key: "windows",
    title: "Windows",
    tagline: "Energy-efficient glazing with slim sightlines, multi-point locking, and colour-matched hardware.",
    products: WINDOWS,
  },
  {
    key: "doors",
    title: "Doors",
    tagline: "Robust entrance and lifestyle doors that combine standout aesthetics with advanced security.",
    products: DOORS,
  },
  {
    key: "rooflights",
    title: "Rooflights",
    tagline: "Precision-built roof glazing that brightens extensions while maintaining thermal comfort.",
    products: ROOFLIGHTS,
  },
  {
    key: "conservatories",
    title: "Conservatories",
    tagline: "Turn-key builds including groundworks, frames, glazing, electrics, and finishing touches.",
    products: CONSERVATORIES,
  },
];

export const ALL_PRODUCTS: Product[] = PRODUCT_CATEGORIES.flatMap((c) => c.products);

export function getProduct(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}
