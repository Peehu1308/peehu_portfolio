import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const roles = ["AI Researcher", "Full Stack Developer", "Open Source Contributor"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1300);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-1 bg-primary align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-gradient">Peehu Mishra</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-2xl"
        >
          <Typer />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground/80"
        >
          Crafting intelligent systems, beautiful interfaces, and scalable architectures —
          at the intersection of AI research and modern product engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground glow animate-pulse-glow"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold neon-border glow-hover"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1mGCga7versokU7SPSi7nCIwNQuLMxuGD/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold neon-border glow-hover"
          >
            View Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border border-border p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
