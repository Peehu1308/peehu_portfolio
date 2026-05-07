import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import { MouseEvent } from "react";

type Project = {
  title: string;
  stack: string[];
  description: string;
  bullets: string[];
  github?: string;
  demo?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Pixel",
    stack: ["Flutter", "Dart", "Supabase"],
    description: "Campus-centric networking and event discovery platform designed for students.",
    bullets: [
      "Scalable cross-platform Flutter app with clean architecture",
      "Supabase auth, realtime sync & optimized queries",
      "Efficient state management and structured CRUD",
    ],
    github: "https://github.com/Peehu1308/Pixel",
    gradient: "from-fuchsia-500/30 to-violet-700/30",
  },
  {
    title: "VAE_GAT_on_highD",
    stack: ["Python", "Deep Learning", "GNN"],
    description: "Hybrid VAE + Graph Attention Network on the highD dataset for autonomous driving behavior.",
    bullets: [
      "Modeled vehicle interactions as dynamic graphs",
      "Spatial-temporal attention for trajectory understanding",
      "Optimized loss design & robust evaluation",
    ],
    github: "https://github.com/Peehu1308/VAE_GAT_on_highd",
    gradient: "from-violet-500/30 to-indigo-700/30",
  },
  {
    title: "AI Brain Tumor Detection",
    stack: ["Python", "ML", "MRI Analysis"],
    description: "AI-powered healthcare research project for detecting brain tumors from MRI scans.",
    bullets: [
      "Trained ML models on MRI datasets",
      "Focused on early-stage tumor detection",
      "Robust preprocessing & classification pipelines",
    ],
    gradient: "from-purple-500/30 to-pink-600/30",
  },
  {
    title: "Cultural Education Platform",
    stack: ["Web", "Interactive Learning", "UI/UX"],
    description: "Immersive platform blending storytelling, mythology, maps and cultural exploration.",
    bullets: [
      "Visually rich interactive learning experiences",
      "Cultural storytelling & heritage content",
      "Engagement, accessibility & modern UX",
    ],
    gradient: "from-rose-500/30 to-violet-700/30",
  },
  {
    title: "3D Web Experiences",
    stack: ["Three.js", "WebGL", "JavaScript"],
    description: "Interactive 3D web experiments and immersive browser-based visual experiences.",
    bullets: [
      "Advanced Three.js scenes with dynamic lighting",
      "Immersive visuals inspired by creative studios",
      "Performance-optimized & responsive rendering",
    ],
    gradient: "from-indigo-500/30 to-fuchsia-700/30",
  },
  {
    title: "Open Source & Research Work",
    stack: ["AI", "Backend", "Open Source"],
    description: "Research-driven & open-source contributions across AI, backend systems and modern web.",
    bullets: [
      "Collaborative dev across global communities",
      "AI research, backend & scalable architectures",
      "Continuous exploration of emerging tech",
    ],
    github: "https://github.com/Peehu1308",
    gradient: "from-violet-600/30 to-purple-900/30",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
    sx.set(e.clientX - r.left);
    sy.set(e.clientY - r.top);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: i * 0.07 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-2xl glass p-6 neon-border"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform([sx, sy], ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, oklch(0.65 0.28 305 / 0.25), transparent 60%)`
            ) as unknown as string,
          }}
        />
        <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.gradient} blur-3xl opacity-60`} />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.stack.map(s => (
              <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>
          <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground/90">
            {p.bullets.map(b => (
              <li key={b} className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary shadow-[0_0_8px_oklch(0.65_0.28_305)]" />{b}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-primary/20">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-semibold text-primary-foreground glow-hover">
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects" subtitle="A selection of products and research I've built — spanning AI, mobile, and immersive web.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </Section>
  );
}
