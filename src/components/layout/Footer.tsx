import { content } from "@/content";

const { footer } = content;

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap items-center justify-center border-t border-border h-16 font-mono text-label-sm text-muted-foreground px-6">
        {footer.text}
      </div>
    </footer>
  );
};
