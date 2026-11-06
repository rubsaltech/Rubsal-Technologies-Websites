// Services shown on Home + Services pages. Icons map to <Icon /> names.

export const services = [
  {
    slug: "website-app-development",
    icon: "browser",
    title: "Website & App Development",
    short: "Fast, beautiful websites and apps your customers enjoy using.",
    points: ["Responsive websites", "iOS & Android apps", "E-commerce stores"],
    group: "software-development",
  },
  {
    slug: "custom-software",
    icon: "code",
    title: "Custom Software Solutions",
    short: "Tools built around the way your business actually works.",
    points: ["Internal dashboards", "Workflow automation", "Legacy upgrades"],
    group: "software-development",
  },
  {
    slug: "ai-automation",
    icon: "spark",
    title: "AI & Smart Automation",
    short: "Let software handle the repetitive work, so your team doesn't.",
    points: ["Process automation", "Smart document handling", "AI integrations"],
    group: "ai-data",
  },
  {
    slug: "data-analytics",
    icon: "chart",
    title: "Data Analytics & Insights",
    short: "Turn messy data into clear answers you can act on.",
    points: ["Live dashboards", "Reports that explain themselves", "Forecasting"],
    group: "ai-data",
  },
  {
    slug: "database-solutions",
    icon: "database",
    title: "Database Solutions",
    short: "Keep your information safe, organised and easy to reach.",
    points: ["Secure storage", "Fast search", "Cloud migrations"],
    group: "software-development",
  },
  {
    slug: "ai-chatbots",
    icon: "chat",
    title: "AI Chatbots & Assistants",
    short: "Helpful assistants that answer customers around the clock.",
    points: ["24/7 support bots", "Internal helpdesks", "Voice & chat"],
    group: "ai-data",
  },
];

// Deeper content for the two service sub-pages.
export const serviceGroups = {
  "ai-data": {
    eyebrow: "AI & Data",
    title: "Smart systems that think, so your team can focus",
    intro:
      "We help you put artificial intelligence and your own data to work — automating busywork, surfacing insights and giving customers instant, helpful answers.",
    offerings: [
      {
        icon: "spark",
        title: "Smart Automation",
        text: "Hand off repetitive tasks — invoices, approvals, data entry — to reliable automated workflows that never get tired.",
      },
      {
        icon: "chart",
        title: "Analytics & Dashboards",
        text: "See your whole business at a glance with live dashboards that turn raw numbers into plain-language insight.",
      },
      {
        icon: "chat",
        title: "AI Assistants & Chatbots",
        text: "Give customers and staff a friendly assistant that answers questions instantly, day or night.",
      },
      {
        icon: "brain",
        title: "Predictive Models",
        text: "Spot trends before they happen — forecast demand, flag risks and make confident, data-backed decisions.",
      },
    ],
    outcomes: [
      "Save days of manual work every month",
      "Answer customers in seconds, not hours",
      "Make decisions backed by real data",
    ],
  },
  "software-development": {
    eyebrow: "Software Development",
    title: "Digital products built to last and ready to grow",
    intro:
      "From a marketing site to a full platform, we design and build software that is fast, secure and genuinely pleasant to use — on every device.",
    offerings: [
      {
        icon: "browser",
        title: "Websites & Web Apps",
        text: "Polished, lightning-fast sites and web apps that look great and convert visitors into customers.",
      },
      {
        icon: "mobile",
        title: "Mobile Applications",
        text: "Native-quality iOS and Android apps that your users will actually want to open every day.",
      },
      {
        icon: "code",
        title: "Custom Platforms",
        text: "Tailor-made systems that fit your exact workflow instead of forcing you into someone else's.",
      },
      {
        icon: "database",
        title: "APIs & Databases",
        text: "Reliable foundations — secure databases and clean APIs — that keep everything running smoothly.",
      },
    ],
    outcomes: [
      "Products that feel effortless to use",
      "Built to handle growth without rewrites",
      "Secure, maintainable and well-documented",
    ],
  },
};
