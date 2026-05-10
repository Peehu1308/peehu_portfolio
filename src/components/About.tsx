import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Brain,
  Code2,
  GitBranch,
  Smartphone,
  Microscope,
  MapPin,
  GraduationCap,
  Rocket,
  Coffee,
  Layers,
} from "lucide-react";

const cards = [
  { icon: Brain, title: "AI & ML Enthusiast", text: "Researching deep learning, GNNs and generative models." },
  { icon: Smartphone, title: "Flutter Developer", text: "Crafting beautiful, performant cross-platform apps." },
  { icon: Code2, title: "Web Developer", text: "Building modern full-stack experiences with React & Next.js." },
  { icon: GitBranch, title: "Open Source", text: "Active contributor across communities & global programs." },
  { icon: Microscope, title: "Research Mindset", text: "Curiosity-driven, with published work in AI & cybersecurity." },
  { icon: Layers, title: "Systems Thinker", text: "Designing scalable architectures that grow with the problem." },
];

const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "1", label: "Research Paper" },
  { value: "1000+", label: "Open Source Contributions" },
  { value: "2+", label: "Years of Experience" },
];

const quickFacts = [
  { icon: MapPin, text: "Based in India" },
  { icon: GraduationCap, text: "CS Undergrad @ Bennett University" },
  { icon: Rocket, text: "Currently building something new" },
  { icon: Coffee, text: "Fueled by coffee & curiosity" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A glimpse into who I am"
      subtitle="Developer, researcher, and lifelong tinkerer — exploring the edges of AI, design, and scalable systems."
    >
      {/* Intro Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 glass rounded-2xl neon-border p-8 relative overflow-hidden"
      >
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Bio Text */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-xl font-semibold text-gradient">
              Hey, I'm Peehu 👋
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer and researcher with a love for building things that matter.
              Whether it's training neural networks, shipping Flutter apps, or architecting full-stack
              systems — I thrive at the intersection of <span className="text-primary font-medium">technology and creativity</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey started with a simple curiosity about how software works, and has since
              taken me through AI research, open source contributions, and building products used by
              real people. I believe great software is equal parts <span className="text-primary font-medium">engineering and empathy</span>.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="flex flex-col gap-3 justify-center">
            {quickFacts.map((fact, i) => (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <fact.icon className="h-4 w-4 text-primary" />
                </span>
                {fact.text}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass neon-border rounded-2xl p-5 text-center glow-hover group"
          >
            <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 neon-border glow-hover"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            <c.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}