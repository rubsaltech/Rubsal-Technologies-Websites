/* ==========================================================================
   RUBSAL — CONTACT & TEAM DATA  (single source of truth)
   --------------------------------------------------------------------------
   Everything the site shows about how to reach Rubsal and who's on the team
   lives here. Edit this one file and the whole website updates:
     • contact  → email, phone, location, working hours
     • socials  → every social link (Instagram, LinkedIn, X, GitHub, Facebook…)
     • team     → each member's name, designation, contacts, socials & photo
   ========================================================================== */

/* Company name / tagline (used in headings & footer copy) */
export const company = {
  name: "Rubsal Technologies",
  tagline: "Turning ideas into smart digital solutions.",
};

/* ---- Primary contact details -------------------------------------------- */
export const contact = {
  email: "rubsaltechnonogies@gmail.com",
  phone: "+1 (555) 027-8841",
  // `href` keeps the exact format dialers/maps expect; `label` is what shows.
  location: {
    label: "Innovation Drive, Suite 400, Austin, TX",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Austin,TX",
  },
  hours: "Mon–Fri · 9:00am – 6:00pm CT",
};

/* ---- Social links -------------------------------------------------------
   `icon` maps to a brand glyph in components/ui/Icon.jsx.
   Replace the `href` values with the real profile URLs.
   ------------------------------------------------------------------------- */
export const socials = [
  { label: "Instagram", icon: "instagram", handle: "@rubsaltech", href: "https://instagram.com/rubsaltech" },
  { label: "LinkedIn", icon: "linkedin", handle: "Rubsal Technologies", href: "https://linkedin.com/company/rubsaltech" },
  { label: "X (Twitter)", icon: "x", handle: "@rubsaltech", href: "https://x.com/rubsaltech" },
  { label: "GitHub", icon: "github", handle: "rubsaltech", href: "https://github.com/rubsaltech" },
  { label: "Facebook", icon: "facebook", handle: "rubsaltech", href: "https://facebook.com/rubsaltech" },
];

/* ---- Team / employees ---------------------------------------------------
   `image` is a photo URL (swap for your own hosted images).
   `initial` is used as a graceful fallback if the image fails to load.
   ------------------------------------------------------------------------- */
export const team = [
  {
    name: "Sahir Malik",
    role: "Founder & Lead Engineer",
    initial: "S",
    email: "sahir@rubsal.tech",
    phone: "+1 (555) 027-8842",
    image: "https://i.pravatar.cc/400?img=12",
    socials: {
      linkedin: "https://linkedin.com/in/sahirmalik",
      x: "https://x.com/sahirmalik",
    },
  },
  {
    name: "Lena Brooks",
    role: "Head of Design",
    initial: "L",
    email: "lena@rubsal.tech",
    phone: "+1 (555) 027-8843",
    image: "https://i.pravatar.cc/400?img=45",
    socials: {
      linkedin: "https://linkedin.com/in/lenabrooks",
      instagram: "https://instagram.com/lena.designs",
    },
  },
  {
    name: "Omar Raza",
    role: "AI & Data Lead",
    initial: "O",
    email: "omar@rubsal.tech",
    phone: "+1 (555) 027-8844",
    image: "https://i.pravatar.cc/400?img=68",
    socials: {
      linkedin: "https://linkedin.com/in/omarraza",
      github: "https://github.com/omarraza",
    },
  },
  {
    name: "Mia Costa",
    role: "Product Manager",
    initial: "M",
    email: "mia@rubsal.tech",
    phone: "+1 (555) 027-8845",
    image: "https://i.pravatar.cc/400?img=47",
    socials: {
      linkedin: "https://linkedin.com/in/miacosta",
      x: "https://x.com/miacosta",
    },
  },
];
