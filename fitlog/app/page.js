"use client";

import { useEffect, useState, useMemo } from "react";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import SortDropdown from "@/components/SortDropdown";
import Loader from "@/components/Loader";
import { getWorkouts } from "@/lib/api";

export default function HomePage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    let active = true;
    setLoading(true);
    getWorkouts()
      .then((data) => {
        if (!active) return;
        setWorkouts(data);
        setError(data.length === 0);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const sorted = useMemo(() => {
    const copy = [...workouts];
    copy.sort((a, b) => (Number(a[sortBy]) || 0) - (Number(b[sortBy]) || 0));
    return copy;
  }, [workouts, sortBy]);

  return (
    <>
      <Hero />

      <section id="library" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 pb-20">
        <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
              The Library
            </h2>
            <p className="mt-1 text-sm text-muted">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
          {!loading && workouts.length > 0 && (
            <SortDropdown value={sortBy} onChange={setSortBy} />
          )}
        </div>

        <div className="mt-8">
          {loading ? (
            <Loader />
          ) : error ? (
            <p className="py-16 text-center text-sm text-muted">
              Couldn&apos;t load workouts right now. Please try again shortly.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
