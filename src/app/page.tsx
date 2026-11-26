import Network from "@/components/Network";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import { site, projects } from "@/data/site";

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <main>
      <div className="hero" id="top">
        <Network />
        <div className="wrap">
          <h1>{site.name}</h1>
          <div className="role">{site.role}</div>
          <p>{site.tagline}</p>
          <div className="btns">
            <a className="btn pri" href="#work">View my work</a>
            {site.resume ? <a className="btn" href={site.resume} target="_blank" rel="noopener noreferrer">Résumé</a> : <a className="btn" href="#contact">Get in touch</a>}
          </div>
        </div>
      </div>

      <About />

      <Experience />

      <Skills />

      <section id="work"><div className="wrap">
        <h2>Selected work</h2>
        {featured.length ? (
          <div className="projects">{featured.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
        ) : (
          <div className="empty">Add your projects in src/data/site.ts. Three is a good number to start with.</div>
        )}
        {projects.length > 3 && <p style={{ marginTop: 24 }}><a className="btn" href="/work">View all work</a></p>}
      </div></section>

      <Certificates />

      <Faq />

      <Contact />
    </main>
  );
}