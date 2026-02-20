import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import CourseCard from "@/components/CourseCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getCoursesByCategory } from "@/data/courses";
import type { CourseCategory } from "@/data/courses";
import { ArrowLeft, Mail } from "lucide-react";
import { whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

const categoryLabels: Record<CourseCategory, string> = {
  skill: "Skill-Based",
  cohort: "Cohort-Based",
  executive: "Executive",
};

const Courses = () => {
  useScrollAnimation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = (searchParams.get("tab") as CourseCategory) || "skill";

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  const skillCourses = getCoursesByCategory("skill");
  const cohortCourses = getCoursesByCategory("cohort");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back link */}
      <div className="pt-24 md:pt-28">
        <div className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="section-container text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            From fast-track placement prep to deep foundations  - choose your path to AI job readiness.
          </p>
        </div>
      </section>

      {/* Category Tabs + Course Cards */}
      <section className="pb-20">
        <div className="section-container">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <div className="flex justify-center">
              <TabsList className="mb-10 h-12 gap-1 rounded-xl bg-muted p-1.5">
                {(Object.keys(categoryLabels) as CourseCategory[]).map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-lg px-5 py-2 font-display text-sm font-semibold tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {categoryLabels[cat]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Skill-Based */}
            <TabsContent value="skill">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCourses.map((course, i) => (
                  <div
                    key={course.slug}
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Cohort-Based */}
            <TabsContent value="cohort">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cohortCourses.map((course, i) => (
                  <div
                    key={course.slug}
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Executive  - Coming Soon */}
            <TabsContent value="executive">
              <div className="animate-fade-up opacity-0 mx-auto max-w-xl text-center">
                <div className="rounded-2xl border border-border bg-card p-10 md:p-14">
                  <span className="badge-executive">EXECUTIVE</span>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    Coming Soon
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                    We're designing executive AI programs for leaders and decision-makers. Help us shape the curriculum  - tell us what you'd need.
                  </p>
                  <WhatsAppButton
                    href={whatsappLink("executive")}
                    className="btn-shimmer mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                  >
                    <Mail size={18} />
                    Share Your Interest
                  </WhatsAppButton>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Courses;
