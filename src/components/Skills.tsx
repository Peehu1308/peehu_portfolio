import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "Flutter", level: 90 },
  { name: "React", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 82 },
  { name: "MongoDB", level: 80 },
  { name: "Supabase", level: 85 },
  { name: "Three.js", level: 75 },
  { name: "AI / ML", level: 88 },
  { name: "Python", level: 90 },
  { name: "C++", level: 80 },
  { name: "Git & GitHub", level: 92 },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Technologies" subtitle="A handpicked stack I use daily to ship products and explore research.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative rounded-xl glass p-5 neon-border glow-hover"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold">{s.name}</span>
              <span className="font-mono text-xs text-primary">{s.level}%</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary/50">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.04, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_12px_oklch(0.65_0.28_305)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
