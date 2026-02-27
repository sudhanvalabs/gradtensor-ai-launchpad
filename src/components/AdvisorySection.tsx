import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  BookOpen,
  RotateCcw,
  MessageCircle,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/data/siteConfig";
import { recommendCourses } from "@/data/courses";
import type { Course, Background, TechComfort, Goal } from "@/data/courses";
import WhatsAppButton from "@/components/WhatsAppButton";
import PreRegisterDialog from "@/components/PreRegisterDialog";

const backgroundOptions: { value: Background; label: string }[] = [
  { value: "high-school", label: "High school student" },
  { value: "college-tech", label: "College student (tech)" },
  { value: "professional", label: "Working professional" },
  { value: "non-tech", label: "Career switcher / non-tech" },
];

const techComfortOptions: { value: TechComfort; label: string }[] = [
  { value: "none", label: "No coding experience" },
  { value: "basic", label: "Basic coding (some Python/JS)" },
  { value: "comfortable", label: "Comfortable with Python" },
];

const goalOptions: { value: Goal; label: string }[] = [
  { value: "explore", label: "Explore what AI can do" },
  { value: "get-hired", label: "Get hired / ace placements" },
  { value: "build-product", label: "Build my own AI product" },
  { value: "lead-strategy", label: "Lead AI strategy for my team" },
];

const AdvisorySection = () => {
  const [background, setBackground] = useState<Background | "">("");
  const [techComfort, setTechComfort] = useState<TechComfort | "">("");
  const [goal, setGoal] = useState<Goal | "">("");
  const [results, setResults] = useState<Course[] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const allAnswered = background && techComfort && goal;

  const handleRecommend = () => {
    if (!background || !techComfort || !goal) return;
    const recommended = recommendCourses(background, techComfort, goal);
    setResults(recommended);
  };

  const handleReset = () => {
    setBackground("");
    setTechComfort("");
    setGoal("");
    setResults(null);
  };

  const openPreRegister = (slug: string) => {
    setSelectedCourse(slug);
    setDialogOpen(true);
  };

  return (
    <section className="pb-24 md:pb-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="mb-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Not sure which course is right for you?
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Answer 3 quick questions and we'll recommend the best fit.
            </p>
          </div>

          {results === null ? (
            <div className="animate-on-scroll rounded-2xl border border-border bg-card p-8 md:p-10">
              {/* Question 1 */}
              <div className="mb-8">
                <p className="mb-3 font-display text-base font-semibold">
                  1. Your background
                </p>
                <RadioGroup
                  value={background}
                  onValueChange={(v) => setBackground(v as Background)}
                  className="grid gap-2"
                >
                  {backgroundOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className="flex items-center space-x-3"
                    >
                      <RadioGroupItem value={opt.value} id={`bg-${opt.value}`} />
                      <Label
                        htmlFor={`bg-${opt.value}`}
                        className="text-base cursor-pointer"
                      >
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Question 2 */}
              <div className="mb-8">
                <p className="mb-3 font-display text-base font-semibold">
                  2. Tech comfort level
                </p>
                <RadioGroup
                  value={techComfort}
                  onValueChange={(v) => setTechComfort(v as TechComfort)}
                  className="grid gap-2"
                >
                  {techComfortOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className="flex items-center space-x-3"
                    >
                      <RadioGroupItem
                        value={opt.value}
                        id={`tc-${opt.value}`}
                      />
                      <Label
                        htmlFor={`tc-${opt.value}`}
                        className="text-base cursor-pointer"
                      >
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Question 3 */}
              <div className="mb-8">
                <p className="mb-3 font-display text-base font-semibold">
                  3. Your goal
                </p>
                <RadioGroup
                  value={goal}
                  onValueChange={(v) => setGoal(v as Goal)}
                  className="grid gap-2"
                >
                  {goalOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className="flex items-center space-x-3"
                    >
                      <RadioGroupItem
                        value={opt.value}
                        id={`goal-${opt.value}`}
                      />
                      <Label
                        htmlFor={`goal-${opt.value}`}
                        className="text-base cursor-pointer"
                      >
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button
                onClick={handleRecommend}
                disabled={!allAnswered}
                className="w-full font-display text-base font-semibold tracking-wider"
                size="lg"
              >
                Get My Recommendation
              </Button>
            </div>
          ) : (
            <div className="animate-fade-up">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <p className="mb-6 font-display text-lg font-bold tracking-tight">
                  {results.length > 1
                    ? "We recommend these courses for you:"
                    : "We recommend this course for you:"}
                </p>

                <div className="space-y-4">
                  {results.map((course) => (
                    <RecommendedCard
                      key={course.slug}
                      course={course}
                      onPreRegister={openPreRegister}
                    />
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <RotateCcw size={14} />
                    Try again
                  </button>

                  <WhatsAppButton
                    href={whatsappLink("advisor")}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <MessageCircle size={14} />
                    Not quite right? Chat with an advisor
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <PreRegisterDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultCourse={selectedCourse}
      />
    </section>
  );
};

const RecommendedCard = ({
  course,
  onPreRegister,
}: {
  course: Course;
  onPreRegister: (slug: string) => void;
}) => {
  const isLive = course.status === "live";

  return (
    <div className="rounded-xl border border-primary/20 bg-card/50 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-display text-lg font-bold tracking-tight">
            {course.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{course.tagline}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} className="text-primary" />
              {course.hours}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {isLive ? (
          <Link
            to={`/courses/${course.slug}`}
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider text-primary transition-colors hover:text-primary/80"
          >
            Learn More
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        ) : (
          <button
            onClick={() => onPreRegister(course.slug)}
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider text-primary transition-colors hover:text-primary/80"
          >
            Pre-Register
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default AdvisorySection;
