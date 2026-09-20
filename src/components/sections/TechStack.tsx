import { Badge } from "@/components/ui/badge";
import { content } from "@/content";

const { techStack } = content;

export const TechStack = () => {
  return (
    <section id="stack" className="scroll-mt-20">
      <h2 className="text-headline-lg border-b border-primary/30 pb-2">{techStack.heading}</h2>

      <div className="flex flex-wrap gap-4 mt-4 max-w-xl">
        {techStack.items.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
};
