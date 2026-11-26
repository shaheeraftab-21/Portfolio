import "./ProjectCard.css";
import type { Project } from "@/data/site";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
  </svg>
);

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="pc">
      <div className="pc-text">
        <div className="pc-icons">
          {p.github && <a href={p.github} rel="noopener" aria-label={`${p.title} on GitHub`}><GithubIcon /></a>}
          {p.demo && <a href={p.demo} rel="noopener" aria-label={`${p.title} live demo`}><LinkIcon /></a>}
        </div>
        <div className="pc-kind">{p.category}</div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <ul className="pc-stack">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
      <div className="pc-device" aria-hidden={!p.image}>
        <div className="pc-lid">
          <div className="pc-screen">
            {p.image ? <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" /> : <div className="pc-ph"><span>{p.title}</span><small>Screenshot coming soon</small></div>}
          </div>
        </div>
        <div className="pc-base" />
      </div>
    </article>
  );
}
