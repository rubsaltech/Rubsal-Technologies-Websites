// Central place for site-wide copy & config.
// NOTE: Contact details, social links and team data live in ./contact.js

// Primary navigation. `children` renders a dropdown.
export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "AI & Data",
        to: "/services/ai-data",
        desc: "Automation, analytics & intelligent assistants.",
      },
      {
        label: "Software Development",
        to: "/services/software-development",
        desc: "Web, mobile & custom platforms built to scale.",
      },
    ],
  },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "40+", label: "Happy clients" },
  { value: "15", label: "Countries served" },
  { value: "99.9%", label: "Uptime we ship for" },
];

export const trustBar = [
  { title: "Build Faster", text: "Launch your ideas quickly", icon: "rocket" },
  { title: "Powered by AI", text: "Smarter solutions for you", icon: "chip" },
  { title: "Drive Growth", text: "Turn data into opportunities", icon: "chart" },
  { title: "Trusted Partner", text: "Your success is our priority", icon: "heart" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "We listen first — mapping your goals, users and the real problem worth solving.",
  },
  {
    step: "02",
    title: "Design",
    text: "We shape clear flows and clean interfaces, so the product feels obvious to use.",
  },
  {
    step: "03",
    title: "Build",
    text: "Our engineers ship in focused sprints with quality baked in at every step.",
  },
  {
    step: "04",
    title: "Grow",
    text: "We measure, refine and scale — turning a launch into lasting momentum.",
  },
];

export const testimonials = [
  {
    quote:
      "Rubsal took our vague idea and turned it into a product our customers actually love. They felt like part of our team.",
    name: "Amara Okafor",
    role: "Founder, Lumen Retail",
  },
  {
    quote:
      "The automation they built saves us two full days of manual work every week. Honestly a game-changer for our ops.",
    name: "David Chen",
    role: "COO, Northwind Logistics",
  },
  {
    quote:
      "Clear communication, zero jargon, and a dashboard our whole leadership team finally understands. Rare and refreshing.",
    name: "Priya Nair",
    role: "VP Data, Finlytics",
  },
];
