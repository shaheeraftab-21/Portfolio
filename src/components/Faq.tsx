import { site } from "@/data/site";

// ---- Edit your questions and answers here ----
const FAQ = [
  { q: "What do you work with?", a: "Mostly full-stack web development: React and Node.js, PHP and MySQL (the DHA portal), and Python for data and machine learning projects like FinanceIQ." },
  { q: "Are you open to internships or roles?", a: `Yes. I’m a 5th-semester Software Engineering student and I’m open to internships, software engineering roles and collaborations. The quickest way to reach me is email at ${site.email}.` },
  { q: "What did you build at DHA Lahore?", a: "During my internship I built the DHA Document Management Portal: a role-based system (Admin, Operator, Validator) to digitize land and corporate records, with a scan, validate and approve pipeline, audit logging and a Chart.js analytics dashboard." },
  { q: "Do you work in teams?", a: "Yes. FinanceIQ and the Lahore Route Planner were group projects with classmates, and I credit my teammates on each one." },
  { q: "How can I contact you?", a: "Use the Hire me button at the top, email me, or message me on LinkedIn. My résumé is linked in the hero section." },
];
// ----------------------------------------------

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-tag">FAQ</div>
          <h2>Questions, <span className="grad">answered.</span></h2>
        </div>
        <div className="faq">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
