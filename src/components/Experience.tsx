import { experience } from "@/data/site";

export default function Experience() {
  if (!experience.length) return null;
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-tag">Experience</div>
          <h2>Where I’ve <span className="grad">worked.</span></h2>
          <p>Internships I’ve completed. Click a certificate to open it full size in a new tab.</p>
        </div>
        <div className="xp">
          {experience.map((e) => (
            <article className="xp-card" key={e.company}>
              <div className="xp-main">
                <div className="xp-kind">{e.period}{e.mode ? ` · ${e.mode}` : ""}</div>
                <h3>{e.role}</h3>
                <div className="xp-co">
                  {e.logo && <img src={e.logo} alt="" />}
                  <span>{e.company}</span>
                </div>
                <p>{e.summary}</p>
                <ul className="xp-skills">{e.skills.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              {e.certificate && (
                <a className="xp-cert" href={e.certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`${e.company} certificate (opens in a new tab)`}>
                  <img src={e.certificate.image} alt={`${e.company} certificate`} loading="lazy" />
                  <span>{e.certificate.label ?? "Certificate"} ↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}