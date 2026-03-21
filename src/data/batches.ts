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
    batchLabel: "Next Batch",
    startDate: "April 15, 2026",
    days: "Wed & Thu",
    time: "10:00 - 11:00 AM IST",
    duration: "4 weeks",
  },
  {
    courseTitle: "AI Engineering & Agentic Foundations",
    courseSlug: "ai-engineering-agentic-foundations",
    batchLabel: "Next Batch",
    startDate: "May 18, 2026",
    days: "Mon & Tue",
    time: "8:30 - 10:30 PM IST",
    duration: "6 weeks",
  },
];

export function getBatchesForCourse(slug: string): Batch[] {
  return upcomingBatches.filter((b) => b.courseSlug === slug);
}
