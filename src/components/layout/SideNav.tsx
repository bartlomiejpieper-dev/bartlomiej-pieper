import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { content } from "@/content";

const sections = ["about", "experience", "stack", "education", "certifications"] as const;
type SectionId = (typeof sections)[number];

export const SideNav = () => {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 8;
      if (atBottom) {
        setActive("certifications");
        return;
      }

      const educationEl = document.getElementById("education");
      if (educationEl) {
        const { top, bottom } = educationEl.getBoundingClientRect();
        const center = window.innerHeight / 2;
        if (top < center && bottom > center) setActive("education");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="hidden lg:flex flex-col gap-3 text-headline-md"
    >
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={cn(
            "group flex items-center gap-3 font-mono transition-all duration-200 hover:translate-x-0.5",
            active === id
              ? "text-primary font-bold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span
            className={cn(
              "inline-block h-px bg-current transition-all duration-200",
              active === id ? "w-8" : "w-4 group-hover:w-8"
            )}
          />
          {content.nav[id]}
        </a>
      ))}
    </nav>
  );
};
