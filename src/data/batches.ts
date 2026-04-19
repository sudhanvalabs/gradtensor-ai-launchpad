export interface Batch {
  courseTitle: string;
  courseSlug: string;
  batchLabel: string;
  startDate: string;
  days: string;
  time: string;
  duration: string;
}

export const upcomingBatches: Batch[] = [];

export function getBatchesForCourse(slug: string): Batch[] {
  return upcomingBatches.filter((b) => b.courseSlug === slug);
}
