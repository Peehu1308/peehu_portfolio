import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Code2, Layers, Cpu, Wrench, Sparkles, Database,
} from "lucide-react";

type Group = {
  title: string;
  icon: typeof Code2;
  accent: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Languages",
    icon: Code2,
    accent: "from-fuchsia-500/30 to-violet-700/30",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Dart", "Java", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    accent: "from-violet-500/30 to-indigo-700/30",
    items: ["React", "Next.js", "Flutter", "Three.js", "FastAPI", "Express", "TensorFlow", "Keras"],
  },
  {
    title: "AI / ML",
    icon: Cpu,
    accent: "from-purple-500/30 to-pink-600/30",
    items: ["Deep Learning", "Computer Vision", "GNNs", "NLP", "Model Training", "Research"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    accent: "from-indigo-500/30 to-fuchsia-700/30",
    items: ["Node.js", "REST APIs", "MongoDB", "Supabase", "PostgreSQL", "Realtime"],
  },
  {
    title: "Mobile & Web",
    icon: Sparkles,
    accent: "from-rose-500/30 to-violet-700/30",
    items: ["Flutter", "Cross-Platform", "PWA", "Responsive UI", "Animations", "WebGL"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    accent: "from-violet-600/30 to-purple-900/30",
    items: ["Git & GitHub", "Open Source", "Agile", "CI/CD", "Vite", "Vercel"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills & Technologies"
      subtitle="A curated stack across languages, frameworks, AI and the modern web — organized the way I actually use them."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 neon-border glow-hover"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${g.accent} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it, idx) => (
                    <motion.span
                      key={it}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.03 }}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary/90 transition-colors hover:bg-primary/20 hover:text-primary"
                    >
                      {it}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
