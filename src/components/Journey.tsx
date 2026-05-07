import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  { year: "2022", title: "Started the Journey", text: "Dove into programming, web development and discovered a love for building." },
  { year: "2023", title: "Full Stack Developer", text: "Shipped multiple real-world apps with React, Node.js & Flutter." },
  { year: "2024", title: "AI Researcher", text: "Published research in Springer (DACS 2024). Explored GNNs, VAEs and ML in healthcare." },
  { year: "2024", title: "Open Source Contributor", text: "Top 35 SWOC, Ranked 36 in GSSoC '25 and active across global communities." },
  { year: "2025", title: "Building & Leading", text: "Technical leadership, hackathon finalist (NASA Space Apps), backend & scalable systems." },
];

export function Journey() {
  return (
    <Section id="journey" eyebrow="Experience" title="My Journey" subtitle="From first commit to research publications — a timeline of growth.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
          >
            <div className={`absolute top-2 h-3 w-3 rounded-full bg-primary glow animate-pulse-glow ${i % 2 === 0 ? "left-3 md:left-auto md:-right-1.5" : "left-3 md:-left-1.5"}`} />
            <div className="rounded-2xl glass p-5 neon-border">
              <div className="font-mono text-xs uppercase tracking-wider text-primary">{it.year}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
