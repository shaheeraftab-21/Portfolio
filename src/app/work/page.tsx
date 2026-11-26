import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const metadata = { title: "All work — Shaheer Aftab" };

export default function Work() {
  return (
    <main><section><div className="wrap">
      <h2>All work</h2>
      {projects.length ? <div className="projects">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div> : <div className="empty">No projects yet. Add them in src/data/site.ts.</div>}
    </div></section></main>
  );
}
