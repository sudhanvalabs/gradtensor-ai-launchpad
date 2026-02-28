import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, Calendar, Clock, Timer, ArrowRight } from "lucide-react";
import RegisterDialog from "@/components/RegisterDialog";
import EngineeringRegisterDialog from "@/components/EngineeringRegisterDialog";
import { upcomingBatches, type Batch } from "@/data/batches";

const scheduleEventsLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Upcoming GradTensor AI Course Batches",
  itemListElement: upcomingBatches.map((batch, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "EducationEvent",
      name: `${batch.courseTitle} - ${batch.batchLabel}`,
      startDate: batch.startDate,
      duration: batch.duration,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://gradtensor.com/schedule",
      },
      organizer: {
        "@type": "Organization",
        name: "GradTensor",
        url: "https://gradtensor.com",
      },
    },
  })),
};

const Schedule = () => {
  useScrollAnimation();
  const [teenRegisterOpen, setTeenRegisterOpen] = useState(false);
  const [engRegisterOpen, setEngRegisterOpen] = useState(false);
  const [registerBatch, setRegisterBatch] = useState("");
  const [registerTitle, setRegisterTitle] = useState("");

  const openRegister = (batch: Batch) => {
    setRegisterTitle(batch.courseTitle);
    setRegisterBatch(`${batch.batchLabel} - ${batch.startDate}`);
    if (batch.courseSlug === "teen-ai-builders") {
      setTeenRegisterOpen(true);
    } else {
      setEngRegisterOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Upcoming AI Course Batches"
        description="Find the right schedule and enroll in an upcoming GradTensor AI course batch. Live online classes with flexible timings."
        path="/schedule"
        jsonLd={scheduleEventsLd}
      />
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
            Upcoming <span className="gradient-text">Batches</span>
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Find the right schedule and enroll in an upcoming batch.
          </p>
        </div>
      </section>

      {/* Batch cards */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingBatches.map((batch, i) => (
              <div
                key={`${batch.courseSlug}-${batch.batchLabel}`}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                  {/* Batch label */}
                  <span className="mb-3 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-primary">
                    {batch.batchLabel}
                  </span>

                  {/* Course title */}
                  <Link
                    to={`/courses/${batch.courseSlug}`}
                    className="mb-4 font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                  >
                    {batch.courseTitle}
                  </Link>

                  {/* Details */}
                  <div className="mb-6 flex flex-col gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>Starts {batch.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{batch.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{batch.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer size={16} className="text-primary" />
                      <span>{batch.duration}</span>
                    </div>
                  </div>

                  {/* Enroll button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => openRegister(batch)}
                      className="btn-shimmer group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                    >
                      Enroll Now
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      <RegisterDialog
        open={teenRegisterOpen}
        onOpenChange={setTeenRegisterOpen}
        courseTitle={registerTitle}
        defaultBatch={registerBatch}
      />
      <EngineeringRegisterDialog
        open={engRegisterOpen}
        onOpenChange={setEngRegisterOpen}
        courseTitle={registerTitle}
        defaultBatch={registerBatch}
      />
    </div>
  );
};

export default Schedule;
