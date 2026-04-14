import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react'

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
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:contact@bartlomiejpieper.dev"
              className="inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              <Mail className="h-4 w-4" />
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
                <ExternalLink className="h-4 w-4 text-accent" />
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
              <Mail className="h-5 w-5" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/bartlomiej-pieper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bartlomiejpieper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" />
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
