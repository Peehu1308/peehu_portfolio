import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Profiles } from "@/components/Profiles";
import { Achievements } from "@/components/Achievements";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peehu Mishra — AI Researcher & Full Stack Developer" },
      { name: "description", content: "Portfolio of Peehu Mishra — AI researcher, full stack developer and open source contributor. Building intelligent systems and beautiful products." },
      { property: "og:title", content: "Peehu Mishra — AI Researcher & Full Stack Developer" },
      { property: "og:description", content: "AI · Flutter · Web · Open Source. Research published in Springer. NASA Space Apps Top 15 finalist." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Profiles />
        <Achievements />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
