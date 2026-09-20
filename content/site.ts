import {
  ArrowRightLeft,
  Check,
  ClipboardCheck,
  Handshake,
  Headphones,
  Heart,
  Laptop,
  Lightbulb,
  MessageCircle,
  Package,
  Search,
  Smartphone,
  Sparkles,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type PageKey = "home" | "projects" | "services";

export const pageAccent: Record<
  PageKey,
  {
    glow: string;
    ring: "dotted" | "dashed" | "solid";
    icon: "person" | "briefcase" | "laptop";
    blur: string;
    label: string;
  }
> = {
  home: {
    glow: "#38bdf8",
    ring: "dotted",
    icon: "person",
    blur: "24px",
    label: "Home",
  },
  projects: {
    glow: "#ef4444",
    ring: "dashed",
    icon: "briefcase",
    blur: "16px",
    label: "Home",
  },
  services: {
    glow: "#22c55e",
    ring: "solid",
    icon: "laptop",
    blur: "20px",
    label: "Home",
  },
};

export const site = {
  name: "Keshar",
  roleLeft: "UI",
  roleRight: "DESIGNER",
  city: "Miami",
  product: "products",
  outcome: "ship faster and convert better",
  email: "contact@ace.com",
  phone: "+1 (555) 123-4567",
  madeIn: "Next.js",
  copyright: "© 2026 Keshar. All rights reserved.",
};

export const hero = {
  greeting: `Hi, I'm ${site.name}`,
  subheading: `From ${site.city}, I design fast, user-friendly ${site.product} for founders and teams looking to ${site.outcome}.`,
  chatCta: "i Want to Chat",
};

export const socials = [
  { name: "Dribbble", href: "https://dribbble.com", icon: "dribbble" as const },
  { name: "X", href: "https://x.com", icon: "x" as const },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
];

export const stats = [
  { value: "1+", label: "Projects Completed" },
  { value: "1+", label: "Years of Experience" },
  { value: "1★", label: "Client Reviews" },
  { value: "1+", label: "Industries Served" },
  { value: "1+", label: "Happy Customers" },
  { value: "1%", label: "Client Retention Rate" },
];

export const aboutStatsLeft = [
  { value: "13+", label: "Projects Completed" },
  { value: "10+", label: "Years of Experience" },
  { value: "5", label: "Star Client Reviews" },
];

export const aboutStatsRight = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "60+", label: "Happy Customers" },
  { value: "5+", label: "Industries Served" },
];

export const stack = [
  { name: "Figma", subtitle: "Interface Design" },
  { name: "Framer", subtitle: "Website Builder" },
  { name: "Photoshop", subtitle: "Image Editing" },
  { name: "Contra", subtitle: "Freelance Jobs" },
  { name: "Principle", subtitle: "Motion Design" },
  { name: "Webflow", subtitle: "No-code Build" },
];

export const experience = [
  {
    title: "Senior UI Designer",
    company: "Google",
    year: "2025 - Now",
  },
  {
    title: "Product Designer",
    company: "Bose",
    year: "2024 - 2025",
  },
  {
    title: "Brand Designer",
    company: "Sero",
    year: "2020 - 2024",
  },
];

export const images = {
  heroAvatar: "/placeholders/avatar-hero.png",
  heroAvatarVideo: "/videos/avatar-hero.mp4",
  aboutImage: "",
  faqImage: "",
  footerCharacter: "",
  projectsHero: "/videos/projects-hero.mp4?v=3",
  servicesHero: "/videos/services-video.mp4",
  testimonialAvatar: "",
  projects: [
    {
      slug: "project-one",
      title: "Habitate",
      subtitle: "Website Design",
      image: "",
      description:
        "Habitate is a warm, considered digital home for a modern interior brand, balancing strong editorial moments with a frictionless browsing experience.",
      liveDemo: "https://habitate.vercel.app",
      services: "Strategy, UX/UI Design, Web Development",
      client: "Habitate",
      duration: "6 Weeks",
      date: "March 2025",
      gallery: ["", "", "", "", ""],
    },
    {
      slug: "air-fold",
      title: "Air Fold",
      subtitle: "Web design",
      image: "/images/projects/air-fold.jpeg",
      description:
        "Air Fold is a focused ecommerce experience that makes discovering, comparing, and purchasing premium products feel effortless.",
      liveDemo: "https://getairfold.com/",
      services: "Strategy, UX/UI Design, Web Development",
      client: "Air Fold",
      duration: "8 Weeks",
      date: "May 2025",
      gallery: [
        "/images/projects/air-fold-1.jpg",
        "/images/projects/air-fold-2.jpg",
        "/images/projects/air-fold-3.jpg",
        "/images/projects/air-fold-3.jpg",
        "",
      ],
    },
    {
      slug: "project-three",
      title: "Shipit",
      subtitle: "Website Design",
      image: "",
      description:
        "Shipit is a clear, confident logistics platform designed to make complex movement and fulfillment feel simple.",
      liveDemo: "https://shipit.vercel.app",
      services: "Product Strategy, UX/UI Design, Prototyping",
      client: "Shipit",
      duration: "10 Weeks",
      date: "January 2025",
      gallery: ["", "", "", "", ""],
    },
    {
      slug: "project-four",
      title: "Hifi Store",
      subtitle: "Web Design",
      image: "/images/projects/livingspace.jpeg",
      description:
        "Hifi Store is a refined shopping experience for people who care deeply about sound, craft, and detail.",
      liveDemo: "https://hifi-store.vercel.app",
      services: "Brand Direction, UX/UI Design, Web Development",
      client: "Hifi Store",
      duration: "7 Weeks",
      date: "October 2024",
      gallery: [
        "/images/projects/livingspace-1.jpg",
        "/images/projects/livingspace-2.jpg",
        "/images/projects/livingspace-3.jpg",
        "/images/projects/livingspace-3.jpg",
        "",
      ],
    },
  ],
  services: [
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
  ],
};

export const services = [
  {
    id: "01",
    title: "WEB DESIGN",
    tagline: "Design That Converts",
    description:
      "I'll build you a beautiful website that's fast, easy to use, and turns visitors into customers.",
    tags: [
      "Custom Websites",
      "Website Redesign",
      "Template Customization",
      "Landing Pages",
    ],
    image: images.services[0].image,
  },
  {
    id: "02",
    title: "BRANDING",
    tagline: "Build a Visual Voice",
    description:
      "I'll design a unique brand identity that makes you memorable and connects with your audience.",
    tags: ["Logo Design", "Brand Guidelines", "Color & Typography", "Business Cards"],
    image: images.services[1].image,
  },
  {
    id: "03",
    title: "PRODUCT DESIGN",
    tagline: "Design for Impact",
    description:
      "I'll design intuitive digital products that users love and that solve real problems for your customers.",
    tags: [
      "Mobile App Design",
      "Dashboard Design",
      "User Interface Design",
      "Prototype Development",
    ],
    image: images.services[2].image,
  },
  {
    id: "04",
    title: "GRAPHICS DESIGN",
    tagline: "Designs That Communicate",
    description:
      "I'll design eye-catching visuals for your marketing, social media, and print materials that get noticed.",
    tags: [
      "Social Media Graphics",
      "Marketing Materials",
      "Illustrations",
      "Print Design",
    ],
    image: images.services[3].image,
  },
];

export const process = [
  {
    id: "01",
    title: "Let's Talk",
    description:
      "We start with a conversation about your project, goals, and vision to understand exactly what you need.",
  },
  {
    id: "02",
    title: "Create & Refine",
    description:
      "I design concepts and share them with you. We collaborate, refine, and iterate until everything feels perfect.",
  },
  {
    id: "03",
    title: "Deliver & Launch",
    description:
      "I hand over final files, guide you through everything, and stay available for any questions or support.",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most website and product design projects take 2–6 weeks depending on scope. I'll share a clear timeline after our first call.",
  },
  {
    q: "How much do your services cost?",
    a: "Packages start with a discovery quote based on pages, features, and motion. Flexible retainers are available for ongoing work.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every engagement includes structured revision rounds so we can refine until the work feels right.",
  },
  {
    q: "What do I need to get started?",
    a: "A short brief, any existing brand assets, and a sense of your goals. If you don't have those yet, we'll shape them together.",
  },
];

export const testimonial = {
  quote:
    "Best designer I've worked with! Fast, professional, and the website looks incredible. Highly recommend!",
  name: "Sarah Mitchell",
  role: "Founder of Bloom Studio",
};

export const projectCapabilities = [
  { icon: Handshake, label: "Reliable partner" },
  { icon: Trophy, label: "Senior level quality" },
  { icon: Zap, label: "Fast execution" },
  { icon: Laptop, label: "System thinking" },
  { icon: ClipboardCheck, label: "Clear process" },
  { icon: Lightbulb, label: "On-brand, every time" },
  { icon: ArrowRightLeft, label: "Smooth handoff" },
  { icon: MessageCircle, label: "Thoughtful feedback" },
] satisfies { icon: LucideIcon; label: string }[];

export const serviceQualities = [
  { icon: Check, label: "Brand Consistency" },
  { icon: Heart, label: "Client Focused" },
  { icon: Package, label: "Flexible Packages" },
  { icon: Smartphone, label: "Mobile Responsive" },
  { icon: Search, label: "SEO Optimized" },
  { icon: Sparkles, label: "Custom Designs" },
  { icon: Headphones, label: "Ongoing Support" },
] satisfies { icon: LucideIcon; label: string }[];

export const bubbles = {
  projects: "Take a Look at My Portfolio",
  services: "What I Bring to the Table",
  about: "Let Me Introduce Myself",
  faq: "Frequently Answered Questions",
};

export const cta = {
  heading: "Ready to Get Started?",
  body: "Tell me about your project and let's create something amazing together. I'll respond within 24 hours.",
  button: "I'm Ready to Start",
};

export const contact = {
  eyebrow: "CONTACT ME",
  heading: "Let's Work Together",
  body: "Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.",
  schedulePrompt:
    "Prefer to schedule a call instead? Book a free 30-minute consultation and let's discuss your project.",
  scheduleCta: "Let's Set Up a Time",
};
