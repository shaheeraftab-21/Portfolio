import { site, certificates } from "@/data/site";

const initials = (s: string) => {
  const w = s.split(/\s+/).filter(Boolean);
  return (w.length > 1 ? w[0][0] + w[1][0] : s.slice(0, 2)).toUpperCase();
};
const hue = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);

export default function Certificates() {
  if (!certificates.length) return null;
  return (
    <section id="certificates">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-tag">Certifications</div>
          <h2>Proof of <span className="grad">learning.</span></h2>
          <p>Courses and certifications I’ve completed. Hover a certificate to lift it{certificates.some((c) => c.url) ? ", click to verify it" : ""}.</p>
        </div>
        <div className="cg">
          {certificates.map((c) => {
            const h = hue(c.issuer);
            const body = (
              <>
                <div className="cc-in">
                  <div className="cc-label">Certificate of completion</div>
                  <div className="cc-title">{c.title}</div>
                  <div className="cc-by">awarded to {site.name} by</div>
                  <div className="cc-issuer">{c.issuer}</div>
                  <div className="cc-seal" style={{ ["--h" as string]: h }}>
                    <span>{initials(c.issuer)}</span><i /><i />
                  </div>
                  {c.url && <div className="cc-verify">Verify ↗</div>}
                </div>
              </>
            );
            return c.url
              ? <a key={c.title} className="cc" href={c.url} rel="noopener" aria-label={`${c.title} — verify certificate`}>{body}</a>
              : <div key={c.title} className="cc">{body}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
