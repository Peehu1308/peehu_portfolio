import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Code2, GitBranch, Smartphone, Microscope } from "lucide-react";

const cards = [
  { icon: Brain, title: "AI & ML Enthusiast", text: "Researching deep learning, GNNs and generative models." },
  { icon: Smartphone, title: "Flutter Developer", text: "Crafting beautiful, performant cross-platform apps." },
  { icon: Code2, title: "Web Developer", text: "Building modern full-stack experiences with React & Next.js." },
  { icon: GitBranch, title: "Open Source", text: "Active contributor across communities & global programs." },
  { icon: Microscope, title: "Research Mindset", text: "Curiosity-driven, with published work in AI & cybersecurity." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A glimpse into who I am"
      subtitle="Developer, researcher, and lifelong tinkerer — exploring the edges of AI, design, and scalable systems."
    >
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
