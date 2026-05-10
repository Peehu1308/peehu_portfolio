import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Crafted with <Coffee className="h-3.5 w-3.5 text-primary" /> by <span className="text-gradient font-semibold">Peehu Mishra</span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { i: Github, h: "https://github.com/Peehu1308" },
            { i: Linkedin, h: "https://www.linkedin.com/in/peehu-mishra/" },
            { i: Mail, h: "mailto:mpeehu3@gmail.com" },
          ].map((s, i) => (
            <a key={i} href={s.h} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-primary/20 hover:text-primary glow-hover">
              <s.i className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
