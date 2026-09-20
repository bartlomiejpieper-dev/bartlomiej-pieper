import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import { content } from "@/content";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
} as const;

export const Contact = () => {
  const { links } = content.contact;

  return (
    <section id="contact">
      <motion.ul
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center gap-3 mt-4"
        aria-label="Social media"
      >
        {links.map((link) => {
          const Icon = iconMap[link.label as keyof typeof iconMap];

          return (
            <motion.li key={link.label} variants={fadeUpItem}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${link.label} (opens in a new tab)`}
                className="flex items-center gap-2 px-3 py-1.5 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 font-mono text-sm"
              >
                <Icon size={15} aria-hidden="true" />
                {link.label}
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};
