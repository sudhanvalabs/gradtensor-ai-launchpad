export type Currency = "INR" | "USD";

export const trackPricing: Record<string, { inr: string; usd: string }> = {
  skill: { inr: "Starting at ₹24,780", usd: "Starting at $300" },
  cohort: { inr: "Starting at ₹54,500", usd: "Starting at $660" },
  executive: { inr: "Custom pricing", usd: "Custom pricing" },
};

export function getTrackPrice(track: string, currency: Currency): string {
  const pricing = trackPricing[track];
  if (!pricing) return "";
  return currency === "INR" ? pricing.inr : pricing.usd;
}
