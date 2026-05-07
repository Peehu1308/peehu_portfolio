import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    school: "Bennett University",
    degree: "B.Tech",
    period: "September 2023 — May 2027",
    detail: "CGPA: 9.22",
  },
  {
    school: "Basava International School",
    degree: "Schooling",
    period: "April 2008 — May 2022",
    detail: "Foundation in science & mathematics",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education" subtitle="Where I've studied and grown.">
      <div className="grid gap-6 md:grid-cols-2">
        {edu.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 neon-border glow-hover"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-50 transition group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{e.school}</h3>
                <div className="mt-0.5 font-mono text-xs uppercase tracking-wider text-primary">{e.degree}</div>
                <div className="text-xs text-muted-foreground">{e.period}</div>
                <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
