import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Rocket, Star, Trophy, BookOpen, Zap } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Published Research",
    sub: "Springer · DACS 2024 — IIM Bodh Gaya",
    text: "Data-Driven Insights for Cybercrime Awareness & Mitigation",
  },
  {
    icon: Trophy,
    title: "Top 35 — SWOC",
    sub: "Social Winter of Code",
    text: "Recognized for impactful open-source contributions.",
  },
  {
    icon: Star,
    title: "Ranked 36th — GSSoC '25",
    sub: "GirlScript Summer of Code",
    text: "Consistent and high-quality open-source contributions.",
  },
  {
    icon: Rocket,
    title: "Top 15 Finalist",
    sub: "NASA Space Apps Hackathon — Regional Round",
    text: "Selected among the top finalists for innovative space-tech solutions.",
  },
];

const more = [
  { icon: Award, text: "Active open source contributor across multiple programs" },
  { icon: Zap, text: "Hackathon participant with multiple finals & wins" },
  { icon: BookOpen, text: "Research work in AI & healthcare (tumor detection, GNNs)" },
  { icon: Rocket, text: "Technical leadership across student & dev communities" },
  { icon: Star, text: "Built multiple production-ready real-world applications" },
  { icon: Trophy, text: "Active learner in backend, AI & scalable architecture" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements" subtitle="Milestones from research, hackathons and the open-source community.">
      <div className="grid gap-5 md:grid-cols-2">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 neon-border glow-hover"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl opacity-60 transition group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow">
                <h.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{h.title}</h3>
                <div className="mt-0.5 font-mono text-xs uppercase tracking-wider text-primary">{h.sub}</div>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {more.map((m, i) => (
          <motion.div
            key={m.text}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-xl glass px-4 py-3"
          >
            <m.icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{m.text}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
