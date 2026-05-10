import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Frontend Intern",
    company: "Home First Finance Company",
    location: "Mumbai",
    period: "Mar 2026 — Present",
    bullets: [
      "Engineered a high-performance internal broadcast system with React.js & Next.js for real-time org-wide communication.",
      "Designed a modular component architecture with Tailwind CSS, improving UI consistency and dev velocity.",
      "Implemented efficient API integration & state management, optimizing data flow and reducing latency.",
      "Improved performance via code-splitting, lazy loading and rendering optimizations across devices.",
      "Collaborated in Agile sprints to ship production-grade features.",
    ],
  },
  {
    role: "Software Developer",
    company: "Voxvertex",
    location: "Remote",
    period: "September 2025 — February 2026",
    bullets: [
      "Built scalable full-stack features using MERN, Next.js and React.js, ensuring high performance and reliability.",
      "Designed responsive, intuitive UIs with Tailwind CSS, improving accessibility and user engagement.",
      "Integrated secure REST APIs and optimized data flow & rendering, reducing load times by up to 40%.",
      "Followed Agile methodologies and CI/CD pipelines to deliver clean, maintainable, production-ready code.",
      "Collaborated cross-functionally to ship user-centered products, improving dev efficiency by ~20%.",
    ],
  },
  
  {
    role: "Research Intern",
    company: "Independent Research",
    location: "Remote",
    period: "Summer 2024",
    bullets: [
      "Conducted research on data-driven cybercrime awareness & mitigation, contributing to a Springer-published paper (DACS 2024, IIM Bodh Gaya).",
      "Worked on AI/ML experimentation, dataset analysis and model evaluation.",
      "Authored technical write-ups, literature reviews and reproducible research notebooks.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Work" title="Experience" subtitle="Real-world engineering across product, finance and developer-tools teams.">
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((j, i) => (
          <motion.div
            key={j.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 neon-border glow-hover"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-50 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold">{j.role}</h3>
                  <div className="mt-0.5 font-mono text-xs uppercase tracking-wider text-primary">
                    {j.company} · {j.location}
                  </div>
                  <div className="text-xs text-muted-foreground">{j.period}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {j.bullets.map(b => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary shadow-[0_0_8px_oklch(0.65_0.28_305)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
