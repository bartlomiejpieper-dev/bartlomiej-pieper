export const content = {
  header: {
    cvLabel: "Download CV ↓",
    cvAriaLabel: "Download CV",
    cvHref: "/CV_Bartlomiej_Pieper.pdf",
  },
  hero: {
    name: "bartłomiej pieper",
    tagline: "senior .net developer · ai",
    bio: "Senior backend engineer with a background in mathematics and finance,\ndesigning and building scalable .NET systems.",
  },
  about: {
    heading: "> about",
    paragraphs: [
      ["Senior .NET/C#/F# Developer with experience in fintech, banking, and cybersecurity."],
      [
        "My background is rooted in mathematics (BSc, ",
        { text: "University of Warsaw", href: "https://en.uw.edu.pl/" },
        "). I started my career in financial reporting and risk modeling at ",
        { text: "Deutsche Bank", href: "https://www.db.com/" },
        ", ",
        { text: "PKO BP", href: "https://www.pkobp.pl/" },
        ", and ",
        { text: "BPH", href: "https://www.bph.pl/" },
        ", before making the jump from SQL to C#/.NET as a Quant Team Lead at ",
        { text: "WealthArc", href: "https://www.wealtharc.com/" },
        ".",
      ],
      [
        "Most recently, I helped build an institutional FX platform at ",
        { text: "Citi", href: "https://www.citi.com/" },
        ", supporting currency accounts, FX conversions, and quoting workflows across backend services and React UI.",
      ],
      [
        "Fun fact: I secured ",
        { text: "15th place in the Polish Economic Olympiad (2009)", href: "https://owe.pte.pl/upload/files/uczestnicy/laureaci/xxii-owe-laureaci.pdf" },
        ". It's an old metric, but I still enjoy the intersection where math meets markets.",
      ],
    ],
  },
  experience: {
    heading: "> experience",
    items: [
      {
        period: "2024.10 — 2026.03",
        title: ".NET/C# Developer",
        company: "Citi",
        url: "https://www.citi.com/",
        description:
          "Designed and implemented an FX processing layer integrating transaction data from multiple sources and routing it to accounting, downstream systems, and reporting.\nBuilt an institutional FX platform supporting currency accounts, FX conversions, and quoting workflows across backend services and React UI.",
        tags: ["c#", "react", "sql server", "microservices", "github copilot"],
      },
      {
        period: "2021.01 — 2024.09",
        title: ".NET/F#/C# Developer",
        company: "CyberVadis / EcoVadis",
        url: "https://cybervadis.com/",
        description:
          "Designed and built a cybersecurity web application in a microservices architecture.\nKey projects included Screening, Certificates, and Document Management.",
        tags: [
          "f#",
          "c#",
          "angular",
          "sql server",
          "azure",
          "ddd",
          "microservices",
        ],
      },
      {
        period: "2016.12 — 2020.12",
        title: "Quant Team Lead → .NET/C# Developer",
        company: "WealthArc",
        url: "https://www.wealtharc.com/",
        description:
          "Led the quant team, then built core features for a wealth-management cloud platform.\nKey projects included Portfolio Opening/Closing, Consolidation, Rebalancing, Retrocession Fees, High Water Marks, and Time Weighted Return.",
        tags: [
          "c#",
          "sql server",
          "azure",
          "mvc",
          "entity framework",
          "linq",
        ],
      },
      {
        period: "2013 — 2016",
        title: "Analyst",
        company: "Bank BPH · Deutsche Bank · PKO BP",
        url: "https://www.bph.pl/",
        description:
          "Built credit-risk models and financial reporting solutions.\nAutomated reporting processes and supported audit and risk-management teams in banking operations.",
        tags: ["sql", "vba"],
      },
    ],
  },
  techStack: {
    heading: "> stack",
    items: [
      "c#",
      "f#",
      "asp.net",
      "sql server",
      "react",
      "typescript",
      "microservices",
      "ddd",
      "solid",
      "rest apis",
      "docker",
      "git",
      "ci/cd",
      "azure service bus",
      "azure functions",
      "llms",
      "rag",
      "ai agents",
      "codex",
    ],
  },
  education: {
    heading: "> education",
    items: [
      {
        institution: "Polish-Japanese Academy of Information Technology",
        degree: "Computer Science, Engineer's degree",
        period: "2016 — 2021",
        url: "https://pja.edu.pl/",
      },
      {
        institution: "University of Warsaw",
        degree: "Mathematics, Bachelor's degree",
        period: "2009 — 2014",
        url: "https://www.mimuw.edu.pl/pl/",
      },
      {
        institution: "University of Warsaw",
        degree: "IT and Econometrics, Bachelor's degree",
        period: "2009 — 2013",
        url: "https://www.wne.uw.edu.pl/",
      },
    ],
  },

  certifications: {
    heading: "> certifications",
    items: [
      { name: "Agents Reloaded", code: "AI_DEVS 3", url: "https://credsverse.com/credentials/66f47e7a-c7d5-43f3-9e9f-9a1d3d4dc7fa" },
      { name: "AI Advanced ML/DL", code: "SDA", url: "https://app.diplomasafe.com/pl-PL/diploma/d55e7a6d48b8803406179acf0e2a1e51f31af1c95" },
      { name: "Microsoft Certified: Data Scientist Associate", code: "DP-100", url: "https://learn.microsoft.com/en-gb/users/bartomiejpepper-9870/credentials/695f33e7369055db?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
      { name: "Microsoft Certified: Azure AI Fundamentals", code: "", url: "https://learn.microsoft.com/en-us/users/bartomiejpepper-9870/credentials/ff0f97b23698481a?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
      { name: "Microsoft Certified: Azure Fundamentals", code: "AZ-900", url: "https://www.credly.com/badges/f83fe6df-dc91-4a7e-a3ba-b168d25d40c9/linked_in_profile" },
    ],
  },
  contact: {
    links: [
      {
        label: "linkedin",
        href: "https://linkedin.com/in/bartlomiej-pieper",
      },
      {
        label: "email",
        href: "mailto:bartlomiejpieper@gmail.com",
      },
      {
        label: "github",
        href: "https://github.com/bartlomiejpieper-dev/",
      },
    ],
  },
  nav: {
    about: "about",
    experience: "experience",
    stack: "stack",
    education: "education",
    certifications: "certifications",
  },
  footer: {
    text: "© 2026 bp · built with react + tailwind + shadcn/ui",
  },
} as const;
