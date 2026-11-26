"use client";
import { useState } from "react";
import { site } from "@/data/site";

const strip = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const I = (d: string) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const MAIL = "M3 6h18v12H3zM3 7l9 6 9-6";
const CODE = "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14";
const USER = "M4 4h16v16H4zM8 10v6M8 7.5v.01M12 16v-6M12 12.5c0-2.5 4-2.5 4 0V16";
const FILE = "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6";

export default function Contact() {
  const [flip, setFlip] = useState(false);
  const rows = [
    site.email && { href: `mailto:${site.email}`, icon: MAIL, text: site.email },
    site.linkedin && { href: site.linkedin, icon: USER, text: strip(site.linkedin) },
    site.github && { href: site.github, icon: CODE, text: strip(site.github) },
    site.resume && { href: site.resume, icon: FILE, text: "Download résumé" },
  ].filter(Boolean) as { href: string; icon: string; text: string }[];
  return (
    <section id="contact">
      <div className="wrap ct">
        <div className="ct-text">
          <div className="sec-tag" style={{ color: "var(--accent)" }}>Contact</div>
          <h2>Let’s build <span className="grad">together.</span></h2>
          <p>Hover or tap the card to flip it. Every line on the back is a link. I’m open to internships, software engineering roles and collaborations.</p>
          <div className="ct-btns">
            {site.email && <a className="ct-pri" href={`mailto:${site.email}`}>{I(MAIL)} Email me</a>}
            {site.resume && <a className="ct-sec" href={site.resume} target="_blank" rel="noopener noreferrer">{I(FILE)} View résumé</a>}
          </div>
        </div>
        <div className={`fc${flip ? " flip" : ""}`} onClick={() => setFlip((f) => !f)}>
          <div className="fc-inner">
            <div className="fc-face fc-front">
              <i className="fc-circle" />
              <div className="fc-top">COMSATS University · Lahore</div>
              <div>
                <div className="fc-name">{site.name}</div>
                <div className="fc-role">{site.role}</div>
              </div>
              <div className="fc-foot">{site.location} · tap to flip</div>
            </div>
            <div className="fc-face fc-back">
              <div className="fc-top">Contact</div>
              {rows.map((r) => (
                <a key={r.text} href={r.href} onClick={(e) => e.stopPropagation()} {...(r.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>{I(r.icon)} {r.text}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}