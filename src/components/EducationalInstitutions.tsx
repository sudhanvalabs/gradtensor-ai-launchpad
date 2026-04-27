import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  Cpu,
  School,
  GraduationCap,
} from "lucide-react";
import { getCourseBySlug } from "@/data/courses";

const partnershipMail = (subject: string) =>
  `mailto:partnerships@gradtensor.com?subject=${encodeURIComponent(subject)}`;

const EducationalInstitutions = () => {
  const bootcamp = getCourseBySlug("ai-agentic-engineering-bootcamp");
  const intensive = getCourseBySlug("ai-builder-intensive");
  const school = getCourseBySlug("teen-ai-builders");

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 animate-on-scroll">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // For Educational Institutions
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Programmes for colleges,{" "}
            <span className="gradient-text">training institutes &amp; schools</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Delivered through institutional partnerships. Career-aligned,
            placement-ready, and customised to your students.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-8">
          {/* --- FLAGSHIP: Bootcamp --- */}
          {bootcamp && (
            <div className="animate-on-scroll rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-card/50 p-8 md:p-10 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Cpu size={22} />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-primary uppercase">
                  Flagship · 6 Months
                </span>
              </div>

              <h3 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {bootcamp.title}
              </h3>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Build production agentic AI systems - the role companies will
                pay a premium for.
              </p>

              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-sm font-semibold">6 Months</p>
                    <p className="text-xs text-muted-foreground">
                      4 months training + 2 months capstone
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <BookOpen size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-sm font-semibold">64 Live Hours</p>
                    <p className="text-xs text-muted-foreground">
                      3 days a week, live online
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Award size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-sm font-semibold">GradTensor Certification</p>
                    <p className="text-xs text-muted-foreground">
                      On successful capstone completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-dashed border-border bg-muted/30 px-5 py-4">
                <p className="mb-2 font-mono text-[11px] tracking-wider uppercase text-primary">
                  Delivered through partnerships with
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>· Engineering colleges</li>
                  <li>· BCA / MCA institutes</li>
                  <li>· Technical training institutes</li>
                  <li>· Placement &amp; career-prep partners</li>
                </ul>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase text-primary">
                Level 3-4 - AI Agent Builder to AI Orchestrator
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={partnershipMail(
                    "AI Agentic Engineering Bootcamp - Partnership Enquiry"
                  )}
                  className="btn-shimmer group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                >
                  Partnership Enquiry
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
                <a
                  href="mailto:courses@gradtensor.com?subject=Bootcamp%20%E2%80%94%20Curriculum%20Request"
                  className="inline-flex items-center justify-center gap-2 font-display text-sm font-semibold tracking-wider text-primary border-b border-primary/40 pb-1 hover:text-primary/80"
                >
                  Request curriculum →
                </a>
              </div>
            </div>
          )}

          {/* --- TWO INSTITUTIONAL CARDS --- */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Builder Intensive */}
            {intensive && (
              <div className="animate-on-scroll rounded-2xl border border-border bg-card/30 p-8 transition-all hover:border-primary/20 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                    <GraduationCap size={22} />
                  </div>
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-display text-[11px] font-semibold tracking-wider text-sky-600 dark:text-sky-400 uppercase">
                    For Engineering, BCA &amp; MCA Colleges
                  </span>
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold tracking-tight">
                  {intensive.title}
                </h3>
                <p className="mb-4 font-mono text-xs tracking-wide text-muted-foreground border-l-2 border-sky-500 pl-3">
                  2 Days · 9 AM-5 PM · In-person or Online
                </p>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  Students build and deploy a live AI Mock Interview Coach by end
                  of Day 2 - using real AI APIs. The clearest entry point into
                  AI for placement-bound students.
                </p>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase text-primary">
                  Level 2 - AI Builder
                </div>

                <p className="mb-2 font-mono text-[11px] tracking-wider uppercase text-primary">
                  Built for
                </p>
                <ul className="mb-6 space-y-1 text-sm text-muted-foreground">
                  <li>· Final &amp; pre-final year students preparing for placements</li>
                  <li>· Engineering, BCA, MCA cohorts - any branch</li>
                  <li>· College &amp; training-institute placement programmes</li>
                </ul>

                <a
                  href={partnershipMail(
                    "AI Builder Intensive - College Proposal"
                  )}
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                >
                  For Colleges: Download Proposal
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            )}

            {/* Teen AI Builders */}
            {school && (
              <div className="animate-on-scroll rounded-2xl border border-border bg-card/30 p-8 transition-all hover:border-primary/20 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <School size={22} />
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-display text-[11px] font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                    For Schools (Grades 8-12)
                  </span>
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold tracking-tight">
                  {school.title}
                </h3>
                <p className="mb-4 font-mono text-xs tracking-wide text-muted-foreground border-l-2 border-emerald-500 pl-3">
                  12 Weeks · One slot per week · 90 min
                </p>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  Students build a fully deployed AI-powered escape room game.
                  Every line of code written and understood by the student. Live
                  at a URL they can share.
                </p>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase text-primary">
                  Level 2 - AI Builder
                </div>

                <p className="mb-2 font-mono text-[11px] tracking-wider uppercase text-primary">
                  Skills students learn
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    "HTML / CSS",
                    "JavaScript",
                    "AI API Integration",
                    "Deployment",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  to="/teen-ai-builders"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                >
                  Bring to Your School
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalInstitutions;
