import "./About.css";

// ---- Edit your About content here ----
const PHOTO = "/images/profile_pic.jpeg";
const HEADING = "I turn ideas into software that works.";
const BADGE = "Lahore, PK · Available";
const PILLS = ["React", "Node.js", "PHP", "Python", "Java", "C++", "MySQL", "PostgreSQL", "Tailwind CSS", "Bootstrap 5"];
// --------------------------------------

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="ab">
          <div className="ab-photo">
            {PHOTO ? <img src={PHOTO} alt="Portrait of Shaheer Aftab" /> : <div className="ab-ph">SA</div>}
            <span className="ab-badge"><i /> {BADGE}</span>
          </div>
          <div className="ab-text">
            <h2>{HEADING}</h2>
            <p>I’m Shaheer, a software engineering student at COMSATS University Islamabad (Lahore Campus), now in my 5th semester. I enjoy building complete web applications, from the database and backend to the interface people actually use.</p>
            <p>During my internship at <strong>DHA Lahore</strong> I built a role-based document management portal to digitize land and corporate records. Alongside it I’ve built an AI finance dashboard, a route planner based on Dijkstra’s algorithm, and a React weather app.</p>
            <ul className="ab-pills">{PILLS.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
