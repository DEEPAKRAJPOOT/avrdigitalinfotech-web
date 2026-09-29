export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  imageClass?: string;
  tags: string[];
  launchDate: string;
  duration: string;
  teamSize: string;
  technologies: string[];

  challenges: {
    summary: string;
    keyChallenges: string[];
  };
  solution: {
    summary: string;
    keyFeatures: Array<{ title: string; desc: string }>;
  };
  features: Array<{ title: string; desc: string }>;
  galleryImages: Array<{ src: string; alt: string }>;
  statistics: Array<{ value: string; label: string }>;
  performanceMetrics: Array<{ value: string; label: string }>;
  results: string[];
  timeline: Array<{ phase: string; time: string }>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
  liveProjectUrl: string;
  githubUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bumperpick",
    title: "BumperPick – Smart Local Discovery & Business Growth Platform",
    subtitle: "Empowering local businesses with smart marketing, customer engagement, and location-based discovery while helping consumers explore the best offers, services, and experiences nearby.",
    description:
      "BumperPick is an AI-powered local discovery platform that connects businesses with nearby customers through offers, events, rewards, and location-based campaigns. Designed for vendors and consumers alike, it helps businesses increase visibility while enabling users to discover the best local deals and experiences in their city.",
    heroImage: "/triosys-bumperpick.png",
    imageClass: "object-cover object-top",
    tags: ["BumperPick", "Marketplace", "Mobile App", "Kotlin", "Swift(iOS)", "Laravel", "Mysql", "AWS"],
    launchDate: "2026-01-02",
    duration: "6 Months",
    teamSize: "4 Members",
    technologies: ["Kotlin", "Swift(iOS)", "Laravel", "Mysql", "AWS"],
    challenges: {
      summary:
        "Creating a dual-sided product for merchants and customers meant balancing discovery, performance, and offer management without sacrificing mobile experience.",
     keyChallenges: [
        "Building a scalable marketplace architecture to support multiple cities and thousands of users.",
        "Designing separate yet seamless experiences for vendors and customers within a single ecosystem.",
        "Implementing fast location-based search and personalized business discovery.",
        "Managing real-time campaign updates, offers, and notifications with high reliability.",
        "Ensuring secure user authentication, data privacy, and scalable cloud infrastructure."
        ]
    },
   solution: {
  summary:
    "Developed a scalable hyperlocal marketplace platform that connects businesses with nearby customers through a unified ecosystem. The solution includes dedicated applications for vendors and customers, a centralized admin panel, and a cloud-based backend to manage businesses, offers, campaigns, and user engagement across multiple cities.",

    keyFeatures: [
        {
        title: "Vendor & Customer Ecosystem",
        desc: "Built dedicated interfaces for vendors and customers with role-based access, enabling businesses to manage offers while users discover nearby deals and services."
        },
        {
        title: "Centralized Business Management",
        desc: "Developed an admin platform for managing business listings, categories, campaigns, users, and city-wise operations from a single dashboard."
        },
        {
        title: "Scalable Hyperlocal Platform",
        desc: "Implemented a cloud-ready architecture supporting multi-city deployment, real-time notifications, location-based discovery, and future platform expansion."
        }
    ]
    },
    features: [
    {
        title: "Hyperlocal Business Marketplace",
        desc: "Connect local businesses with nearby customers through an intelligent marketplace featuring offers, business listings, events, and location-based discovery."
    },
    {
        title: "Vendor Management Dashboard",
        desc: "Empower businesses to manage profiles, create promotional campaigns, publish offers, and monitor customer engagement from a centralized dashboard."
    },
    {
        title: "Customer Discovery Experience",
        desc: "Help users explore nearby businesses, exclusive deals, events, and trending offers with powerful search, filters, and personalized recommendations."
    },
    {
        title: "Multi-City Campaign Platform",
        desc: "Support multiple cities with scalable campaign management, enabling businesses to expand their reach while delivering localized content to users."
    },
    {
        title: "Real-Time Notifications & Engagement",
        desc: "Increase customer retention through instant notifications, promotional alerts, event reminders, and personalized engagement campaigns."
    }
    ],
    galleryImages: [
      {
        src: "/bumperpik-1.jpeg",
        alt: "BumperPick marketplace dashboard"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784185032/bumperpik-2_hqzmhd.mp4",
        alt: "Local offers experience"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784185074/bumperpik-4_mikdzn.mp4",
        alt: "Local offers experience"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784185101/bumperpik-12_ikz8of.mp4",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-3.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-5.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-6.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-7.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-8.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-9.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpik-10.jpeg",
        alt: "Local offers experience"
      },
      {
        src: "/bumperpk-11.png",
        alt: "Local offers experience"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784186627/bumperpik-13_niqe3j.mp4",
        alt: "Local offers experience"
      },
    ],
    statistics: [
      { value: "Vendor + Customer", label: "DUAL APPS" },
      { value: "Multi-City", label: "REACH" },
      { value: "Live Platform", label: "triosys.in" },
      { value: "12M+", label: "CAMPAIGN IMPRESSIONS" }
    ],
    performanceMetrics: [
      { value: "4.9/5", label: "USER RATINGS" },
      { value: "30%", label: "ENGAGEMENT" },
      { value: "55%", label: "RETENTION" },
      { value: "0.9s", label: "LOAD TIME" }
    ],
    results: [
    "Successfully launched a scalable hyperlocal marketplace platform.",
    "Enabled businesses to create and manage digital campaigns with ease.",
    "Delivered a seamless experience for both vendors and customers across web and mobile.",
    "Built a scalable architecture ready for multi-city expansion and future feature growth."
    ],
    timeline: [
      { phase: "Discovery & Planning", time: "3 Weeks" },
      { phase: "UI/UX Design", time: "4 Weeks" },
      { phase: "Development", time: "10 Weeks" },
      { phase: "Testing & QA", time: "3 Weeks" },
      { phase: "Launch & Optimization", time: "4 Weeks" },
      { phase: "Post-Launch Support", time: "Ongoing" }
    ],
    testimonial: {
      quote:
        "The BumperPick platform elevated our local marketplace vision and translated it into a user-friendly, high-performance app that customers love.",
      author: "Anjali Mehra",
      role: "Co-Founder",
      company: "BumperPick"
    },
    liveProjectUrl: "https://play.google.com/store/apps/details?id=com.bumperpick.bumperickUser&hl=en_IN"
  },
  {
    slug: "wakefit-scan-to-pack",
    title: "Wakefit Scan-to-Pack System",
    subtitle: "A real-time warehouse automation platform for barcode-driven packing and quality control.",
    description:
      "Developed a comprehensive Scan-to-Pack solution for Wakefit to digitize warehouse operations, streamline product scanning, packing workflows, and provide real-time visibility across multiple production stations.",
    heroImage: "/wakefit/wakefit-img-1.png",
    tags: [
    "React",
    "Node.js",
    "PostgreSQL",
    "Socket.IO",
    "Warehouse Automation"
  ],
  launchDate: "2026-07-05",
  duration: "4 Months",
  teamSize: "6 Members",
    technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Socket.IO",
    "JWT",
    "Docker"
  ],
    challenges: {
    summary:
      "The primary challenge was digitizing the entire packing process while ensuring accurate barcode scanning, real-time station tracking, and seamless communication between operators, scanners, and warehouse dashboards.",

    keyChallenges: [
      "Managing real-time barcode scanning across multiple packing stations.",
      "Synchronizing operator activities without data conflicts.",
      "Tracking box movement through every stage of the packing workflow.",
      "Building a scalable architecture capable of handling high-volume warehouse operations.",
      "Providing live production dashboards with minimal latency."
    ]
  },
    solution: {
    summary:
      "Built a real-time Scan-to-Pack platform that automates barcode validation, operator workflows, quality control, and production monitoring. The solution provides complete traceability from product scanning to final packing while improving warehouse efficiency.",

    keyFeatures: [
      {
        title: "Barcode-Driven Workflow",
        desc: "Integrated industrial barcode scanners to automate product verification and eliminate manual entry errors."
      },
      {
        title: "Real-Time Production Tracking",
        desc: "Implemented live dashboards using Socket.IO to monitor station status, operator activity, and packing progress instantly."
      },
      {
        title: "Multi-Station Warehouse Management",
        desc: "Designed a scalable system supporting multiple packing stations, operator authentication, and centralized production monitoring."
      }
    ]
  },
    features: [
    {
      title: "Industrial Barcode Integration",
      desc: "Seamlessly integrated barcode scanners for fast and accurate product identification throughout the packing process."
    },
    {
      title: "Operator Authentication",
      desc: "Secure operator login with role-based access and station assignment for controlled warehouse operations."
    },
    {
      title: "Live Production Dashboard",
      desc: "Real-time visualization of packing status, completed boxes, pending tasks, and station performance."
    },
    {
      title: "Quality Control Workflow",
      desc: "Implemented validation checkpoints to ensure every product is scanned and verified before packing."
    },
    {
      title: "Scalable Warehouse Architecture",
      desc: "Built on a modular backend architecture capable of supporting multiple production lines and future warehouse expansion."
    }
  ],
    galleryImages: [
      {
        src: "/wakefit/wakefit-img-3.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-4.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-5.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187170/wakefit-img-18_gqidwy.mp4",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-6.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-7.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-8.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-9.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-10.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-11.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-12.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-13.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-15.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-16.png",
        alt: "wakefit enterprise system"
      },
      {
        src: "/wakefit/wakefit-img-17.png",
        alt: "wakefit enterprise system"
      }
    ],
    statistics: [
      { value: "75% Faster", label: "PERFORMANCE" },
      { value: "10,000+", label: "PAGES" },
      { value: "99.99%", label: "UPTIME" },
      { value: "Global", label: "AUDIENCE" }
    ],
    performanceMetrics: [
      { value: "8.3s → 2.1s", label: "PAGE LOAD" },
      { value: "100+", label: "SEO REDIRECTS" },
      { value: "50%", label: "MOBILE ENGAGEMENT" },
      { value: "24/7", label: "SUPPORT READINESS" }
    ],
    results: [
    "Digitized the complete Scan-to-Pack warehouse workflow.",
    "Reduced manual barcode entry and packing errors.",
    "Enabled real-time visibility across all production stations.",
    "Improved operational efficiency through automated packing processes."
  ],
    timeline: [
    {
      phase: "Requirement Analysis",
      time: "2 Weeks"
    },
    {
      phase: "System Architecture & Database Design",
      time: "2 Weeks"
    },
    {
      phase: "Development & Integration",
      time: "8 Weeks"
    },
    {
      phase: "Testing & Warehouse Validation",
      time: "3 Weeks"
    },
    {
      phase: "Deployment & User Training",
      time: "2 Weeks"
    },
    {
      phase: "Support & Continuous Enhancements",
      time: "Ongoing"
    }
  ],
    testimonial: {
      quote:
        "The Scan-to-Pack system transformed our warehouse operations by automating barcode validation, improving packing accuracy, and providing real-time visibility across production stations.",
      author: "Warehouse Operations Manager",
      role: "Operations Team",
      company: "Wakefit"
    },
    liveProjectUrl: "http://13.203.108.163/dashboard"
  },
  {
    slug: "orion-stars-sweeps",
    title: "Orion Stars Sweeps",
    subtitle:"A modern social casino platform delivering immersive gameplay, virtual currency management, secure payments, and real-time user engagement.",
    description:"Developed a feature-rich social casino gaming platform that provides an engaging experience through hundreds of games, virtual Gold Coin (GC) and Sweepstakes Coin (SC) wallets, secure payment processing, player profiles, promotions, rewards, and real-time interactions. The platform is optimized for desktop and mobile while supporting high user concurrency and scalable backend services.",
    heroImage: "/gaming/gaming-8.png",
    tags: [
      "Node.js",
      "Socket.io",
      "MySQL",
      "Next.js",
      "JavaScript",
      "REST API",
      "Payment Gateway",
      "AWS",
      "GSAP",
    ],
    launchDate: "2025-06-09",
    duration: "5 Months",
    teamSize: "7 Members",
    technologies: [
      "node.js",
      "socket.io",
      "MySQL",
      "Next.js",
      "JavaScript",
      "REST API",
      "Payment Gateway",
      "AWS",
      "GSAP",
      "Tailwind CSS",
      "Game Integration",
      "Virtual Currency Management",
      "Responsive Design",
      "Security & Authentication",
      "Promotions & Rewards",
      "Real-Time User Engagement",
      "Scalable Backend Architecture",
    ],
    challenges: {
    summary:
      "Building a secure and scalable social casino platform required handling virtual currency management, game integration, player authentication, secure checkout, promotions, and high concurrent traffic while maintaining a smooth gaming experience.",

    keyChallenges: [
      "Managing Gold Coin (GC) and Sweepstakes Coin (SC) wallet transactions securely.",
      "Integrating multiple casino game providers into a unified gaming platform.",
      "Supporting thousands of concurrent users with low latency.",
      "Building secure payment workflows for coin purchases and rewards.",
      "Creating a responsive gaming experience across desktop and mobile devices."
    ]
    },
    solution: {
    summary:
      "Delivered a scalable social casino ecosystem featuring virtual wallet management, secure authentication, real-time gaming interfaces, promotional campaigns, payment integration, and an intuitive player dashboard optimized for high engagement.",

    keyFeatures: [
      {
        title: "Virtual Wallet System",
        desc: "Developed secure Gold Coin and Sweepstakes Coin wallet management with transaction history and balance tracking."
      },
      {
        title: "Gaming Dashboard",
        desc: "Built a responsive dashboard featuring hundreds of casino games, categories, favorites, promotions, and player activities."
      },
      {
        title: "Secure Payment Integration",
        desc: "Implemented secure checkout workflows supporting multiple payment methods for purchasing virtual coin packages."
      }
    ]
  },
    features: [
    {
      title: "Player Authentication & Profile",
      desc: "Secure signup, login, password recovery, profile management, email verification, and account security features."
    },
    {
      title: "Virtual Currency Management",
      desc: "Complete Gold Coin (GC) and Sweepstakes Coin (SC) wallet system with secure balance management and transaction tracking."
    },
    {
      title: "Casino Game Library",
      desc: "Integrated multiple game providers with categorized browsing, favorites, search, and smooth game launching experience."
    },
    {
      title: "Rewards & Promotions",
      desc: "Daily rewards, promotional offers, bonus drops, leaderboards, and loyalty features designed to increase player engagement."
    },
    {
      title: "Secure Coin Purchase",
      desc: "Built a secure checkout system with multiple payment options, promotional pricing, and purchase history management."
    }
   ],
    galleryImages: [
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187423/gaming-1_oye82u.mp4",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-2.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-3.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-4.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-5.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-6.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-7.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-8.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-9.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-10.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-11.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-2.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-13.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-14.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-15.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-16.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-17.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-18.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-19.png",
        alt: "Game Display"
      },
      {
        src: "/gaming/gaming-20.png",
        alt: "Game Display"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187458/gaming-21_kgifak.mp4",
        alt: "Game Display"
      },
    ],
    statistics: [
    {
      value: "2000+",
      label: "CASINO GAMES"
    },
    {
      value: "99.9%",
      label: "UPTIME"
    },
    {
      value: "24/7",
      label: "PLAYER ACCESS"
    },
    {
      value: "Multi",
      label: "PAYMENT METHODS"
    }
  ],
    performanceMetrics: [
    {
      value: "95%",
      label: "USER RETENTION"
    },
    {
      value: "99.9%",
      label: "SYSTEM AVAILABILITY"
    },
    {
      value: "<2s",
      label: "PAGE LOAD"
    },
    {
      value: "100%",
      label: "RESPONSIVE UI"
    }
  ],
    results: [
    "Delivered a complete social casino gaming platform with virtual wallet management.",
    "Successfully integrated secure payment processing and coin purchasing workflows.",
    "Created a scalable gaming ecosystem supporting multiple casino game providers.",
    "Improved player engagement through promotions, rewards, and personalized dashboards."
  ],
    timeline: [
    {
      phase: "Requirement Analysis",
      time: "2 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "3 Weeks"
    },
    {
      phase: "Core Platform Development",
      time: "8 Weeks"
    },
    {
      phase: "Game & Payment Integration",
      time: "4 Weeks"
    },
    {
      phase: "Testing & Security Audit",
      time: "3 Weeks"
    },
    {
      phase: "Deployment & Support",
      time: "Ongoing"
    }
  ],
    testimonial: {
    quote:
      "The platform delivers a smooth gaming experience with secure wallet management, reliable payment processing, and an engaging interface that keeps players coming back.",
    author: "Product Team",
    role: "Gaming Platform",
    company: "Orion Stars Sweeps"
  },
    liveProjectUrl: "https://orionstarsweeps.com/"
  },
  {
  slug: "avr-growth-os",
  title: "AVR GrowthOS",
  subtitle: "AI Powered Sales Operating System for Real Estate Developers",

  description:
    "AVR GrowthOS is a complete AI-powered Sales Operating System built specifically for real estate developers. The platform automates lead capture, qualification, follow-ups, sales pipeline management, site visit scheduling, AI lead scoring, executive performance tracking, reports, and WhatsApp communication from a single dashboard. It helps builders increase conversions while reducing manual sales efforts.",

  heroImage: "/AVR-RealEsate/real-estate2.png",

  tags: [
    "Artificial Intelligence",
    "Real Estate CRM",
    "Lead Management",
    "Sales Automation",
    "WhatsApp Automation",
    "AI Scoring",
    "Sales Pipeline",
    "SaaS"
  ],

  launchDate: "2025-09-10",

  duration: "4 Months",

  teamSize: "6 Members",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "MySQL",
    "Node.js",
    "OpenAI API",
    "WhatsApp Business API",
    "Google Maps API",
    "Chart.js"
  ],

  challenges: {
    summary:
      "Real estate developers were managing leads across WhatsApp, Excel sheets, MagicBricks, 99acres, Facebook, and manual calls, making follow-ups inconsistent and reducing conversion rates.",

    keyChallenges: [
      "Lead scattered across multiple platforms",
      "Manual follow-up management",
      "No AI-based lead prioritization",
      "No centralized CRM",
      "Poor conversion visibility",
      "Sales team performance tracking",
      "Pipeline management",
      "Delayed customer response"
    ]
  },

  solution: {
    summary:
      "Developed an AI-powered multi-tenant Sales Operating System where builders can manage complete sales operations. The platform automatically organizes leads, assigns executives, calculates AI lead scores, tracks follow-ups, manages site visits, visualizes sales pipelines, and provides real-time reports.",

    keyFeatures: [
      {
        title: "AI Lead Scoring",
        desc:
          "Automatically prioritizes leads based on engagement, source, and sales probability."
      },
      {
        title: "Sales Pipeline Automation",
        desc:
          "Drag-and-drop Kanban pipeline for managing every sales stage."
      },
      {
        title: "WhatsApp Automation",
        desc:
          "Instant communication, reminders, and customer follow-ups using WhatsApp."
      },
      {
        title: "Executive Performance Dashboard",
        desc:
          "Track leads, conversions, site visits, and sales performance in real time."
      }
    ]
  },

  features: [
    {
      title: "AI Lead Qualification",
      desc:
        "Automatically identifies high-quality prospects using AI scoring."
    },
    {
      title: "Lead Management",
      desc:
        "Centralized CRM to manage leads from MagicBricks, 99acres, Google, Facebook, WhatsApp, and manual entries."
    },
    {
      title: "Sales Pipeline",
      desc:
        "Visual Kanban pipeline to track leads from New to Booking."
    },
    {
      title: "Follow-up Automation",
      desc:
        "Schedule calls, reminders, and customer follow-ups automatically."
    },
    {
      title: "Site Visit Management",
      desc:
        "Plan, assign, and monitor customer site visits."
    },
    {
      title: "AI Alerts",
      desc:
        "Receive intelligent recommendations for overdue follow-ups and hot leads."
    },
    {
      title: "Executive Performance",
      desc:
        "Track conversion rates, leads handled, and overall team productivity."
    },
    {
      title: "Reports & Analytics",
      desc:
        "Detailed reports for lead sources, sales funnel, executive performance, and conversions."
    },
    {
      title: "Multi-Tenant SaaS",
      desc:
        "Supports multiple builders with independent company workspaces."
    },
    {
      title: "Role-Based Access",
      desc:
        "Separate access for Super Admin, Company Owner, Sales Managers, and Executives."
    },
    {
      title: "CSV Import",
      desc:
        "Bulk lead upload with automatic assignment."
    },
    {
      title: "Responsive Dashboard",
      desc:
        "Fully optimized for desktop, tablet, and mobile devices."
    }
  ],

  galleryImages: [
    {
      src: "/AVR-RealEsate/real-estate1.png",
      alt: "AI Sales Dashboard"
    },
    {
      src: "/AVR-RealEsate/real-estate2.png",
      alt: "Lead Management"
    },
    {
      src: "/AVR-RealEsate/real-estate3.png",
      alt: "Sales Pipeline"
    },
    {
      src: "/AVR-RealEsate/real-estate4.png",
      alt: "Executive Dashboard"
    },
    {
      src: "/AVR-RealEsate/real-estate5.png",
      alt: "Reports & Analytics"
    }
  ],

  statistics: [
    {
      value: "10X",
      label: "FASTER LEAD MANAGEMENT"
    },
    {
      value: "85%",
      label: "AI QUALIFICATION ACCURACY"
    },
    {
      value: "100+",
      label: "LEADS MANAGED DAILY"
    },
    {
      value: "24/7",
      label: "AUTOMATED FOLLOW-UPS"
    }
  ],

  performanceMetrics: [
    {
      value: "90%",
      label: "FOLLOW-UP AUTOMATION"
    },
    {
      value: "<1 Sec",
      label: "DASHBOARD RESPONSE"
    },
    {
      value: "99.9%",
      label: "SYSTEM AVAILABILITY"
    },
    {
      value: "AI Driven",
      label: "SALES INSIGHTS"
    }
  ],

  results: [
    "Centralized complete sales workflow into one platform.",
    "Reduced manual lead management efforts.",
    "Automated WhatsApp follow-ups.",
    "Improved lead qualification using AI.",
    "Enhanced executive productivity.",
    "Real-time sales reporting and analytics.",
    "Improved customer response time.",
    "Higher lead conversion visibility.",
    "Simplified builder operations through SaaS architecture."
  ],

  timeline: [
    {
      phase: "Research & Planning",
      time: "2 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "3 Weeks"
    },
    {
      phase: "Frontend Development",
      time: "4 Weeks"
    },
    {
      phase: "Backend & AI Integration",
      time: "5 Weeks"
    },
    {
      phase: "Testing & QA",
      time: "2 Weeks"
    },
    {
      phase: "Deployment & Optimization",
      time: "Ongoing"
    }
  ],

  testimonial: {
    quote:
      "AVR GrowthOS transformed our sales process by bringing AI, automation, CRM, and analytics into one platform. Our sales team now spends more time closing deals instead of managing spreadsheets.",
    author: "Rajesh Kumar",
    role: "Company Owner",
    company: "Skyline Developers"
  },

  liveProjectUrl: "https://realestate-growth-os.vercel.app/"
},
{
  slug: "avr-learnsuite",

  title: "AVR LearnSuite",

  subtitle: "AI Powered Learning Management & Institute ERP Platform",

  description:
    "AVR LearnSuite is a complete AI-powered Learning Management System (LMS) and Institute ERP built for coaching institutes, universities, training centers, and online academies. The platform centralizes student management, instructor management, courses, live classes, exams, assignments, attendance, payments, certificates, analytics, marketplace, and AI-powered learning automation into a single SaaS platform.",

  heroImage: "/AVRLMS/learnsuite1.png",

  tags: [
    "Artificial Intelligence",
    "Learning Management System",
    "Institute ERP",
    "Education SaaS",
    "Online Learning",
    "AI Automation",
    "Course Marketplace",
    "EdTech"
  ],

  launchDate: "2026-07-20",

  duration: "5 Months",

  teamSize: "7 Members",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "Node.js",
    "MySQL",
    "OpenAI API",
    "WebRTC",
    "Chart.js",
    "Stripe",
    "AWS S3"
  ],

  challenges: {
    summary:
      "Educational institutes were using multiple disconnected systems to manage admissions, students, instructors, live classes, assignments, examinations, attendance, certificates, and payments. Manual administration consumed significant time and reduced operational efficiency.",

    keyChallenges: [
      "Manual student management",
      "Scattered course administration",
      "No centralized instructor portal",
      "Complex attendance tracking",
      "Assignment evaluation delays",
      "Exam management difficulties",
      "Limited reporting & analytics",
      "Lack of AI-driven automation"
    ]
  },

  solution: {
    summary:
      "Developed a multi-tenant AI-powered LMS & Institute ERP that automates academic operations, student lifecycle management, assessments, certifications, reporting, communication, and digital learning from one unified platform.",

    keyFeatures: [
      {
        title: "AI Learning Assistant",
        desc:
          "Integrated AI to answer student questions, summarize lessons, generate quizzes, and assist instructors in content creation."
      },
      {
        title: "Complete Institute ERP",
        desc:
          "Manage students, instructors, batches, courses, attendance, exams, assignments, and certificates from one dashboard."
      },
      {
        title: "Course Marketplace",
        desc:
          "Sell online courses with secure enrollment, payments, and lifetime student access."
      },
      {
        title: "Advanced Analytics",
        desc:
          "Real-time reports on student performance, revenue, enrollments, instructor productivity, and institute growth."
      }
    ]
  },

  features: [
    {
      title: "Student Management",
      desc:
        "Complete student lifecycle including admissions, profiles, enrollments, attendance, and progress tracking."
    },
    {
      title: "Instructor Portal",
      desc:
        "Dedicated dashboard for instructors to manage courses, live classes, assignments, and grading."
    },
    {
      title: "Course Management",
      desc:
        "Create, organize, publish, and monetize online or offline courses."
    },
    {
      title: "Batch Management",
      desc:
        "Create batches, assign instructors, manage schedules, and monitor student participation."
    },
    {
      title: "Live Classes",
      desc:
        "Integrated virtual classroom with scheduling, attendance, and recordings."
    },
    {
      title: "Assignment Management",
      desc:
        "Upload assignments, accept submissions, automate grading workflows, and provide feedback."
    },
    {
      title: "Online Quiz & Exams",
      desc:
        "Create AI-assisted quizzes, online exams, auto-evaluation, and result publishing."
    },
    {
      title: "Question Bank",
      desc:
        "Centralized repository for reusable questions categorized by subject and difficulty."
    },
    {
      title: "Attendance Management",
      desc:
        "Digital attendance with reports, analytics, and student notifications."
    },
    {
      title: "Certificate Generator",
      desc:
        "Automatically generate certificates upon successful course completion."
    },
    {
      title: "Payment Management",
      desc:
        "Manage fees, subscriptions, invoices, refunds, and online payments."
    },
    {
      title: "Reports & Analytics",
      desc:
        "Comprehensive dashboards covering revenue, student performance, attendance, instructor activity, and enrollments."
    },
    {
      title: "Support Ticket System",
      desc:
        "Built-in helpdesk for resolving student and instructor issues efficiently."
    },
    {
      title: "Learning Resources",
      desc:
        "Centralized digital library for PDFs, videos, notes, presentations, and study materials."
    },
    {
      title: "Course Marketplace",
      desc:
        "Public marketplace allowing students to browse, purchase, and enroll in premium courses."
    },
    {
      title: "Role Based Access",
      desc:
        "Separate dashboards for Super Admin, Institute Admin, Instructor, Student, and Staff."
    },
    {
      title: "AI Content Generation",
      desc:
        "Generate course outlines, lesson summaries, quizzes, MCQs, and assignments using AI."
    },
    {
      title: "AI Student Assistant",
      desc:
        "Students receive instant AI assistance for doubts, revision, and learning recommendations."
    },
    {
      title: "Performance Prediction",
      desc:
        "AI identifies at-risk students and recommends personalized improvement plans."
    },
    {
      title: "Responsive SaaS Platform",
      desc:
        "Fully responsive enterprise SaaS optimized for desktop, tablet, and mobile devices."
    }
  ],

  galleryImages: [
    {
      src: "/AVRLMS/learnsuite1.png",
      alt: "Institute Dashboard"
    },
    {
      src: "/AVRLMS/learnsuite2.png",
      alt: "Analytics Dashboard"
    },
    {
      src: "/AVRLMS/learnsuite3.png",
      alt: "Support Tickets"
    },
    {
      src: "/AVRLMS/learnsuite4.png",
      alt: "Content Library"
    },
    {
      src: "/AVRLMS/learnsuite5.png",
      alt: "Reports"
    },
    {
      src: "/AVRLMS/learnsuite6.png",
      alt: "Course Marketplace"
    },
    {
      src: "/AVRLMS/learnsuite7.png",
      alt: "Platform Settings"
    }
  ],

  statistics: [
    {
      value: "15,000+",
      label: "Students Managed"
    },
    {
      value: "500+",
      label: "Courses Published"
    },
    {
      value: "250+",
      label: "Instructors"
    },
    {
      value: "99.9%",
      label: "Platform Uptime"
    }
  ],

  performanceMetrics: [
    {
      value: "95%",
      label: "Automation Efficiency"
    },
    {
      value: "<1 Sec",
      label: "Dashboard Load Time"
    },
    {
      value: "40%",
      label: "Reduced Administrative Work"
    },
    {
      value: "AI Powered",
      label: "Learning Experience"
    }
  ],

  results: [
    "Centralized complete institute operations.",
    "Reduced administrative workload through automation.",
    "Improved student engagement using AI assistance.",
    "Automated assignments and quiz generation.",
    "Digitized examinations and attendance.",
    "Real-time performance analytics.",
    "Created an online course marketplace.",
    "Simplified fee collection and reporting.",
    "Improved instructor productivity.",
    "Delivered a scalable multi-tenant SaaS platform."
  ],

  timeline: [
    {
      phase: "Requirement Analysis",
      time: "2 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "3 Weeks"
    },
    {
      phase: "Frontend Development",
      time: "5 Weeks"
    },
    {
      phase: "Backend Development",
      time: "6 Weeks"
    },
    {
      phase: "AI Integration",
      time: "3 Weeks"
    },
    {
      phase: "Testing & Deployment",
      time: "2 Weeks"
    }
  ],

  testimonial: {
    quote:
      "AVR LearnSuite transformed our institute by bringing admissions, courses, live classes, examinations, AI-powered learning, analytics, and administration into one seamless platform. It has significantly improved operational efficiency and student engagement.",
    author: "Maria Garcia",
    role: "Institute Administrator",
    company: "AVR LearnSuite"
  },

  liveProjectUrl: "https://avr-learnsuite.vercel.app/auth/login"
},
{
  slug: "doctorpatavr",

  title: "DoctorPatAVR",

  subtitle: "AI Powered Hospital Management System & Healthcare ERP",

  description:
    "DoctorPatAVR is a comprehensive AI-powered Hospital Management System (HMS) and Healthcare ERP designed for hospitals, multi-specialty clinics, diagnostic centers, and healthcare networks. The platform centralizes patient management, doctor scheduling, appointments, EMR, laboratory, pharmacy, billing, finance, HR, analytics, and AI-powered healthcare automation into one enterprise SaaS platform.",

  heroImage: "/AVR-Doctor-App/doctorapp-3.png",

  tags: [
    "Artificial Intelligence",
    "Hospital Management System",
    "Healthcare ERP",
    "Healthcare SaaS",
    "EMR",
    "Telemedicine",
    "Clinic Management",
    "AI Automation"
  ],

  launchDate: "2026-07-28",

  duration: "6 Months",

  teamSize: "8 Members",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "Node.js",
    "MySQL",
    "OpenAI API",
    "Chart.js",
    "Socket.IO",
    "AWS S3",
    "Stripe"
  ],

  challenges: {
    summary:
      "Hospitals and clinics relied on multiple disconnected systems to manage patients, appointments, medical records, pharmacy, billing, laboratory reports, staff, and finance. Manual workflows increased operational cost and reduced patient experience.",

    keyChallenges: [
      "Manual patient registration",
      "Appointment scheduling conflicts",
      "Scattered medical records",
      "Prescription management",
      "Laboratory report tracking",
      "Billing & payment reconciliation",
      "Multi-branch hospital management",
      "Lack of AI-powered healthcare automation"
    ]
  },

  solution: {
    summary:
      "Developed an enterprise multi-tenant Hospital Management System that automates complete healthcare operations including patient lifecycle, appointments, EMR, prescriptions, diagnostics, billing, finance, reporting, and AI-assisted clinical workflows.",

    keyFeatures: [
      {
        title: "AI Medical Assistant",
        desc:
          "AI assists doctors with medical summaries, diagnosis suggestions, treatment recommendations, prescription drafting, and patient interaction."
      },
      {
        title: "Complete Hospital ERP",
        desc:
          "Manage patients, doctors, appointments, departments, pharmacy, laboratory, billing, HR, finance, and analytics from one dashboard."
      },
      {
        title: "Electronic Medical Records",
        desc:
          "Centralized EMR with patient history, prescriptions, reports, vitals, and consultation records."
      },
      {
        title: "Healthcare Analytics",
        desc:
          "Real-time dashboards for appointments, patient growth, hospital revenue, department performance, and operational KPIs."
      }
    ]
  },

  features: [
    {
      title: "Patient Management",
      desc:
        "Complete patient lifecycle from registration, profile management, appointments, treatments, and follow-ups."
    },
    {
      title: "Doctor Management",
      desc:
        "Manage doctor profiles, departments, consultation fees, schedules, ratings, and availability."
    },
    {
      title: "Department Management",
      desc:
        "Create and manage medical departments with doctors, appointments, and department performance."
    },
    {
      title: "Appointment Booking",
      desc:
        "Book, reschedule, cancel, and manage appointments with intelligent slot management."
    },
    {
      title: "Appointment Calendar",
      desc:
        "Interactive calendar for doctors, receptionists, and administrators."
    },
    {
      title: "Electronic Medical Records (EMR)",
      desc:
        "Complete digital patient history including visits, diagnoses, prescriptions, lab reports, and documents."
    },
    {
      title: "Digital Prescriptions",
      desc:
        "Generate digital prescriptions with medicine history and downloadable reports."
    },
    {
      title: "Laboratory Management",
      desc:
        "Manage lab tests, reports, diagnostics, and patient test history."
    },
    {
      title: "Pharmacy Inventory",
      desc:
        "Inventory management with medicine stock, expiry tracking, purchase, and dispensing."
    },
    {
      title: "Billing & Invoices",
      desc:
        "Generate invoices, collect payments, manage insurance billing, refunds, and financial reports."
    },
    {
      title: "Finance Management",
      desc:
        "Track hospital revenue, expenses, pending payments, and financial analytics."
    },
    {
      title: "Staff Management",
      desc:
        "Manage nurses, receptionists, technicians, HR records, attendance, payroll, and permissions."
    },
    {
      title: "Attendance & Payroll",
      desc:
        "Automated employee attendance with payroll processing."
    },
    {
      title: "Reports & Analytics",
      desc:
        "Generate operational, financial, clinical, laboratory, pharmacy, and patient reports."
    },
    {
      title: "Notifications",
      desc:
        "Appointment reminders, medicine reminders, billing alerts, and hospital announcements."
    },
    {
      title: "Support Ticket System",
      desc:
        "Integrated support center for patients, staff, and hospital administrators."
    },
    {
      title: "Hospital & Clinic Management",
      desc:
        "Manage multiple hospitals, branches, clinics, and healthcare facilities from a single platform."
    },
    {
      title: "Subscription Management",
      desc:
        "Multi-tenant SaaS subscription plans for hospitals and clinics."
    },
    {
      title: "Audit Logs",
      desc:
        "Complete activity logs for compliance and security auditing."
    },
    {
      title: "Role Based Access",
      desc:
        "Separate dashboards for Super Admin, Hospital Admin, Doctor, Receptionist, Nurse, Patient, Pharmacist, and Lab Staff."
    },
    {
      title: "AI Clinical Assistant",
      desc:
        "AI-powered patient summaries, diagnosis support, treatment suggestions, and prescription generation."
    },
    {
      title: "AI Patient Assistant",
      desc:
        "Patients receive instant AI assistance for appointments, reports, prescriptions, and FAQs."
    },
    {
      title: "Healthcare Analytics Dashboard",
      desc:
        "Real-time KPIs including patient growth, revenue, appointments, cancellations, and department performance."
    },
    {
      title: "Responsive Enterprise SaaS",
      desc:
        "Fully responsive enterprise healthcare platform optimized for desktop, tablet, and mobile devices."
    }
  ],

  galleryImages: [
    {
      src: "/AVR-Doctor-App/doctorapp-1.png",
      alt: "Login Screen"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-2.png",
      alt: "Super Admin Dashboard"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-3.png",
      alt: "Patient Management"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-4.png",
      alt: "Doctor Management"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-5.png",
      alt: "Department Management"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-6.png",
      alt: "Appointment Booking"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-7.png",
      alt: "Appointment Calendar"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-8.png",
      alt: "Prescription Management"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-9.png",
      alt: "Electronic Medical Records"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-10.png",
      alt: "Reports & Analytics"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-11.png",
      alt: "Hospital Management"
    },
    {
      src: "/AVR-Doctor-App/doctorapp-12.png",
      alt: "Hospital Management"
    }
  ],

  statistics: [
    {
      value: "100,000+",
      label: "Patients Managed"
    },
    {
      value: "2,500+",
      label: "Doctors"
    },
    {
      value: "500+",
      label: "Hospitals & Clinics"
    },
    {
      value: "99.99%",
      label: "Platform Uptime"
    }
  ],

  performanceMetrics: [
    {
      value: "96%",
      label: "Workflow Automation"
    },
    {
      value: "<1 Sec",
      label: "Dashboard Load Time"
    },
    {
      value: "55%",
      label: "Reduced Administrative Work"
    },
    {
      value: "AI Powered",
      label: "Clinical Assistance"
    }
  ],

  results: [
    "Centralized complete hospital operations.",
    "Reduced appointment scheduling conflicts.",
    "Digitized Electronic Medical Records.",
    "Automated prescriptions and laboratory workflow.",
    "Improved patient experience with AI assistance.",
    "Real-time healthcare analytics.",
    "Simplified billing and financial reporting.",
    "Enabled multi-hospital SaaS management.",
    "Improved doctor and staff productivity.",
    "Delivered an enterprise-scale Healthcare ERP."
  ],

  timeline: [
    {
      phase: "Requirement Analysis",
      time: "2 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "3 Weeks"
    },
    {
      phase: "Frontend Development",
      time: "6 Weeks"
    },
    {
      phase: "Backend Development",
      time: "7 Weeks"
    },
    {
      phase: "AI Integration",
      time: "3 Weeks"
    },
    {
      phase: "Testing & Deployment",
      time: "3 Weeks"
    }
  ],

  testimonial: {
    quote:
      "DoctorPatAVR transformed our hospital operations by bringing patient management, appointments, EMR, billing, laboratory, pharmacy, finance, analytics, and AI-powered healthcare into one unified platform. The system significantly improved operational efficiency and patient satisfaction.",
    author: "Dr. Alex Morgan",
    role: "Hospital Administrator",
    company: "DoctorPatAVR"
  },

  liveProjectUrl: "https://avr-docpat.vercel.app/login"
},
{
  "slug": "avr-erp",
  "title": "AVR ERP",
  "subtitle": "AI Powered Enterprise Resource Planning SaaS",
  "description": "AVR ERP is a multi-tenant AI-powered ERP platform that centralizes CRM, HR, Payroll, Inventory, Sales, Purchase, Finance, Projects, Reporting and AI automation into one enterprise platform.",
  "heroImage": "/AVRERP/erp2.png",
  "tags": [
    "AI",
    "ERP",
    "CRM",
    "HRMS",
    "Inventory",
    "Finance",
    "SaaS"
  ],
  "launchDate": "2026-08-01",
  "duration": "6 Months",
  "teamSize": "8 Members",
  "technologies": [
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Node.js",
    "MySQL",
    "Tailwind CSS",
    "OpenAI API",
    "Chart.js"
  ],
  "challenges": {
    "summary": "Businesses used disconnected software for sales, inventory, HR and finance.",
    "keyChallenges": [
      "Lead Management",
      "Inventory Control",
      "Payroll",
      "Finance Reporting",
      "Multi Company",
      "Role Permissions",
      "Manual Approval Workflow",
      "Lack of AI Insights"
    ]
  },
  "solution": {
    "summary": "Developed an AI-powered multi-tenant ERP with centralized operations.",
    "keyFeatures": [
      {
        "title": "AI Copilot",
        "desc": "Natural language business assistant."
      },
      {
        "title": "CRM",
        "desc": "Lead, customer and sales management."
      },
      {
        "title": "Inventory",
        "desc": "Stock, warehouse and procurement."
      },
      {
        "title": "Finance",
        "desc": "Invoices, expenses and reporting."
      }
    ]
  },
  "features": [
    {
      "title": "Dashboard",
      "desc": "Business KPIs and analytics."
    },
    {
      "title": "Company Management",
      "desc": "Multi-company SaaS."
    },
    {
      "title": "Subscription Management",
      "desc": "Plans and billing."
    },
    {
      "title": "User & Role Management",
      "desc": "RBAC."
    },
    {
      "title": "CRM",
      "desc": "Lead and opportunity management."
    },
    {
      "title": "Sales",
      "desc": "Quotation, orders, invoices."
    },
    {
      "title": "Purchase",
      "desc": "Vendor and PO management."
    },
    {
      "title": "Inventory",
      "desc": "Products, warehouses, stock."
    },
    {
      "title": "HR & Payroll",
      "desc": "Employees, attendance, payroll."
    },
    {
      "title": "Projects",
      "desc": "Tasks and milestones."
    },
    {
      "title": "Finance",
      "desc": "Expenses, income, reports."
    },
    {
      "title": "Reports",
      "desc": "Business intelligence dashboards."
    },
    {
      "title": "Audit Logs",
      "desc": "Track every activity."
    },
    {
      "title": "Notifications",
      "desc": "Alerts and reminders."
    },
    {
      "title": "AI Insights",
      "desc": "Forecasts and recommendations."
    }
  ],
  "galleryImages": [
    {
      "src": "/AVRERP/erp1.png",
      "alt": "Login"
    },
    {
      "src": "/AVRERP/erp2.png",
      "alt": "Dashboard"
    },
    {
      "src": "/AVRERP/erp3.png",
      "alt": "Companies"
    },
    {
      "src": "/AVRERP/erp4.png",
      "alt": "HR"
    },
    {
      "src": "/AVRERP/erp5.png",
      "alt": "Inventory"
    },
    {
      "src": "/AVRERP/erp6.png",
      "alt": "HR"
    },
    {
      "src": "/AVRERP/erp7.png",
      "alt": "Inventory"
    },
    {
      "src": "/AVRERP/erp8.png",
      "alt": "HR"
    },
    {
      "src": "/AVRERP/erp9.png",
      "alt": "Inventory"
    },
    {
      "src": "/AVRERP/erp10.png",
      "alt": "HR"
    },
    {
      "src": "/AVRERP/erp11.png",
      "alt": "Inventory"
    }
  ],
  "statistics": [
    {
      "value": "500+",
      "label": "Companies"
    },
    {
      "value": "50K+",
      "label": "Users"
    },
    {
      "value": "99.9%",
      "label": "Uptime"
    },
    {
      "value": "AI",
      "label": "Automation"
    }
  ],
  "performanceMetrics": [
    {
      "value": "95%",
      "label": "Automation"
    },
    {
      "value": "<1 Sec",
      "label": "Dashboard"
    },
    {
      "value": "60%",
      "label": "Time Saved"
    },
    {
      "value": "24/7",
      "label": "Availability"
    }
  ],
  "results": [
    "Centralized business operations",
    "Reduced manual work",
    "Improved reporting",
    "AI-powered decision making"
  ],
  "timeline": [
    {
      "phase": "Planning",
      "time": "2 Weeks"
    },
    {
      "phase": "Design",
      "time": "3 Weeks"
    },
    {
      "phase": "Development",
      "time": "8 Weeks"
    },
    {
      "phase": "Testing",
      "time": "3 Weeks"
    },
    {
      "phase": "Deployment",
      "time": "2 Weeks"
    }
  ],
  "testimonial": {
    "quote": "AVR ERP unified our complete business operations and significantly improved productivity.",
    "author": "John Smith",
    "role": "Operations Director",
    "company": "Enterprise Client"
  },
  "liveProjectUrl": "https://avr-erp-rosy.vercel.app/login"
},
  {
    slug: "cumbopay",
    title: "CumboPay",
    subtitle: "Bitcoin Lightning Payment Gateway & Gaming Wallet Platform",
    description:
    "Developed a complete Bitcoin Lightning payment platform that enables merchants and gaming operators to manage deposits, withdrawals, user wallets, merchants, payment gateways, and automated recharge/redeem workflows. The platform provides instant Lightning Network payments, secure merchant management, real-time transaction processing, and an intuitive dashboard for administrators and end users.",
    heroImage: "/fintechwallet/wallet-17.png",
    tags: [
    "Bitcoin",
    "Lightning Network",
    "Crypto Payments",
    "Gaming",
    "Fintech",
    "Laravel",
    "Payment Gateway",
    "Wallet"
   ],
    launchDate: "2025-01-15",
    duration: "6 Months",
    teamSize: "8 Members",
    technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Bootstrap",
    "JavaScript",
    "Bitcoin Lightning",
    "REST API",
    "PayPal",
    "Crypto Wallet",
    "HTML5",
    "CSS3"
    ],
    challenges: {
    summary:
      "Building a production-ready crypto payment ecosystem required seamless Lightning Network integration, merchant management, secure wallet operations, automated payment processing, and real-time financial workflows while maintaining a user-friendly experience.",
    keyChallenges: [
      "Lightning Network payment integration",
      "Instant crypto invoice generation",
      "Automated recharge & redeem workflow",
      "Managing multiple gaming providers",
      "Secure merchant and admin architecture",
     "Transaction monitoring & reporting",
      "Withdrawal approval process",
      "Supporting multiple payment gateways"
    ]
  },
    solution: {
    summary:
      "Delivered an enterprise-grade payment platform with merchant management, Bitcoin Lightning deposits, automated withdrawals, gaming provider integration, payment gateway configuration, user wallet management, and a complete administrative control panel.",
    keyFeatures: [
      {
        title: "Bitcoin Lightning Payments",
        desc:
          "Integrated Lightning Network for fast, secure, low-fee cryptocurrency deposits with QR code invoice generation."
      },
      {
        title: "Merchant Management",
        desc:
          "Developed a merchant portal allowing administrators to create merchants, configure payment gateways, manage fees, and control financial operations."
      },
      {
        title: "Recharge & Redeem Automation",
        desc:
          "Implemented an automated deposit and redemption process connecting gaming providers with secure payment workflows."
      },
      {
        title: "Transaction Dashboard",
        desc:
          "Created an admin dashboard with real-time deposits, withdrawals, payment history, and financial reporting."
      }
    ]
  },
    features: [
    {
      title: "Lightning Invoice Generation",
      desc:
        "Generate secure Bitcoin Lightning invoices with QR codes for instant crypto payments."
    },
    {
      title: "Merchant Administration",
      desc:
        "Create, edit, manage, and configure merchants with custom fee structures and payment permissions."
    },
    {
      title: "User Wallet Dashboard",
      desc:
        "Provide users with wallet balances, payment history, deposit options, withdrawals, and account management."
    },
    {
      title: "Gaming Provider Integration",
      desc:
        "Integrated multiple gaming providers including Juwa, Orion Stars, Fire Kirin, Cash Machine, River Sweeps, Game Vault, VPower, Vegasweeps, Golden Dragon, and more."
    },
    {
      title: "Recharge & Redemption",
      desc:
        "Automated gaming account recharge and redemption with secure verification."
    },
    {
      title: "Admin Dashboard",
      desc:
        "Visual analytics showing deposits, withdrawals, merchant activity, and financial statistics."
    },
    {
      title: "Payment Gateway Configuration",
      desc:
        "Support for multiple payment providers including Bitcoin Lightning, PayPal, Stripe-ready architecture, and custom gateways."
    },
    {
      title: "Withdrawal Management",
      desc:
        "Approve, reject, monitor, and export withdrawal requests with complete audit history."
    },
    {
      title: "Role & Permission Management",
      desc:
        "Implemented secure access control for administrators, merchants, staff, and support teams."
    },
    {
      title: "Support & Dispute Module",
      desc:
        "Integrated ticketing and dispute management for payment-related issues."
    }
  ],
    galleryImages: [
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187525/wallet-1_cyzz0f.mp4",
        alt: "Fintech Wallet"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187528/wallet-2_h1eykk.mp4",
        alt: "Fintech Wallet"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187616/wallet-3_inqxio.mp4",
        alt: "Fintech Wallet"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187522/wallet-4_tqtqcu.mp4",
        alt: "Fintech Wallet"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187598/wallet-27_vkrvvn.mp4",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-5.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-6.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-7.png",
        alt: "Fintech Wallet"
      },
      {
        src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784187599/wallet-8_t6qfkq.mp4",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-9.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-10.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-11.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-12.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-13.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-14.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-15.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-16.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-17.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-18.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-19.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-20.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-21.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-22.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-23.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-24.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-25.png",
        alt: "Fintech Wallet"
      },
      {
        src: "/fintechwallet/wallet-26.png",
        alt: "Fintech Wallet"
      },
    ],
    statistics: [
    {
      value: "15+",
      label: "Gaming Providers"
    },
    {
      value: "5000+",
      label: "Transactions Processed"
    },
    {
      value: "100+",
      label: "Merchants"
    },
    {
      value: "24/7",
      label: "Payment Availability"
    }
  ],
    performanceMetrics: [
    {
      value: "<3 sec",
      label: "Invoice Generation"
    },
    {
      value: "99.9%",
      label: "System Availability"
    },
    {
      value: "80%",
      label: "Faster Payment Processing"
    },
    {
      value: "100%",
      label: "Encrypted Transactions"
    }
  ],
    results: [
    "Successfully launched a Bitcoin Lightning payment platform.",
    "Reduced payment confirmation time using Lightning Network.",
    "Automated recharge and redemption workflows.",
    "Centralized merchant and user management.",
    "Improved transaction transparency through reporting dashboards.",
    "Enabled secure gaming payment operations.",
    "Provided scalable infrastructure for additional payment providers."
  ],
    timeline: [
    {
      phase: "Requirement Analysis",
      time: "2 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "3 Weeks"
    },
    {
      phase: "Backend Development",
      time: "8 Weeks"
    },
    {
      phase: "Payment Gateway Integration",
      time: "4 Weeks"
    },
    {
      phase: "Testing & Security",
      time: "3 Weeks"
    },
    {
      phase: "Deployment & Support",
      time: "Ongoing"
    }
  ],
    testimonial: {
    quote:
      "The CumboPay platform transformed our gaming payment ecosystem by providing reliable Bitcoin Lightning payments, simplified merchant management, and an exceptional user experience.",
    author: "Project Owner",
    role: "Founder",
    company: "CumboPay"
  },
    liveProjectUrl: "https://paying.cumbo.tech"
  },
  {
    slug: "dream-live-spaces",
    title: "Dream Live Spaces",
    subtitle: "Affordable Plots, Interior Design & Home Construction Platform",
    description:
    "Dream Live Spaces is a complete real estate and construction platform helping customers buy plots, design beautiful interiors, and build their dream homes. We provide end-to-end consultation, site visits, cost estimation, project execution, and modern interior solutions across Muzaffarpur and nearby regions.",
    heroImage: "/realestate/real-eastate-4.jpg",
    tags: [
    "Real Estate",
    "Construction",
    "Interior Design",
    "Plot Buying",
    "Architecture",
    "Home Planning"
  ],
    launchDate: "2025-09-10",
    duration: "4 Months",
    teamSize: "6 Members",
    technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "MySQL",
    "Google Maps API",
    "WhatsApp API"
  ],
    challenges: {
    summary:
      "Customers struggled to find a single company that could provide plot consultation, interior design, construction, and project management under one roof.",

    keyChallenges: [
      "Finding verified plots",
      "Transparent pricing",
      "Modern interior planning",
      "Reliable contractors",
      "Project timeline management",
      "Quality assurance",
      "Budget optimization",
      "Single point of contact"
    ]
  },
    solution: {
    summary:
      "Developed a complete digital platform showcasing Dream Live Spaces' services, projects, testimonials, consultation forms, and WhatsApp integration for lead generation.",
    keyFeatures: [
      {
        title: "Free Consultation",
        desc:
          "Customers can request a free consultation and site visit."
      },
      {
        title: "Project Showcase",
        desc:
          "Display completed residential and commercial projects."
      },
      {
        title: "Lead Generation",
        desc:
          "Integrated enquiry forms with WhatsApp instant callback."
      },
      {
        title: "Responsive Website",
        desc:
          "Fully optimized for mobile, tablet and desktop."
      }
    ]
  },
    features: [
    {
      title: "Landing Page",
      desc: "High-converting landing page for lead generation."
    },
    {
      title: "Free Consultation Form",
      desc: "Collect customer enquiries instantly."
    },
    {
      title: "WhatsApp Integration",
      desc: "One-click chat with sales team."
    },
    {
      title: "Project Gallery",
      desc: "Display completed construction and interiors."
    },
    {
      title: "Service Pages",
      desc: "Dedicated pages for plots, interiors and construction."
    },
    {
      title: "Testimonials",
      desc: "Show customer reviews and trust indicators."
    },
    {
      title: "Google Map Integration",
      desc: "Easy office navigation."
    },
    {
      title: "SEO Friendly",
      desc: "Optimized for local real estate searches."
    },
    {
      title: "Mobile Responsive",
      desc: "Optimized across all devices."
    }
  ],
    galleryImages: [
      {
        src: "/realestate/real-eastate-1.jpg",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-2.jpg",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-3.jpg",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-4.jpg",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-5.jpg",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-6.jpg",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-7.png",
        alt: "Luxury Villa Interior"
      },
      {
        src: "/realestate/real-eastate-8.png",
        alt: "Luxury Villa Interior"
      }
    ],
    statistics: [
    {
      value: "50+",
      label: "Happy Clients"
    },
    {
      value: "10+",
      label: "Completed Projects"
    },
    {
      value: "100%",
      label: "Customer Satisfaction"
    },
    {
      value: "24 Hours",
      label: "Free Cost Estimate"
    }
  ],
    performanceMetrics: [
    {
      value: "95+",
      label: "Google PageSpeed"
    },
    {
      value: "<2 Sec",
      label: "Load Time"
    },
    {
      value: "100%",
      label: "Responsive Design"
    },
    {
      value: "SEO Ready",
      label: "Optimized Website"
    }
  ],
    results: [
    "Generated qualified real estate leads.",
    "Improved local online presence.",
    "Increased WhatsApp enquiries.",
    "Simplified customer consultation process.",
    "Showcased completed projects professionally.",
    "Improved brand credibility.",
    "Mobile-first customer experience."
  ],
    timeline: [
    {
      phase: "Research",
      time: "1 Week"
    },
    {
      phase: "UI/UX Design",
      time: "2 Weeks"
    },
    {
      phase: "Frontend Development",
      time: "3 Weeks"
    },
    {
      phase: "Backend Integration",
      time: "2 Weeks"
    },
    {
      phase: "Testing",
      time: "1 Week"
    },
    {
      phase: "Deployment",
      time: "Ongoing"
    }
  ],
    testimonial: {
    quote:
      "Dream Live Spaces helped us find the perfect plot and delivered a beautiful home exactly as promised.",
    author: "Happy Client",
    role: "Home Owner",
    company: "Muzaffarpur"
  },
    liveProjectUrl: "#"
  },
  {
    slug: "whatsapp-ai-agent",
    title: "WhatsApp AI Agent",
    subtitle: "AI-powered WhatsApp Assistant for FinTech Customer Support & Sales Automation.",
    description:
    "Developed an intelligent WhatsApp AI Agent that automates customer interactions for fintech businesses. The solution provides instant responses to customer queries, lead qualification, loan information, payment assistance, account support, and personalized conversations while reducing manual support workload and improving customer engagement.",
    heroImage: "/whatsapp-agent/AI-agent-3.png",
    tags: [
    "WhatsApp API",
    "OpenAI",
    "FinTech",
    "AI Agent",
    "Automation",
    "Node.js",
    "CRM"
  ],
  launchDate: "2025-07-01",
  duration: "2 Months",
  teamSize: "4 Members",
  technologies: [
    "WhatsApp Business API",
    "OpenAI GPT",
    "Node.js",
    "React",
    "MongoDB"
  ],
  challenges: {
    summary:
      "FinTech businesses receive a high volume of repetitive customer queries related to loans, payments, KYC, account services, and product information. The challenge was to automate these conversations while maintaining accurate, secure, and human-like interactions.",

    keyChallenges: [
      "Understanding natural customer conversations",
      "Providing accurate financial information instantly",
      "Automating lead qualification and customer support",
      "Maintaining context throughout long conversations"
    ]
  },
  solution: {
    summary:
      "Built an AI-powered WhatsApp assistant capable of answering customer queries, qualifying leads, explaining financial products, scheduling follow-ups, and handing over conversations to human agents whenever required.",
    keyFeatures: [
      {
        title: "AI-powered conversations",
        desc: "Natural human-like conversations using advanced language models."
      },
      {
        title: "Lead qualification",
        desc: "Automatically collects customer information and identifies qualified prospects."
      },
      {
        title: "Smart escalation",
        desc: "Transfers complex conversations to human support agents with complete chat history."
      }
    ]
  },
  features: [
    {
      title: "24/7 Customer Support",
      desc: "Provide instant responses to customer queries anytime through WhatsApp."
    },
    {
      title: "Lead Qualification",
      desc: "Capture customer details and qualify leads automatically before assigning them to the sales team."
    },
    {
      title: "Loan & Product Assistance",
      desc: "Explain financial products, loan eligibility, repayment options, and documentation requirements."
    },
    {
      title: "Appointment Scheduling",
      desc: "Book callbacks, meetings, and customer appointments directly from WhatsApp."
    },
    {
      title: "Context-Aware AI",
      desc: "Maintain conversation history and deliver personalized responses based on previous interactions."
    }
  ],
  galleryImages: [
    {
      src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784188128/AI-agent-1_lkvwy5.mp4",
      alt: "WhatsApp AI Conversation"
    },
    {
      src: "https://res.cloudinary.com/yu5clykr/video/upload/v1784188161/AI-agent-2_cclro4.mp4",
      alt: "Lead Qualification Flow"
    }
  ],
  statistics: [
    { value: "24/7", label: "AVAILABILITY" },
    { value: "<3 Sec", label: "RESPONSE TIME" },
    { value: "95%", label: "QUERY RESOLUTION" },
    { value: "100%", label: "WHATSAPP AUTOMATION" }
  ],
  performanceMetrics: [
    { value: "70%", label: "SUPPORT COST REDUCTION" },
    { value: "85%", label: "FASTER RESPONSE" },
    { value: "90%", label: "LEAD AUTOMATION" },
    { value: "99.9%", label: "SYSTEM UPTIME" }
  ],
  results: [
    "Automated customer support on WhatsApp.",
    "Reduced response time from minutes to seconds.",
    "Improved lead qualification and customer engagement.",
    "Enabled 24/7 AI-powered customer assistance."
  ],
  timeline: [
    { phase: "Requirement Analysis", time: "1 Week" },
    { phase: "Conversation Design", time: "1 Week" },
    { phase: "AI Development", time: "3 Weeks" },
    { phase: "WhatsApp Integration", time: "2 Weeks" },
    { phase: "Testing & Optimization", time: "1 Week" },
    { phase: "Deployment & Monitoring", time: "Ongoing" }
  ],
  testimonial: {
    quote:
      "The WhatsApp AI Agent significantly improved our customer response time and automated repetitive support queries, allowing our team to focus on high-value customer interactions.",
    author: "Product Team",
    role: "FinTech Operations",
    company: "Confidential FinTech Client"
  },
  liveProjectUrl: "#"
},
  {
  slug: "mudarib-fitness",
  title: "Mudarib Fitness",
  subtitle: "Dubai-Based Personal Fitness & Trainer Marketplace Platform",
  description:
    "Developed a complete fitness marketplace mobile application connecting users with professional fitness trainers. Users can subscribe to the platform, select certified trainers, receive personalized day-wise workout programs, watch trainer-uploaded workout videos, and communicate through real-time one-to-one chat. The platform enables trainers to manage their clients, assign customized fitness plans, and monitor user progress from a single application.",
  heroImage: "/fitnessapp/fitness-1.png",
  tags: [
    "Fitness",
    "HealthTech",
    "Mobile App",
    "Trainer Marketplace",
    "Laravel",
    "Kotlin",
    "Swift",
    "Socket.IO"
  ],
  launchDate: "2018-01-01",
  duration: "8 Months",
  teamSize: "6 Members",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Kotlin",
    "Swift",
    "Socket.IO",
    "REST API",
    "Firebase Notifications"
  ],
  challenges: {
    summary:
      "Building a scalable fitness marketplace required seamless communication between trainers and users, personalized workout scheduling, subscription management, real-time messaging, and smooth media delivery while maintaining excellent mobile performance.",
    keyChallenges: [
      "Building a dual-role application for users and trainers",
      "Creating personalized day-wise workout programs",
      "Implementing secure subscription management",
      "Developing real-time one-to-one chat",
      "Streaming trainer workout videos efficiently",
      "Synchronizing workout progress across devices",
      "Managing trainer schedules and client assignments",
      "Providing smooth mobile performance on Android and iOS"
    ]
  },
  solution: {
    summary:
      "Delivered an end-to-end fitness platform where users subscribe, choose professional trainers, receive customized workout plans, watch guided exercise videos, and communicate directly with trainers through real-time chat.",
    keyFeatures: [
      {
        title: "Trainer Marketplace",
        desc: "Users can browse, compare and subscribe to professional fitness trainers."
      },
      {
        title: "Personalized Workout Programs",
        desc: "Trainers create customized day-wise workout schedules based on user fitness goals."
      },
      {
        title: "Real-time Chat",
        desc: "Integrated Socket.IO for instant one-to-one messaging between trainers and users."
      },
      {
        title: "Workout Video Library",
        desc: "Trainers upload exercise videos allowing users to perform workouts correctly."
      }
    ]
  },
  features: [
    {
      title: "User Subscription",
      desc: "Users subscribe to premium fitness plans and unlock trainer-guided programs."
    },
    {
      title: "Choose Your Trainer",
      desc: "Browse professional trainers based on specialization, pricing, and experience."
    },
    {
      title: "Day-wise Fitness Program",
      desc: "Receive personalized daily workout schedules prepared by certified trainers."
    },
    {
      title: "Workout Video Guidance",
      desc: "Access trainer-uploaded exercise videos for proper workout execution."
    },
    {
      title: "Real-time Chat",
      desc: "Communicate instantly with trainers using Socket.IO powered one-to-one messaging."
    },
    {
      title: "Workout Calendar",
      desc: "Track daily exercise schedules and completed workout sessions."
    },
    {
      title: "Trainer Dashboard",
      desc: "Manage clients, assign workout plans, upload videos, and monitor progress."
    },
    {
      title: "Cross-platform Mobile App",
      desc: "Native Android and iOS applications developed using Kotlin and Swift."
    },
    {
      title: "Progress Tracking",
      desc: "Monitor completed workouts and stay consistent with personalized fitness goals."
    },
    {
      title: "Notification System",
      desc: "Receive reminders for scheduled workouts, trainer messages, and plan updates."
    }
  ],
  galleryImages: [
    {
      src: "/fitnessapp/fitness-1.png",
      alt: "Trainer Selection"
    },
    {
      src: "/fitnessapp/fitness-2.webp",
      alt: "Workout Program"
    },
    {
      src: "/fitnessapp/fitness-3.png",
      alt: "Trainer Chat"
    },
    {
      src: "/fitnessapp/fitness-4.webp",
      alt: "Workout Video"
    },
    {
      src: "/fitnessapp/fitness-5.png",
      alt: "Trainer Chat"
    },
    {
      src: "/fitnessapp/fitness-6.webp",
      alt: "Workout Video"
    },
    {
      src: "/fitnessapp/fitness-7.png",
      alt: "Trainer Chat"
    },
    {
      src: "/fitnessapp/fitness-8.webp",
      alt: "Workout Video"
    },
    {
      src: "/fitnessapp/screen-10.webp",
      alt: "Trainer Chat"
    },
    {
      src: "/fitnessapp/screen-11.png",
      alt: "Workout Video"
    },
    {
      src: "/fitnessapp/screen-12.webp",
      alt: "Trainer Chat"
    },
    {
      src: "/fitnessapp/screen-13.png",
      alt: "Workout Video"
    }
  ],
  statistics: [
    {
      value: "2",
      label: "USER ROLES"
    },
    {
      value: "100%",
      label: "REAL-TIME CHAT"
    },
    {
      value: "Native",
      label: "ANDROID & IOS"
    },
    {
      value: "24/7",
      label: "FITNESS SUPPORT"
    }
  ],
  performanceMetrics: [
    {
      value: "<1 Sec",
      label: "CHAT DELIVERY"
    },
    {
      value: "99.9%",
      label: "SYSTEM UPTIME"
    },
    {
      value: "80%",
      label: "FASTER COMMUNICATION"
    },
    {
      value: "100%",
      label: "REAL-TIME SYNCHRONIZATION"
    }
  ],
  results: [
    "Successfully launched a Dubai-based fitness marketplace.",
    "Connected users with certified fitness trainers.",
    "Enabled personalized day-wise workout planning.",
    "Implemented real-time trainer-user communication.",
    "Improved user engagement through workout videos.",
    "Delivered native Android and iOS applications.",
    "Built a scalable architecture supporting future growth."
  ],
  timeline: [
    {
      phase: "Requirement Analysis",
      time: "3 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "4 Weeks"
    },
    {
      phase: "Backend Development",
      time: "10 Weeks"
    },
    {
      phase: "Android & iOS Development",
      time: "8 Weeks"
    },
    {
      phase: "Testing & QA",
      time: "3 Weeks"
    },
    {
      phase: "Deployment",
      time: "August 2018"
    }
  ],
  testimonial: {
    quote:
      "The application streamlined communication between trainers and members while providing personalized fitness experiences through workout plans, video guidance, and real-time messaging.",
    author: "Project Owner",
    role: "Founder",
    company: "Mudarib Fitness"
  },

  liveProjectUrl: "#"
},
  {
  slug: "hi-hello",

  title: "Hi Hello",

  subtitle: "Social Dating & Matchmaking Mobile Application with Interactive Unity Games",

  description:
    "Developed a feature-rich dating and matchmaking mobile application that connects like-minded people based on their interests and preferences. Users can discover profiles, send likes, create meaningful matches, chat in real-time, exchange custom emojis, and build stronger connections. A unique feature of the platform is the Unity-powered private activity games, unlocked only after two users successfully match, making conversations more engaging and interactive.",

  heroImage: "/dating-app/dating-5.png",

  tags: [
    "Dating",
    "Social Networking",
    "Unity",
    "Mobile App",
    "Laravel",
    "Kotlin",
    "Real-Time Chat",
    "Matchmaking"
  ],

  launchDate: "2022-10-01",

  duration: "7 Months",

  teamSize: "6 Members",

  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Kotlin",
    "REST API",
    "Firebase",
    "Unity",
    "Firebase Cloud Messaging"
  ],

  challenges: {
    summary:
      "Building an engaging dating platform required delivering intelligent profile discovery, secure matchmaking, real-time messaging, custom social interactions, and a unique post-match engagement experience while maintaining high performance and user privacy.",

    keyChallenges: [
      "Designing a smooth matchmaking experience",
      "Managing user profiles and preferences",
      "Implementing secure real-time messaging",
      "Building an engaging post-match experience",
      "Integrating Unity mini games inside the app",
      "Optimizing media uploads and profile browsing",
      "Push notification management",
      "Maintaining user privacy and account security"
    ]
  },

  solution: {
    summary:
      "Delivered a modern dating application that allows users to discover compatible profiles, create meaningful matches, communicate through real-time chat, share expressive emojis, and strengthen engagement with exclusive Unity-powered activity games available only after matching.",

    keyFeatures: [
      {
        title: "Smart Matchmaking",
        desc: "Users discover compatible profiles based on interests and preferences."
      },
      {
        title: "Real-time Chat",
        desc: "Instant messaging with expressive custom emoji support for better engagement."
      },
      {
        title: "Unity Activity Games",
        desc: "Exclusive private games become available after both users successfully match."
      },
      {
        title: "Secure Social Platform",
        desc: "Profile privacy, notifications, and account management designed for a safe user experience."
      }
    ]
  },

  features: [
    {
      title: "Profile Discovery",
      desc: "Browse genuine user profiles with detailed interests, hobbies, and personal information."
    },
    {
      title: "Smart Matching",
      desc: "Like, connect, and create mutual matches with compatible users."
    },
    {
      title: "Real-Time Chat",
      desc: "Private one-to-one messaging with instant delivery and smooth communication."
    },
    {
      title: "Custom Emojis & Stickers",
      desc: "Express conversations using exclusive stickers and emoji collections."
    },
    {
      title: "Unity Activity Games",
      desc: "Matched users unlock interactive Unity-powered mini games to improve engagement."
    },
    {
      title: "User Profiles",
      desc: "Manage profile photos, interests, hobbies, and personal preferences."
    },
    {
      title: "Push Notifications",
      desc: "Receive instant alerts for new matches, messages, and profile interactions."
    },
    {
      title: "Privacy Controls",
      desc: "Secure account settings with profile visibility and interaction management."
    },
    {
      title: "Media Sharing",
      desc: "Upload profile pictures and personalize dating profiles."
    },
    {
      title: "Scalable Backend",
      desc: "Laravel-powered REST APIs with optimized MySQL database architecture."
    }
  ],

  galleryImages: [
    {
      src: "/dating-app/dating-11.png",
      alt: "Home Screen"
    },
    {
      src: "/dating-app/dating-1.png",
      alt: "Home Screen"
    },
    {
      src: "/dating-app/dating-2.png",
      alt: "Profile Discovery"
    },
    {
      src: "/dating-app/dating-3.png",
      alt: "Home Screen"
    },
    {
      src: "/dating-app/dating-4.png",
      alt: "Profile Discovery"
    },
    {
      src: "/dating-app/dating-5.png",
      alt: "Home Screen"
    },
    {
      src: "/dating-app/dating-6.png",
      alt: "Profile Discovery"
    },
    {
      src: "/dating-app/dating-7.png",
      alt: "Home Screen"
    },
    {
      src: "/dating-app/dating-8.png",
      alt: "Profile Discovery"
    },
    {
      src: "/dating-app/dating-9.png",
      alt: "Home Screen"
    },
    {
      src: "/dating-app/dating-10.png",
      alt: "Profile Discovery"
    },
  ],

  statistics: [
    {
      value: "2",
      label: "USER TYPES"
    },
    {
      value: "100%",
      label: "REAL-TIME CHAT"
    },
    {
      value: "Unity",
      label: "MATCH GAMES"
    },
    {
      value: "24/7",
      label: "SOCIAL CONNECTIVITY"
    }
  ],

  performanceMetrics: [
    {
      value: "<1 Sec",
      label: "MESSAGE DELIVERY"
    },
    {
      value: "99.9%",
      label: "SYSTEM UPTIME"
    },
    {
      value: "80%",
      label: "HIGHER USER ENGAGEMENT"
    },
    {
      value: "100%",
      label: "MATCH SYNCHRONIZATION"
    }
  ],

  results: [
    "Successfully launched a modern dating platform.",
    "Enabled seamless profile discovery and matchmaking.",
    "Implemented real-time private messaging.",
    "Introduced Unity-powered activity games after matching.",
    "Improved user engagement with interactive social experiences.",
    "Delivered scalable Laravel backend APIs.",
    "Built a secure and user-friendly mobile experience."
  ],

  timeline: [
    {
      phase: "Requirement Analysis",
      time: "3 Weeks"
    },
    {
      phase: "UI/UX Design",
      time: "4 Weeks"
    },
    {
      phase: "Backend Development",
      time: "9 Weeks"
    },
    {
      phase: "Android Development",
      time: "8 Weeks"
    },
    {
      phase: "Unity Game Integration",
      time: "3 Weeks"
    },
    {
      phase: "Testing & Deployment",
      time: "4 Weeks"
    }
  ],

  testimonial: {
    quote:
      "The Unity-powered activity games transformed the traditional dating experience by giving matched users a fun and interactive way to connect beyond messaging.",
    author: "Project Owner",
    role: "Founder",
    company: "Hi Hello"
  },

  liveProjectUrl: "https://github.com/DEEPAKRAJPOOT/HiiHelloApp"
},
{
  slug: "medi-hold",

  title: "Medi Hold",

  subtitle: "Digital Pharmacy Reservation & Family Healthcare Management Platform",

  description:
    "Developed a comprehensive healthcare application that allows patients and families to reserve medicines before visiting pharmacies. Users can upload prescriptions, manage family members, search medicines by symptoms or medical conditions, locate nearby pharmacies, verify medicine availability in real-time, reserve medicines online, receive medication reminders, and securely manage their healthcare records from a single application.",

  heroImage: "/Design-App-Figma/pharma-9.png",

  tags: [
    "Healthcare",
    "Pharmacy",
    "Medicine Reservation",
    "HealthTech",
    "Laravel",
    "Flutter",
    "MySQL",
    "Google Maps"
  ],

  launchDate: "2025-05-01",

  duration: "7 Months",

  teamSize: "7 Members",

  technologies: [
    "Laravel",
    "PHP",
    "Flutter",
    "MySQL",
    "REST API",
    "Google Maps API",
    "Firebase",
    "Firebase Cloud Messaging",
    "Payment Gateway"
  ],

  challenges: {

    summary:
      "Building a healthcare reservation platform required integrating pharmacy inventory management, prescription uploads, family healthcare records, medicine reservations, payment processing, and location-based pharmacy discovery while ensuring an intuitive patient experience.",

    keyChallenges: [

      "Prescription upload and verification",

      "Family member healthcare management",

      "Real-time medicine availability",

      "Nearby pharmacy discovery",

      "Medicine reservation workflow",

      "Location-based pharmacy search",

      "Payment gateway integration",

      "Medication reminders and follow-ups"

    ]

  },

  solution: {

    summary:
      "Delivered a complete healthcare ecosystem enabling patients to upload prescriptions, reserve medicines, locate pharmacies, manage family healthcare profiles, receive reminders, and reduce waiting time through advance reservation.",

    keyFeatures: [

      {

        title: "Medicine Reservation",

        desc:
          "Reserve medicines online before visiting the pharmacy to ensure availability."

      },

      {

        title: "Family Healthcare Management",

        desc:
          "Link and manage family members under a single primary healthcare account."

      },

      {

        title: "Prescription Upload",

        desc:
          "Upload prescriptions securely for pharmacist verification and medicine reservation."

      },

      {

        title: "Nearby Pharmacy Finder",

        desc:
          "Locate pharmacies using maps with medicine availability and distance information."

      }

    ]

  },

  features: [

    {

      title: "Primary Account Registration",

      desc:
        "Register patients with Emirates ID verification and securely manage healthcare profiles."

    },

    {

      title: "Family Linkage",

      desc:
        "Add spouse, children, and family members under one healthcare account."

    },

    {

      title: "Prescription Upload",

      desc:
        "Upload prescriptions digitally for medicine verification and reservation."

    },

    {

      title: "Medicine Search",

      desc:
        "Search medicines directly or browse by symptoms and medical conditions."

    },

    {

      title: "Medical Condition Categories",

      desc:
        "Browse medicines based on diseases like Diabetes, Cancer, Asthma, Dermatitis, and more."

    },

    {

      title: "Nearby Pharmacy Discovery",

      desc:
        "Find nearby pharmacies using GPS location with distance, operating hours, and medicine stock status."

    },

    {

      title: "Medicine Reservation",

      desc:
        "Reserve available medicines online before reaching the pharmacy."

    },

    {

      title: "Online Payments",

      desc:
        "Pay reservation charges securely using multiple payment methods."

    },

    {

      title: "Medication Reminders",

      desc:
        "Receive reminders for medications, prescription renewals, and follow-up visits."

    },

    {

      title: "Reservation Tracking",

      desc:
        "Track reservation confirmation, expiry countdown, and pharmacy visit schedule."

    }

  ],

  galleryImages: [

    {

      src: "/Design-App-Figma/pharma-1.png",

      alt: "Home Dashboard"

    },

    {

      src: "/Design-App-Figma/pharma-2.png",

      alt: "Nearby Pharmacies"

    },

    {

      src: "/Design-App-Figma/pharma-3.png",

      alt: "Prescription Upload"

    },

    {

      src: "/Design-App-Figma/pharma-4.png",

      alt: "Medicine Reservation"

    },
    {

      src: "/Design-App-Figma/pharma-5.png",

      alt: "Home Dashboard"

    },

    {

      src: "/Design-App-Figma/pharma-6.png",

      alt: "Nearby Pharmacies"

    },

    {

      src: "/Design-App-Figma/pharma-7.png",

      alt: "Prescription Upload"

    },

    {

      src: "/Design-App-Figma/pharma-8.png",

      alt: "Medicine Reservation"

    },
    {

      src: "/Design-App-Figma/pharma-9.png",

      alt: "Home Dashboard"

    },

    {

      src: "/Design-App-Figma/pharma-10.png",

      alt: "Nearby Pharmacies"

    },

    {

      src: "/Design-App-Figma/pharma-11.png",

      alt: "Prescription Upload"

    },

    {

      src: "/Design-App-Figma/pharma-12.png",

      alt: "Medicine Reservation"

    },
    {

      src: "/Design-App-Figma/pharma-13.png",

      alt: "Home Dashboard"

    },

    {

      src: "/Design-App-Figma/pharma-14.png",

      alt: "Nearby Pharmacies"

    },

    {

      src: "/Design-App-Figma/pharma-15.png",

      alt: "Prescription Upload"

    },

    {

      src: "/Design-App-Figma/pharma-16.png",

      alt: "Medicine Reservation"

    }

  ],

  statistics: [

    {

      value: "1000+",

      label: "MEDICINES"

    },

    {

      value: "Multi",

      label: "PAYMENT OPTIONS"

    },

    {

      value: "GPS",

      label: "PHARMACY SEARCH"

    },

    {

      value: "24/7",

      label: "RESERVATION"

    }

  ],

  performanceMetrics: [

    {

      value: "<5 Sec",

      label: "MEDICINE SEARCH"

    },

    {

      value: "99.9%",

      label: "SYSTEM UPTIME"

    },

    {

      value: "70%",

      label: "FASTER RESERVATION"

    },

    {

      value: "100%",

      label: "DIGITAL PRESCRIPTION"

    }

  ],

  results: [

    "Successfully launched a digital pharmacy reservation platform.",

    "Reduced patient waiting time through advance medicine reservations.",

    "Simplified prescription management digitally.",

    "Enabled real-time pharmacy and medicine availability.",

    "Improved healthcare accessibility for families.",

    "Integrated secure online reservation payments.",

    "Delivered a scalable healthcare ecosystem."

  ],

  timeline: [

    {

      phase: "Requirement Analysis",

      time: "3 Weeks"

    },

    {

      phase: "UI/UX Design",

      time: "4 Weeks"

    },

    {

      phase: "Backend Development",

      time: "9 Weeks"

    },

    {

      phase: "Mobile App Development",

      time: "8 Weeks"

    },

    {

      phase: "Testing & QA",

      time: "3 Weeks"

    },

    {

      phase: "Deployment",

      time: "Ongoing"

    }

  ],

  testimonial: {

    quote:
      "Medi Hold simplified the medicine reservation process by allowing patients to reserve medicines in advance, manage family healthcare, and connect with nearby pharmacies through one seamless platform.",

    author: "Project Owner",

    role: "Founder",

    company: "Medi Hold"

  },

  liveProjectUrl: "#"

}

];
