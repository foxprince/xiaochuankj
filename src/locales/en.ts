import type { Locale } from "./zh";

const en: Locale = {
  nav: {
    solutions: "Solutions",
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    contact: "Contact",
    cta: "Get Started",
  },
  hero: {
    badge: "AI-Powered Business Intelligence Platform",
    h1Line1: "Connect Intelligence",
    h1Line2: "Drive the Future",
    sub: "FUCONNECT delivers cutting-edge AI to power intelligent insights, automated operations, and data-driven growth engines — redefining how businesses connect and thrive.",
    explore: "Explore Now",
    learnMore: "Learn More",
    console: {
      title: "FUCONNECT Intelligence Console",
      ai: "AI Processing",
      rps: "Requests/sec",
      nodes: "Global Nodes",
      datacenters: "Data Centers",
      security: "Security Level",
      uptime: "Uptime",
      analyzing: "AI Agent analyzing in real time...",
    },
  },
  solutions: {
    label: "Solutions",
    h2Line1: "Built for Modern Business",
    h2Line2: "Intelligent Infrastructure",
    sub: "Six core modules covering the full spectrum of enterprise digital transformation",
    cards: [
      {
        title: "Intelligent Decision Engine",
        description:
          "Deep-learning decision support that analyzes massive datasets in real time, delivering precise strategic recommendations and risk predictions.",
      },
      {
        title: "Conversational AI",
        description:
          "Natural-language understanding with multilingual support — powering smart customer service, sales assistants, and enterprise-grade dialogue experiences.",
      },
      {
        title: "Data Insights",
        description:
          "Automated data cleansing, visual analytics, and trend forecasting that transform raw data into actionable business intelligence.",
      },
      {
        title: "Process Automation",
        description:
          "AI-driven business process automation — from document handling to approval workflows — dramatically freeing up team productivity.",
      },
      {
        title: "Knowledge Graph",
        description:
          "Build enterprise knowledge graphs that link information across departments, turning knowledge assets into a sustainable competitive advantage.",
      },
      {
        title: "API Integration",
        description:
          "Flexible RESTful APIs and SDKs that integrate seamlessly with existing systems, letting you build AI-powered application ecosystems fast.",
      },
    ],
  },
  features: {
    label: "Features",
    h2Line1: "Performance & Security",
    h2Line2: "Non-Negotiable",
    sub: "We believe the best technology is invisible — it's always there, yet never in your way",
    cards: [
      {
        title: "Millisecond Response",
        label: "Avg Latency",
        description:
          "Distributed architecture and edge computing deliver a best-in-class experience for users worldwide",
      },
      {
        title: "Enterprise Security",
        label: "Type II Certified",
        description:
          "End-to-end encryption, zero-trust architecture — full data sovereignty, fully under your control",
      },
      {
        title: "Infinite Scale",
        label: "Auto-scaling",
        description:
          "Cloud-native, elastically scalable architecture that handles any traffic spike with ease",
      },
      {
        title: "Real-Time Sync",
        label: "Data Sync",
        description:
          "Cross-system real-time data synchronization that eliminates information silos for good",
      },
      {
        title: "Full Transparency",
        label: "Traceable",
        description:
          "Every AI decision is documented, explainable, and auditable — full accountability by design",
      },
      {
        title: "Custom Fit",
        label: "Scenario Adapting",
        description:
          "Modular design, compose on demand — craft an AI solution that is uniquely yours",
      },
    ],
  },
  howItWorks: {
    label: "How It Works",
    h2Line1: "Four Steps to",
    h2Line2: "Intelligence",
    sub: "From data to insight, from insight to action — fully automated, zero complicated configuration",
    steps: [
      {
        title: "Connect Data",
        description:
          "Ingest enterprise data into FUCONNECT via API, SDK, or pre-built connectors. Supports structured data, unstructured documents, and real-time streams.",
      },
      {
        title: "Intelligent Modeling",
        description:
          "AI automatically detects data patterns, builds knowledge graphs, and trains custom models — no manual feature engineering required.",
      },
      {
        title: "Deploy",
        description:
          "One-click deployment to cloud or on-premise environments. A/B testing and canary releases ensure a smooth business transition.",
      },
      {
        title: "Continuous Optimization",
        description:
          "The system monitors model performance autonomously, learns continuously, and evolves through feedback loops — improving accuracy over time.",
      },
    ],
  },
  pricing: {
    label: "Pricing",
    h2Line1: "Transparent Pricing",
    h2Line2: "Choose Your Plan",
    sub: "Start for free and scale flexibly as your business grows",
    monthly: "Monthly",
    yearly: "Yearly",
    save: "Save 10%",
    popular: "Most Popular",
    plans: [
      {
        name: "Starter",
        description: "Perfect for early-stage teams and small projects",
        price: { monthly: "0", yearly: "0" },
        unit: "Free forever",
        features: [
          "5,000 API calls / month",
          "3 data connectors",
          "Basic analytics dashboard",
          "Community support",
          "Standard SLA",
        ],
        cta: "Start for Free",
        popular: false,
      },
      {
        name: "Pro",
        description: "Built for growing businesses",
        price: { monthly: "499", yearly: "449" },
        unit: "USD / mo",
        features: [
          "100,000 API calls / month",
          "15 data connectors",
          "Advanced analytics + AI forecasting",
          "Custom knowledge graph",
          "Priority support",
          "99.9% SLA",
        ],
        cta: "Upgrade Now",
        popular: true,
      },
      {
        name: "Enterprise",
        description: "For large organizations with specialized needs",
        price: { monthly: "Custom", yearly: "Custom" },
        unit: "",
        features: [
          "Unlimited API calls",
          "Unlimited data connectors",
          "Private cloud / on-premise deployment",
          "Dedicated AI model training",
          "24/7 dedicated support",
          "99.99% SLA",
          "SOC 2 audit reports",
        ],
        cta: "Contact Sales",
        popular: false,
      },
    ],
  },
  testimonials: {
    label: "Testimonials",
    h2Line1: "Businesses Already Using",
    h2Line2: "FUCONNECT",
    items: [
      {
        quote:
          "FUCONNECT completely changed how we approach data analysis. Market insights that used to take weeks now take hours.",
        author: "Marcus Zhang",
        role: "CTO",
        company: "SyncTech",
      },
      {
        quote:
          "Conversational AI lifted our customer satisfaction by 40%. It genuinely understands user intent instead of blindly matching keywords.",
        author: "Lisa Lee",
        role: "Head of Product",
        company: "CloudRoute Logistics",
      },
      {
        quote:
          "The private deployment went flawlessly — our security team was fully satisfied. This is one of the few AI platforms that truly understands enterprise requirements.",
        author: "Kevin Wang",
        role: "CISO",
        company: "GoldShield Insurance",
      },
    ],
  },
  cta: {
    badge: "Entering the Intelligent Business Era",
    h2Line1: "Ready to Let AI Accelerate",
    h2Line2: "Your Business Growth?",
    sub: "Join 500+ companies experiencing the intelligent business transformation powered by FUCONNECT. Free trial, no credit card required.",
    start: "Start Free",
    demo: "Book a Demo",
  },
  contact: {
    label: "Contact Us",
    h2Line1: "Let's Start",
    h2Line2: "a Conversation",
    sub: "Whether it's product inquiries, technical support, or partnership opportunities — we'd love to hear from you",
    addressLabel: "Office Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    companyInfoTitle: "Company Info",
    companyNameLabel: "Company Name",
    websiteLabel: "Website",
    headquartersLabel: "Headquarters",
    headquartersValue: "Singapore",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      company: "Company",
      companyPlaceholder: "Your company name",
      message: "Message",
      messagePlaceholder: "Describe your needs or questions...",
      submit: "Send Message",
      submitted: "Sent",
    },
  },
  footer: {
    tagline: "AI-powered business intelligence platform — connecting the future, driving growth.",
    categories: {
      product: "Product",
      resources: "Resources",
      company: "Company",
      legal: "Legal",
    },
    links: {
      product: [
        { label: "Solutions", href: "#solutions" },
        { label: "Features", href: "#features" },
        { label: "API Docs", href: "#" },
        { label: "Pricing", href: "#pricing" },
      ],
      resources: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Developer Hub", href: "#" },
        { label: "Status Page", href: "#" },
      ],
      company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
      legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Settings", href: "#" },
      ],
    },
  },
};

export default en;
