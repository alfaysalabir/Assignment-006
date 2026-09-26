"use client";

import { useState } from "react";
import MetricsRow from "@/components/MetricsRow";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import Loader from "@/components/Loader";
import { usePlan } from "@/context/PlanContext";

const TABS = [
  { id: "plan", label: "Today's Plan" },
  { id: "saved", label: "Saved" },
];

export default function MyPlanPage() {
  const {
    plan,
    saved,
    metrics,
    hydrated,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();
  const [activeTab, setActiveTab] = useState("plan");

  const list = activeTab === "plan" ? plan : saved;

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-10">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-sm text-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8">
        <MetricsRow exercises={metrics.exercises} minutes={metrics.minutes} calories={metrics.calories} />
      </div>

      {/* Tabs */}
      <div className="mt-8 flex w-fit gap-1 rounded-lg border border-line bg-bg-card p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.id ? "bg-accent text-bg" : "text-muted hover:text-white"
            }`}
          >
            {tab.label} ({tab.id === "plan" ? plan.length : saved.length})
          </button>
        ))}
      </div>

      <div className="mt-6">
        {!hydrated ? (
          <Loader />
        ) : list.length === 0 ? (
          <EmptyState
            title="NOTHING HERE YET"
            text="Browse the library and add a lift to get today moving."
            ctaLabel="Go to workouts"
            ctaHref="/"
          />
        ) : (
          <div className="flex flex-col gap-4">
            {list.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                variant={activeTab}
                onRemove={activeTab === "plan" ? removeFromPlan : removeFromSaved}
                onToggleDone={markAsDone}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
