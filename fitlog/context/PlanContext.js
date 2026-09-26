"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const PlanContext = createContext(null);

const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";
const PLAN_CAP = 5;

function readStorage(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota / private-mode errors
  }
}

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    setPlan(readStorage(PLAN_KEY));
    setSaved(readStorage(SAVED_KEY));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeStorage(PLAN_KEY, plan);
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) writeStorage(SAVED_KEY, saved);
  }, [saved, hydrated]);

  const showToast = useCallback((message, tone = "default") => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((t) => [...t, { id, message, tone }]);
    window.setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 2800);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  }, []);

  const addToPlan = useCallback(
    (workout) => {
      let added = false;
      setPlan((prev) => {
        if (prev.some((w) => w.id === workout.id)) {
          showToast("Already in today's plan", "info");
          return prev;
        }
        if (prev.length >= PLAN_CAP) {
          showToast("Today's plan is full (5 lifts max)", "warn");
          return prev;
        }
        added = true;
        return [...prev, { ...workout, done: false }];
      });
      if (added) showToast("Added to today's plan");
    },
    [showToast]
  );

  const addToSaved = useCallback(
    (workout) => {
      let added = false;
      setSaved((prev) => {
        if (prev.some((w) => w.id === workout.id)) {
          showToast("Already saved for later", "info");
          return prev;
        }
        added = true;
        return [...prev, workout];
      });
      if (added) showToast("Saved for later");
    },
    [showToast]
  );

  const removeFromPlan = useCallback(
    (id) => {
      setPlan((prev) => prev.filter((w) => w.id !== id));
      showToast("Removed from today's plan");
    },
    [showToast]
  );

  const removeFromSaved = useCallback(
    (id) => {
      setSaved((prev) => prev.filter((w) => w.id !== id));
      showToast("Removed from saved");
    },
    [showToast]
  );

  const markAsDone = useCallback(
    (id) => {
      setPlan((prev) => prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w)));
      showToast("Marked as done");
    },
    [showToast]
  );

  const isInPlan = useCallback((id) => plan.some((w) => w.id === id), [plan]);
  const isSaved = useCallback((id) => saved.some((w) => w.id === id), [saved]);

  const metrics = useMemo(() => {
    const exercises = plan.length;
    const minutes = plan.reduce((sum, w) => sum + (Number(w.duration) || 0), 0);
    const calories = plan.reduce((sum, w) => sum + (Number(w.caloriesBurned) || 0), 0);
    return { exercises, minutes, calories };
  }, [plan]);

  const value = {
    plan,
    saved,
    metrics,
    planCap: PLAN_CAP,
    hydrated,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    isInPlan,
    isSaved,
    toasts,
    showToast,
    dismissToast,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within a PlanProvider");
  return ctx;
}
