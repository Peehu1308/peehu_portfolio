import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "./Section";
import { Github, Code, Trophy, Linkedin, Award } from "lucide-react";

const profiles = [
  { name: "GitHub", username: "@Peehu1308", stat: 120, label: "Contributions", icon: Github, url: "https://github.com/Peehu1308" },
  { name: "LeetCode", username: "@peehu", stat: 250, label: "Problems Solved", icon: Code, url: "#" },
  { name: "Codeforces", username: "@peehu", stat: 1400, label: "Rating", icon: Trophy, url: "#" },
  { name: "LinkedIn", username: "Peehu Mishra", stat: 2000, label: "Network", icon: Linkedin, url: "#" },
  { name: "HackerRank", username: "@peehu", stat: 5, label: "Stars", icon: Award, url: "#" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(v, to, { duration: 1.6, ease: "easeOut" });
    const u = v.on("change", val => { if (ref.current) ref.current.textContent = Math.round(val).toLocaleString(); });
    return () => { c.stop(); u(); };
  }, [inView, to, v]);

  return <span ref={ref}>0</span>;
}

export function Profiles() {
  return (
    <Section id="profiles" eyebrow="Coding" title="Coding Profiles" subtitle="Where I learn, compete, and ship in public.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 neon-border glow-hover"
          >
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/30" />
            <div className="relative flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display font-semibold">{p.name}</div>
                <div className="font-mono text-xs text-muted-foreground">{p.username}</div>
              </div>
            </div>
            <div className="relative mt-6 flex items-baseline gap-2">
              <div className="font-display text-3xl font-bold text-gradient">
                <Counter to={p.stat} />+
              </div>
              <div className="text-xs text-muted-foreground">{p.label}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
