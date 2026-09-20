import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeLeftItem } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/content";

const { certifications } = content;

const CertificationCode = ({ code }: { code?: string }) => {
  if (!code) return null;

  return (
    <span className="text-muted-foreground whitespace-nowrap">{code}: </span>
  );
};

const CertificationLink = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-start gap-1 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
  >
    {children}

    <ArrowUpRight
      aria-hidden="true"
      size={12}
      className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />

    <span className="sr-only">(opens in new tab)</span>
  </a>
);

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col gap-4 scroll-mt-20"
      aria-labelledby="certifications-heading"
    >
      <h2
        id="certifications-heading"
        className="text-headline-lg border-b border-primary/30 pb-2"
      >
        {certifications.heading}
      </h2>

      <Card>
        <CardContent>
          <motion.ul
            className="flex flex-col gap-2"
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {certifications.items.map((cert) => {
              const label = (
                <>
                  <CertificationCode code={cert.code} />
                  <span>{cert.name}</span>
                </>
              );

              return (
                <motion.li
                  key={cert.name}
                  className="flex items-start gap-2 text-sm"
                  variants={fadeLeftItem}
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 bg-primary"
                  />

                  {cert.url ? (
                    <CertificationLink url={cert.url}>{label}</CertificationLink>
                  ) : (
                    <span>{label}</span>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </CardContent>
      </Card>
    </section>
  );
};