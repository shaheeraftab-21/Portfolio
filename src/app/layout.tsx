import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { site, certificates } from "@/data/site";
import "./globals.css";
import "./extras.css";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: "Software engineer building web applications and machine learning systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>
        <header>
          <div className="wrap">
            <a href="/" className="brand">{site.name}</a>
            <nav aria-label="Sections">
              <a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#skills">Skills</a><a href="/#work">Work</a>
              {certificates.length > 0 && <a href="/#certificates">Certificates</a>}<a href="/#faq">FAQ</a><a href="/#contact">Contact</a>
            </nav>
            <a href="/#contact" className="hire">Hire me</a>
          </div>
        </header>
        {children}
        <footer><div className="wrap">© {new Date().getFullYear()} {site.name}. All rights reserved.</div></footer>
      </body>
    </html>
  );
}