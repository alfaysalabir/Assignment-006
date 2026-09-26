"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { PlusCircle, Bookmark } from "lucide-react";
import CategoryTags from "@/components/CategoryTags";
import Loader from "@/components/Loader";
import { usePlan } from "@/context/PlanContext";
import { getWorkoutById } from "@/lib/api";

const SPEC_ROWS = [
  { key: "equipment", label: "Equipment" },
  { key: "difficulty", label: "Difficulty" },
  { key: "sets", label: "Sets" },
  { key: "reps", label: "Reps" },
  { key: "duration", label: "Duration", suffix: " min" },
  { key: "caloriesBurned", label: "Calories", suffix: " kcal" },
  { key: "rating", label: "Rating" },
];

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToPlan, addToSaved, isInPlan, isSaved, plan, planCap } = usePlan();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getWorkoutById(id)
      .then((data) => {
        if (!active) return;
        if (!data) {
          setNotFound(true);
        } else {
          setWorkout(data);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-[1280px] px-5">
        <Loader />
      </div>
    );
  }

  if (notFound || !workout) {
    return (
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-5 py-24 text-center">
        <h1 className="font-display text-2xl font-bold uppercase text-white">
          Workout not found
        </h1>
        <p className="text-sm text-muted">This lift doesn&apos;t exist in the library.</p>
        <button onClick={() => router.push("/")} className="btn-primary mt-2">
          Back to workouts
        </button>
      </div>
    );
  }

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);
  const planFull = plan.length >= planCap && !alreadyInPlan;

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: media */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-bg-card lg:aspect-auto lg:h-full lg:min-h-[520px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: info */}
        <div className="flex flex-col">
          <h1 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted">{workout.description}</p>

          <CategoryTags tags={workout.muscleGroups} className="mt-4" />

          {/* Key specs */}
          <div className="card mt-6 divide-y divide-line">
            {SPEC_ROWS.map((row) => (
              <div key={row.key} className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="font-semibold uppercase tracking-wide text-muted">
                  {row.label}
                </span>
                <span className="font-medium text-white">
                  {workout[row.key]}
                  {row.suffix || ""}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>
            <ol className="mt-4 flex flex-col gap-3">
              {workout.instructions?.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => addToPlan(workout)}
              disabled={planFull}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              <PlusCircle size={18} />
              {alreadyInPlan ? "In today's plan" : planFull ? "Plan is full" : "Add to today's plan"}
            </button>
            <button onClick={() => addToSaved(workout)} className="btn-secondary">
              <Bookmark size={18} />
              {alreadySaved ? "Saved" : "Save for later"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
