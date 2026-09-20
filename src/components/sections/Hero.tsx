import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import { content } from "@/content";

const { hero } = content;

export const Hero = () => {
  return (
    <section className="flex flex-col">
      <motion.div variants={staggerContainer(0.08, 0.15)} initial="hidden" animate="show">
        <motion.h1 variants={fadeUpItem} className="text-primary text-headline-lg lg:text-headline-xl">{hero.name}</motion.h1>
        <motion.p variants={fadeUpItem} className="text-body-lg text-muted-foreground mt-1">
          {hero.tagline}
        </motion.p>
        <motion.p variants={fadeUpItem} className="whitespace-pre-line leading-relaxed mt-4">
          {hero.bio}
        </motion.p>
      </motion.div>
    </section>
  );
};
