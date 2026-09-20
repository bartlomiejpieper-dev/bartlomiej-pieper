import { motion } from "framer-motion";
import { content } from "@/content";

const { about } = content;

type Segment = (typeof about.paragraphs)[number][number];
type Paragraph = readonly Segment[];

const InlineLink = ({ href, text }: Extract<Segment, { href: string }>) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
  >
    {text}
  </a>
);

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <section id="about" className="flex flex-col gap-4 scroll-mt-20">
        <h2 className="text-headline-lg border-b border-primary/30 pb-2">
          {about.heading}
        </h2>
        {about.paragraphs.map((segments: Paragraph, i: number) => (
          <p key={i} className="text-muted-foreground">
            {segments.map((seg: Segment, j: number) =>
              typeof seg === "string" ? seg : <InlineLink key={j} {...seg} />
            )}
          </p>
        ))}
      </section>
    </motion.div>
  );
};
