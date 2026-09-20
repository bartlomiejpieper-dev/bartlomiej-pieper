import { content } from "@/content";
import { EntryCard } from "@/components/shared/EntryCard";

const { education } = content;

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-headline-lg border-b border-primary/30 pb-2">
        {education.heading}
      </h2>

      <div className="flex flex-col gap-4 mt-4">
        {education.items.map((item, index) => (
          <EntryCard
            key={`${item.institution}-${item.degree}`}
            index={index}
            title={item.degree}
            organization={item.institution}
            period={item.period}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
