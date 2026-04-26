import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  BookOpen,
  GraduationCap,
  School,
  Building2,
  Briefcase,
  Award,
  Code,
  Cpu,
  Rocket,
  Laptop,
} from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import PreRegisterDialog from "@/components/PreRegisterDialog";
import { useState } from "react";

const LearningJourney = () => {
  const [preRegDialogOpen, setPreRegDialogOpen] = useState(false);
  const [preRegDefaultCourse, setPreRegDefaultCourse] = useState(
    "ai-agentic-engineering-bootcamp"
  );
  const workshop = getCourseBySlug("ai-workshop-2-day");
  const bootcamp = getCourseBySlug("ai-agentic-engineering-bootcamp");
  const school = getCourseBySlug("teen-ai-builders");

  const openPreReg = (slug: string) => {
    setPreRegDefaultCourse(slug);
    setPreRegDialogOpen(true);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Our flagship bootcamp, a 2-day hands-on workshop entry, plus
            programmes for schools and corporates.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {/* --- Card 1: Bootcamp (Flagship) --- */}
          {bootcamp && (
            <div className="animate-on-scroll rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-card/50 p-8 md:p-10 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Cpu size={22} />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-primary uppercase">
                  Flagship Programme
                </span>
              </div>

              <h3 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {bootcamp.title}
              </h3>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {bootcamp.tagline}
              </p>

              {/* Key details */}
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

              {/* What you become */}
              <div className="mb-6 rounded-xl border border-dashed border-border bg-muted/30 px-5 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-display font-semibold text-foreground">
                    The opportunity:
                  </span>{" "}
                  Every student - PHP, Java, Python, Full Stack - is a potential
                  candidate. The best paying jobs will go to AI Orchestrators -
                  people who build and coordinate AI agents to solve any problem a
                  business has. This bootcamp turns you into exactly that.
                </p>
              </div>

              {/* Ideal for */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <GraduationCap size={12} className="text-primary" />
                  Engineering students & graduates
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <Briefcase size={12} className="text-primary" />
                  Working professionals pivoting to AI
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <Code size={12} className="text-primary" />
                  Any programming language background
                </span>
              </div>

              <button
                onClick={() => openPreReg("ai-agentic-engineering-bootcamp")}
                className="btn-shimmer group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Contact for Pricing
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          )}

          {/* --- Card 2: 2-Day Hands-On Workshop --- */}
          {workshop && (
            <div className="animate-on-scroll rounded-2xl border border-sky-500/30 bg-card/30 p-8 md:p-10 transition-all hover:border-sky-500/50 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                  <Rocket size={22} />
                </div>
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-sky-600 dark:text-sky-400 uppercase">
                  Hands-On Workshop
                </span>
              </div>

              <h3 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {workshop.title}
              </h3>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {workshop.tagline}
              </p>

              {/* Key details */}
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Clock size={18} className="mt-0.5 shrink-0 text-sky-500" />
                  <div>
                    <p className="font-display text-sm font-semibold">2 Days</p>
                    <p className="text-xs text-muted-foreground">
                      9 AM - 5 PM, hands-on
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Laptop size={18} className="mt-0.5 shrink-0 text-sky-500" />
                  <div>
                    <p className="font-display text-sm font-semibold">Live Deployed App</p>
                    <p className="text-xs text-muted-foreground">
                      AI Interview Coach at your URL
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Award size={18} className="mt-0.5 shrink-0 text-sky-500" />
                  <div>
                    <p className="font-display text-sm font-semibold">Participation Certificate</p>
                    <p className="text-xs text-muted-foreground">
                      Plus access to GradTensor AI community
                    </p>
                  </div>
                </div>
              </div>

              {/* Path to bootcamp */}
              <div className="mb-6 rounded-xl border border-dashed border-border bg-muted/30 px-5 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-display font-semibold text-foreground">
                    Your entry into AI:
                  </span>{" "}
                  In 2 days you understand how AI APIs actually work and ship a
                  real, deployed app. The natural next step is the 6-month AI
                  Agentic Engineering Bootcamp - where you go from building one
                  app to building production agentic systems.
                </p>
              </div>

              {/* Ideal for */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <GraduationCap size={12} className="text-sky-500" />
                  Engineering / BCA / MCA students
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <Code size={12} className="text-sky-500" />
                  Working developers adding AI skills
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  <Briefcase size={12} className="text-sky-500" />
                  Engineering colleges (B2B batches)
                </span>
              </div>

              <button
                onClick={() => openPreReg("ai-workshop-2-day")}
                className="btn-shimmer group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Pre-Register
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Next batch dates will be notified to those who pre-register.
              </p>
            </div>
          )}

          {/* --- Card 3: School Programme --- */}
          {school && (
            <div className="animate-on-scroll rounded-2xl border border-border bg-card/30 p-8 md:p-10 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <School size={22} />
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                  For Schools
                </span>
              </div>

              <h3 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {school.title}
              </h3>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {school.description}
              </p>

              {/* Key details */}
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Clock size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                  <div>
                    <p className="font-display text-sm font-semibold">12 Weeks</p>
                    <p className="text-xs text-muted-foreground">
                      One slot per week in timetable
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <BookOpen size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                  <div>
                    <p className="font-display text-sm font-semibold">90 Min / Week</p>
                    <p className="text-xs text-muted-foreground">
                      Grades 8-12, no prerequisites
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Award size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                  <div>
                    <p className="font-display text-sm font-semibold">AI Builder Certificate</p>
                    <p className="text-xs text-muted-foreground">
                      GradTensor certification on completion
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  HTML & CSS
                </span>
                <span className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  JavaScript
                </span>
                <span className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  AI API Integration
                </span>
                <span className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  Deployment
                </span>
              </div>

              <Link
                to="/teen-ai-builders"
                className="btn-shimmer group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Bring to Your School
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          )}

          {/* --- Card 4: Corporate Training --- */}
          <div className="animate-on-scroll rounded-2xl border border-border bg-card/30 p-8 md:p-10 transition-all hover:border-primary/20 hover:shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Building2 size={22} />
              </div>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
                For Corporates
              </span>
            </div>

            <h3 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Corporate AI Training
            </h3>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              AI training tailored to your teams - from AI prompts that speed up
              daily work to AI workflows that compress entire processes.
              Customised to your function, your workflows, your documents. Online
              or onsite.
            </p>

            {/* Function tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Leadership",
                "HR",
                "Finance",
                "Marketing",
                "Sales",
                "Legal",
                "CA Firms",
                "Operations",
                "Customer Support",
                "Procurement",
                "Teachers & Educators",
              ].map((fn) => (
                <span
                  key={fn}
                  className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {fn}
                </span>
              ))}
            </div>

            <Link
              to="/corporate"
              className="btn-shimmer group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
            >
              Explore Corporate Training
              <ArrowRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      <PreRegisterDialog
        open={preRegDialogOpen}
        onOpenChange={setPreRegDialogOpen}
        defaultCourse={preRegDefaultCourse}
      />
    </section>
  );
};

export default LearningJourney;
