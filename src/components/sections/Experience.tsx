import { content } from "@/content";
import { EntryCard } from "@/components/shared/EntryCard";

const { experience } = content;

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-headline-lg border-b border-primary/30 pb-2">
        {experience.heading}
      </h2>

      <div className="flex flex-col gap-6 mt-6">
        {experience.items.map((item, index) => (
          <EntryCard
            key={item.company}
            variant="experience"
            index={index}
            title={item.title}
            organization={item.company}
            period={item.period}
            description={item.description}
            tags={item.tags}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
