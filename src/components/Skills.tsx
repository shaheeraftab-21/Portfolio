import { skills } from "@/data/site";

const ICONS = [
  <path key="a" d="M3 5h18v11H3zM8 20h8M12 16v4" />,
  <path key="b" d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />,
  <path key="c" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
  <path key="d" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />,
];

export default function Skills() {
  const groups = Object.entries(skills).filter(([, items]) => items.length);
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-tag">Skills</div>
          <h2>My <span className="grad">stack.</span></h2>
          <p>The languages, frameworks and tools I use to design, build and ship software, grouped by where they sit in a project.</p>
        </div>
        <div className="sk">
          {groups.map(([group, items], i) => {
            const half = Array(Math.ceil(12 / items.length)).fill(items).flat() as string[];
            const pills = (arr: string[], hidden?: boolean) => (
              <ul className="sk-half" aria-hidden={hidden}>
                {arr.map((s, k) => <li key={`${s}-${k}`} className={k % items.length < 3 ? "hl" : ""}>{s}</li>)}
              </ul>
            );
            return (
              <div className="sk-row" key={group}>
                <div className="sk-label">
                  <span className="sk-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[i % ICONS.length]}</svg></span>
                  <h3>{group}</h3>
                </div>
                <div className="sk-marquee">
                  <div className="sk-track" style={{ ["--dur" as string]: `${28 + i * 6}s`, animationDirection: i % 2 ? "reverse" : "normal" }}>
                    {pills(half)}{pills(half, true)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
