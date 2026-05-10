import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { MouseEvent, useState } from "react";
import { Section } from "./Section";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { MouseEvent, useState } from "react";

type Category = "All" | "Web" | "Mobile" | "AI / ML" | "Open Source";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  stack: string[];
  description: string;
  bullets: string[];
  github?: string;
  demo?: string;
  gradient: string;
};

const projects: Project[] = [
  
  
  {
    title: "Askca",
    category: "Web",
    stack: ["Next.js", "React", "Tailwind"],
    description: "A modern web platform I designed and built end-to-end — clean UX, fast performance, and a polished modern aesthetic.",
    bullets: [
      "Designed responsive UI with smooth motion",
      "Optimized for performance & SEO",
      "Component-driven architecture",
    ],
    demo: "https://askca.vercel.app",
    gradient: "from-fuchsia-500/30 to-violet-700/30",
  },
  {
    title: "Realtime Chat App",
    category: "Web",
    stack: ["React", "Node.js", "Socket.IO", "Express"],
    description: "Full-stack realtime messaging app powered by Socket.IO with rooms, typing indicators and live presence.",
    bullets: [
      "Bidirectional Socket.IO events with rooms & presence",
      "Express + Node backend with REST + WebSockets",
      "Optimistic UI, typing indicators & message history",
    ],
    github: "https://github.com/Peehu1308",
    gradient: "from-violet-500/30 to-indigo-700/30",
  },
  {
    title: "3D Web Experiences",
    category: "Web",
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
    title: "Cultural Education Platform",
    category: "Web",
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
    title: "Pixel",
    category: "Mobile",
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
    category: "AI / ML",
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
    title: "Askca",
    category: "Web",
    stack: ["Next.js", "React", "Tailwind"],
    description: "A modern web platform I designed and built end-to-end — clean UX, fast performance, and a polished modern aesthetic.",
    bullets: [
      "Designed responsive UI with smooth motion",
      "Optimized for performance & SEO",
      "Component-driven architecture",
    ],
    demo: "https://www.askcafinance.com",
    gradient: "from-fuchsia-500/30 to-violet-700/30",
  },
  {
    title: "Sphere",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Supabase", "AWS S3"],
    description: "Creative-first social platform for independent artists combining music discovery, mood boards, and long-form writing.",
    bullets: [
      "Independent music streaming with mood & genre discovery",
      "Visual mood board creation for emotional expression",
      "Distraction-free blog writing & reading ecosystem",
    ],
    github: "https://github.com/Peehu1308/Sphere_Updated",
    gradient: "from-cyan-500/30 to-blue-700/30",
  },
  {
    title: "AI Brain Tumor Detection",
    category: "AI / ML",
    stack: ["Python", "ML", "MRI Analysis"],
    description: "AI-powered healthcare research project for detecting brain tumors from MRI scans.",
    bullets: [
      "Trained ML models on MRI datasets",
      "Focused on early-stage tumor detection",
      "Robust preprocessing & classification pipelines",
    ],
    github: "https://github.com/Peehu1308/Cancer-Detection-CNN-",
    gradient: "from-purple-500/30 to-pink-600/30",
  },
  {
    title: "Realtime Chat App",
    category: "Web",
    stack: ["React", "Node.js", "Socket.IO", "Express"],
    description: "Full-stack realtime messaging app powered by Socket.IO with rooms, typing indicators and live presence.",
    bullets: [
      "Bidirectional Socket.IO events with rooms & presence",
      "Express + Node backend with REST + WebSockets",
      "Optimistic UI, typing indicators & message history",
    ],
    github: "https://github.com/Peehu1308/Chat-Application-v1",
    gradient: "from-violet-500/30 to-indigo-700/30",
  },
  {
    title: "3D Web Experiences",
    category: "Web",
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
    title: "Cultural Education Platform",
    category: "Web",
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
    title: "Open Source & Research Work",
    category: "Open Source",
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

const categories: Category[] = ["All", "Web", "Mobile", "AI / ML", "Open Source"];

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

  const primaryHref = p.demo || p.github;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: i * 0.05 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-2xl glass p-6 neon-border"
      >
        {primaryHref && (
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${p.title}`}
            className="absolute inset-0 z-10"
          />
        )}
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
            {primaryHref && (
              <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            )}
          </div>
          <span className="mt-1 inline-block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            {p.category}
          </span>
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
          <div className="relative z-20 mt-6 flex flex-wrap gap-2">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-primary/20">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-semibold text-primary-foreground glow-hover">
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      subtitle="A curated mix of products, research and experiments — across AI, web, mobile and open source. Click any card to dive in."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map(c => {
          const isActive = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent glow"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
