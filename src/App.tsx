// SVG Icons as components
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </svg>
)

// Portfolio data
const experiences = [
  {
    title: 'Senior .NET Developer',
    company: 'Citi',
    dates: '2022 - Present',
    achievements: [
      'Led development of critical financial reporting systems processing millions of transactions daily',
      'Implemented microservices architecture reducing system latency by 40%',
      'Mentored junior developers and conducted code reviews for team of 8',
    ],
  },
  {
    title: '.NET Developer',
    company: 'Pragmile',
    dates: '2020 - 2022',
    achievements: [
      'Built scalable backend solutions for fintech clients using .NET Core and Azure',
      'Developed RESTful APIs consumed by mobile and web applications',
      'Integrated third-party payment providers and banking APIs',
    ],
  },
  {
    title: 'Software Developer',
    company: 'WealthArc',
    dates: '2018 - 2020',
    achievements: [
      'Designed and implemented wealth management platform features',
      'Worked with SQL Server optimization for large dataset queries',
      'Collaborated with cross-functional teams in Agile environment',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Deutsche Bank / PKO BP',
    dates: '2016 - 2018',
    achievements: [
      'Developed internal banking tools and automation scripts',
      'Maintained legacy systems while contributing to modernization efforts',
      'Gained foundational experience in enterprise software development',
    ],
  },
]

const techStack = {
  backend: ['.NET', 'C#', 'F#', 'SQL Server', 'Entity Framework'],
  cloud: ['Azure', 'Azure Functions', 'AI Integrations', 'Docker'],
  frontend: ['React', 'TypeScript', 'Tailwind CSS'],
}

const certifications = [
  'Azure Fundamentals (AZ-900)',
  'Azure AI Fundamentals (AI-900)',
  'Azure Data Scientist Associate (DP-100)',
  'AI_DEVS 3',
]

function App() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Bartlomiej Pieper
          </h1>
          <p className="mt-3 text-xl font-medium text-accent">
            .NET Developer · Finance & AI
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            8+ years in fintech (Citi, Deutsche Bank, Nordea) — building robust backend systems, 
            currently transitioning towards AI.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://linkedin.com/in/bartlomiej-pieper"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:contact@bartlomiejpieper.dev"
              className="inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted">
            About
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            I specialize in building high-performance backend systems for the financial sector. 
            My experience spans investment banking, wealth management, and fintech startups, 
            where I have delivered solutions that handle critical financial data at scale. 
            Currently exploring the intersection of traditional software engineering and AI.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-muted">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted">{exp.dates}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-24">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-muted">
            Tech Stack
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-medium text-foreground">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-foreground/5 px-3 py-1.5 text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium text-foreground">Cloud & AI</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.cloud.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-foreground/5 px-3 py-1.5 text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium text-foreground">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-foreground/5 px-3 py-1.5 text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-24">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-muted">
            Certifications
          </h2>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3 text-foreground">
                <ExternalLinkIcon className="h-4 w-4 text-accent" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact / Footer */}
        <footer className="border-t border-foreground/10 pt-12">
          <div className="flex items-center justify-center gap-8">
            <a
              href="mailto:contact@bartlomiejpieper.dev"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <MailIcon className="h-5 w-5" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/bartlomiej-pieper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bartlomiejpieper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} Bartlomiej Pieper
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
