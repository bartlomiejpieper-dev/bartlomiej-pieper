import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EntryCardProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
  tags?: readonly string[];
  url?: string;
  index?: number;
  variant?: "default" | "experience";
}

export function EntryCard({
  title,
  organization: company,
  period,
  description,
  tags,
  url,
  index = 0,
  variant = "default",
}: EntryCardProps) {
  const isExperience = variant === "experience";
  const organization = (
    <span className="text-muted-foreground inline-flex items-center gap-1 font-medium">
      {company}
      {url && (
        <ArrowUpRight
          aria-hidden="true"
          size={14}
          className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </span>
  );

  const card = (
    <Card className={cn("py-6 transition-colors hover:ring-primary/50", isExperience && "gap-5")}>
      {isExperience ? (
        <CardHeader className="flex flex-col gap-3 px-5 sm:px-6">
          <span className="text-muted-foreground text-xs tabular-nums tracking-wide">
            {period}
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold leading-snug">{title}</h3>
            {organization}
          </div>
        </CardHeader>
      ) : (
        <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold">{title}</span>
          <span className="text-muted-foreground shrink-0 whitespace-nowrap text-sm">
            {period}
          </span>
        </CardHeader>
      )}

      <CardContent className={cn("flex flex-col gap-4", isExperience && "gap-5 px-5 sm:px-6")}>
        {!isExperience && organization}

        {description && (
          <div className="flex flex-col gap-3 text-muted-foreground text-sm leading-relaxed">
            {description.split("\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className={cn("flex flex-wrap gap-2", isExperience && "border-t border-border/60 pt-4")}>
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const inner = url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} at ${company} (opens in new tab)`}
      className="group block"
    >
      {card}
    </a>
  ) : card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ x: 4 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
    >
      {inner}
    </motion.div>
  );
}
