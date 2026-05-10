import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "mpeehu3@gmail.com",
    href: "mailto:mpeehu3@gmail.com",
    description: "Best for formal inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Peehu1308",
    href: "https://github.com/Peehu1308",
    description: "Check out my projects & contributions",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "peehu-mishra",
    href: "https://www.linkedin.com/in/peehu-mishra/",
    description: "Let's connect professionally",
  },
];

const availability = [
  { label: "Internships", available: true },
  { label: "Freelance", available: true },
  { label: "Research Collabs", available: true },
  { label: "Full-time", available: true },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      subtitle="Open to collaborations, research, internships and freelance work. Always happy to connect."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left — availability + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          {/* Status card */}
          <div className="rounded-2xl glass neon-border p-6 relative overflow-hidden">
            <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Available for work
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities. Whether it's a quick chat or a big idea —{" "}
              <span className="text-primary font-medium">my inbox is always open.</span>
            </p>
          </div>

          {/* Availability tags */}
          <div className="rounded-2xl glass neon-border p-6">
            <p className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Open to
            </p>
            <div className="flex flex-wrap gap-2">
              {availability.map(({ label, available }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                    available
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-muted/30 border-border text-muted-foreground line-through"
                  }`}
                >
                  {available && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick email CTA */}
          <a
            href="mailto:mpeehu3@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-4 text-sm font-semibold text-primary-foreground glow-hover transition-all hover:scale-[1.02]"
          >
            Say hello <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Right — social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          {socials.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-center gap-5 rounded-2xl glass p-5 neon-border glow-hover transition-all hover:scale-[1.01]"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                  {c.label}
                </div>
                <div className="font-mono text-sm font-medium mt-0.5 truncate">{c.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.description}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}