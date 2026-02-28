export interface Batch {
  courseTitle: string;
  courseSlug: string;
  batchLabel: string;
  startDate: string;
  days: string;
  time: string;
  duration: string;
}

export const upcomingBatches: Batch[] = [
  {
    courseTitle: "Teen AI Builders",
    courseSlug: "teen-ai-builders",
    batchLabel: "Batch 1",
    startDate: "April 1, 2026",
    days: "Wed & Thu",
    time: "11:00 AM - 12:00 PM IST",
    duration: "4 weeks",
  },
  {
    courseTitle: "Teen AI Builders",
    courseSlug: "teen-ai-builders",
    batchLabel: "Batch 2",
    startDate: "April 15, 2026",
    days: "Wed & Thu",
    time: "4:00 - 5:00 PM IST",
    duration: "4 weeks",
  },
  {
    courseTitle: "AI Engineering & Agentic Foundations",
    courseSlug: "ai-engineering-agentic-foundations",
    batchLabel: "Next Batch",
    startDate: "April 20, 2026",
    days: "Mon & Tue",
    time: "8:30 - 10:30 PM IST",
    duration: "6 weeks",
  },
];

export function getBatchesForCourse(slug: string): Batch[] {
  return upcomingBatches.filter((b) => b.courseSlug === slug);
}
