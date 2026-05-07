import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Send, Github, Linkedin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something" subtitle="Open to collaborations, research, internships and freelance work.">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl glass p-6 neon-border"
        >
          {(["Name", "Email"] as const).map(f => (
            <div key={f}>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">{f}</label>
              <input
                required
                type={f === "Email" ? "email" : "text"}
                className="w-full rounded-lg border border-border bg-input/50 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.65_0.28_305_/_0.2)]"
              />
            </div>
          ))}
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-input/50 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.65_0.28_305_/_0.2)]"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground glow-hover"
          >
            {sent ? "Message sent ✨" : (<><Send className="h-4 w-4" /> Send Message</>)}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {[
            { i: Mail, l: "Email", v: "mpeehu3@gmail.com", h: "mailto:mpeehu3@gmail.com" },
            { i: Phone, l: "Phone", v: "+91 98912 90899", h: "tel:+919891290899" },
            { i: Github, l: "GitHub", v: "@Peehu1308", h: "https://github.com/Peehu1308" },
            { i: Linkedin, l: "LinkedIn", v: "peehu-mishra", h: "https://www.linkedin.com/in/peehu-mishra/" },
          ].map(c => (
            <a key={c.l} href={c.h} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl glass p-5 neon-border glow-hover">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground"><c.i className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.l}</div>
                <div className="font-mono text-sm">{c.v}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
