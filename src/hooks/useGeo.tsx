import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Currency } from "@/data/pricing";

interface GeoContextValue {
  currency: Currency;
  loading: boolean;
}

const GeoContext = createContext<GeoContextValue>({
  currency: "USD",
  loading: true,
});

const SESSION_KEY = "gt_currency";

export function GeoProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (cached === "INR" || cached === "USD") {
      setCurrency(cached);
      setLoading(false);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const detected: Currency = data.country_code === "IN" ? "INR" : "USD";
        setCurrency(detected);
        sessionStorage.setItem(SESSION_KEY, detected);
      })
      .catch(() => {
        setCurrency("USD");
        sessionStorage.setItem(SESSION_KEY, "USD");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <GeoContext.Provider value={{ currency, loading }}>
      {children}
    </GeoContext.Provider>
  );
}

export function useGeo() {
  return useContext(GeoContext);
}
