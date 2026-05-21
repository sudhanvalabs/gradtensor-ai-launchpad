import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

/*
  BEGIN REFERENCE MOCKUP — keep in sync with /Users/prabhueshwarla/Downloads/01-framework.html
  ------------------------------------------------------------------------------------------
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GradTensor — The Framework</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      :root {
        --ink: #1a1814;
        --paper: #f4efe6;
        --accent: #c8472e;
        --muted: #6b645a;
        --leader: #d4a574;
        --pro: #7a9b8c;
        --eng: #c8472e;
      }
      body { font-family: 'Fraunces', serif; background: var(--paper); color: var(--ink); padding: 56px 40px; }
      .container { max-width: 1100px; margin: 0 auto; }
      header { border-top: 4px solid var(--ink); padding-top: 24px; margin-bottom: 64px; }
      .brand { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
      h1 { font-size: clamp(40px, 6vw, 72px); font-weight: 500; line-height: 0.95; letter-spacing: -0.025em; font-style: italic; margin-bottom: 20px; }
      h1 em { font-style: normal; color: var(--accent); }
      .subtitle { font-size: 18px; color: var(--muted); max-width: 560px; line-height: 1.5; }
      .framework { display: grid; grid-template-columns: 220px 1fr; gap: 0; margin-bottom: 64px; }
      .axis-y { padding-right: 32px; border-right: 1px solid var(--ink); display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 24px; }
      .axis-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
      .axis-title { font-size: 22px; font-style: italic; font-weight: 500; line-height: 1.1; }
      .levels { display: flex; flex-direction: column; }
      .level { display: grid; grid-template-columns: 80px 1fr 120px; align-items: center; padding: 28px 32px; border-bottom: 1px solid var(--ink); gap: 24px; }
      .level:first-child { border-top: 1px solid var(--ink); }
      .level-num { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500; letter-spacing: 0.15em; color: var(--muted); }
      .level-name { font-size: 28px; font-weight: 500; font-style: italic; line-height: 1; letter-spacing: -0.01em; }
      .level-desc { font-size: 14px; color: var(--muted); line-height: 1.4; }
      .level-format { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-align: right; line-height: 1.5; }
      .tracks { margin-top: 80px; border-top: 4px solid var(--ink); padding-top: 32px; }
      .tracks-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
      .tracks-title { font-size: 36px; font-style: italic; font-weight: 500; margin-bottom: 40px; letter-spacing: -0.02em; }
      .track-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .track { padding: 28px; border: 1px solid var(--ink); background: var(--paper); display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden; }
      .track::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 6px; }
      .track.leader::before { background: var(--leader); }
      .track.pro::before { background: var(--pro); }
      .track.eng::before { background: var(--eng); }
      footer { margin-top: 80px; padding-top: 24px; border-top: 1px solid var(--ink); display: flex; justify-content: space-between; }
      @media (max-width: 800px) {
        .framework { grid-template-columns: 1fr; }
        .axis-y { border-right: none; border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 16px; }
        .level { grid-template-columns: 60px 1fr; }
        .level-format { grid-column: 2; text-align: left; padding-top: 8px; }
        .track-cards { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    ... see body markup in source file ...
  </body>
  </html>
  END REFERENCE MOCKUP
*/

const FRAMEWORK_CSS = `
.gt-framework {
  --ink: #1a1814;
  --paper: #f4efe6;
  --accent: #c8472e;
  --muted: #6b645a;
  --leader: #d4a574;
  --pro: #7a9b8c;
  --eng: #c8472e;
  --ink-rgb: 26, 24, 20;
  --paper-rgb: 244, 239, 230;
  font-family: 'Fraunces', serif;
  background: var(--paper);
  color: var(--ink);
  /* Top padding clears the 64px fixed Navbar, then 56px of breathing room */
  padding: 120px 40px 56px;
  min-height: 100vh;
}
.dark .gt-framework {
  --ink: #f4efe6;
  --paper: #1a1814;
  --muted: #9e978b;
  --ink-rgb: 244, 239, 230;
  --paper-rgb: 26, 24, 20;
}
.gt-framework *, .gt-framework *::before, .gt-framework *::after { box-sizing: border-box; }
.gt-framework .container { max-width: 1100px; margin: 0 auto; }

.gt-framework header {
  border-top: 4px solid var(--ink);
  padding-top: 24px;
  margin-bottom: 64px;
}
.gt-framework .brand {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}
.gt-framework h1 {
  font-family: 'Fraunces', serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.025em;
  font-style: italic;
  margin: 0 0 20px;
}
.gt-framework h1 em { font-style: normal; color: var(--accent); }
.gt-framework .subtitle {
  font-size: 18px;
  color: var(--muted);
  max-width: 560px;
  line-height: 1.5;
  margin: 0;
}

.gt-framework .framework {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 0;
  margin-bottom: 64px;
}
.gt-framework .axis-y {
  padding-right: 32px;
  border-right: 1px solid var(--ink);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 24px;
}
.gt-framework .axis-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}
.gt-framework .axis-title {
  font-size: 22px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.1;
}

.gt-framework .levels { display: flex; flex-direction: column; }
.gt-framework .level {
  display: grid;
  grid-template-columns: 80px 1fr 120px;
  align-items: center;
  padding: 28px 32px;
  border-bottom: 1px solid var(--ink);
  gap: 24px;
  position: relative;
}
.gt-framework .level:first-child { border-top: 1px solid var(--ink); }
.gt-framework .level-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--muted);
}
.gt-framework .level-content { display: flex; flex-direction: column; gap: 4px; }
.gt-framework .level-name {
  font-size: 28px;
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  letter-spacing: -0.01em;
}
.gt-framework .level-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.4;
}
.gt-framework .level-format {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-align: right;
  line-height: 1.5;
}

.gt-framework .tracks {
  margin-top: 80px;
  border-top: 4px solid var(--ink);
  padding-top: 32px;
}
.gt-framework .tracks-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}
.gt-framework .tracks-title {
  font-family: 'Fraunces', serif;
  font-size: 36px;
  font-style: italic;
  font-weight: 500;
  margin: 0 0 40px;
  letter-spacing: -0.02em;
}
.gt-framework .tracks-title em {
  color: var(--accent);
  font-style: normal;
}

.gt-framework .track-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.gt-framework .track {
  padding: 28px;
  border: 1px solid var(--ink);
  background: var(--paper);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  overflow: hidden;
  color: var(--ink);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.gt-framework .track:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--ink-rgb), 0.18);
}
.gt-framework .track::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 6px;
}
.gt-framework .track.leader::before { background: var(--leader); }
.gt-framework .track.pro::before { background: var(--pro); }
.gt-framework .track.eng::before { background: var(--eng); }
.gt-framework .track-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--muted);
  margin-top: 12px;
}
.gt-framework .track-name {
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.01em;
}
.gt-framework .track-for {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.5;
  margin: 4px 0 0;
}
.gt-framework .track-range {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px dashed var(--muted);
  color: var(--muted);
}
.gt-framework .track-range strong { color: var(--ink); font-weight: 600; }

.gt-framework footer {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid var(--ink);
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 800px) {
  .gt-framework { padding: 96px 20px 40px; }
  .gt-framework .framework { grid-template-columns: 1fr; }
  .gt-framework .axis-y {
    border-right: none;
    border-bottom: 1px solid var(--ink);
    padding-bottom: 16px;
    margin-bottom: 16px;
    padding-right: 0;
    justify-content: flex-start;
  }
  .gt-framework .level { grid-template-columns: 60px 1fr; padding: 24px 0; }
  .gt-framework .level-format { grid-column: 2; text-align: left; padding-top: 8px; }
  .gt-framework .track-cards { grid-template-columns: 1fr; }
  .gt-framework footer { flex-direction: column; gap: 8px; }
}
`;

const Framework = () => {
  return (
    <>
      <Navbar />
      <div className="gt-framework">
      <SEO
        title="The Framework"
        description="The GradTensor Gradient: four levels of AI mastery, three tracks tailored to who you are and what you need to do with AI."
        path="/framework"
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{FRAMEWORK_CSS}</style>
      </Helmet>

      <div className="container">
        <header>
          <div className="brand">GradTensor / The Framework</div>
          <h1>
            One ladder.
            <br />
            <em>Three doors in.</em>
          </h1>
          <p className="subtitle">
            Four levels of AI mastery. Three tracks tailored to who you are and
            what you need to do with AI.
          </p>
        </header>

        <div className="framework">
          <div className="axis-y">
            <div className="axis-label">Vertical axis</div>
            <div className="axis-title">Depth of mastery</div>
          </div>

          <div className="levels">
            <div className="level">
              <div className="level-num">L 01</div>
              <div className="level-content">
                <div className="level-name">Foundations</div>
                <div className="level-desc">
                  Understand what AI is, what it isn't, and how to think clearly
                  about it.
                </div>
              </div>
              <div className="level-format">
                Half-day
                <br />
                or keynote
              </div>
            </div>

            <div className="level">
              <div className="level-num">L 02</div>
              <div className="level-content">
                <div className="level-name">Proficiency</div>
                <div className="level-desc">
                  Work confidently with AI tools, prompts, and patterns in your
                  context.
                </div>
              </div>
              <div className="level-format">
                1-2 day
                <br />
                workshop
              </div>
            </div>

            <div className="level">
              <div className="level-num">L 03</div>
              <div className="level-content">
                <div className="level-name">Builder</div>
                <div className="level-desc">
                  Build real AI-powered workflows, tools, and applications.
                </div>
              </div>
              <div className="level-format">
                4 weeks
                <br />
                30 hours
              </div>
            </div>

            <div className="level">
              <div className="level-num">L 04</div>
              <div className="level-content">
                <div className="level-name">Orchestrator</div>
                <div className="level-desc">
                  Design, deploy, and govern autonomous AI systems in production.
                </div>
              </div>
              <div className="level-format">
                6 months
                <br />
                64 live hours
              </div>
            </div>
          </div>
        </div>

        <div className="tracks">
          <div className="tracks-label">Horizontal axis / who it's for</div>
          <h2 className="tracks-title">
            Three tracks. <em>Same ladder.</em>
          </h2>

          <div className="track-cards">
            <Link to="/for-leaders" className="track leader">
              <div className="track-num">Track 01</div>
              <div className="track-name">For Leaders</div>
              <p className="track-for">
                CXOs, boards, principals, deans. Direct AI work without doing it
                yourself.
              </p>
              <div className="track-range">
                Levels <strong>01 → 02</strong>
              </div>
            </Link>

            <Link to="/for-professionals" className="track pro">
              <div className="track-num">Track 02</div>
              <div className="track-name">For Professionals</div>
              <p className="track-for">
                Business functions, non-tech students. Apply AI in the work you
                already do.
              </p>
              <div className="track-range">
                Levels <strong>01 → 03</strong>
              </div>
            </Link>

            <Link to="/for-engineers" className="track eng">
              <div className="track-num">Track 03</div>
              <div className="track-name">For Engineers</div>
              <p className="track-for">
                Developers, architects, CS students, tech teams. Build production
                AI systems.
              </p>
              <div className="track-range">
                Levels <strong>01 → 04</strong>
              </div>
            </Link>
          </div>
        </div>

        <footer>
          <div>GradTensor / Sudhanva Labs LLP</div>
          <div>Bengaluru, India</div>
        </footer>
      </div>
      </div>
    </>
  );
};

export default Framework;
