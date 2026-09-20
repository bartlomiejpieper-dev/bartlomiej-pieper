import { content } from "@/content";

const { header } = content;

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex justify-end items-center max-w-6xl mx-auto px-6 h-16">
        
        <a
          href={header.cvHref}
          download
          aria-label={header.cvAriaLabel}
          className="font-mono text-sm border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
        >
          {header.cvLabel}
        </a>
      </div>
    </header>
  );
};
