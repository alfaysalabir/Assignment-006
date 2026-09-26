"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Circle, X } from "lucide-react";
import StatRow from "./StatRow";

export default function PlanCard({ workout, variant, onRemove, onToggleDone }) {
  const done = variant === "plan" && workout.done;

  return (
    <div
      className={`card flex flex-col gap-4 p-4 transition sm:flex-row sm:items-center ${
        done ? "opacity-60" : ""
      }`}
    >
      <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg bg-bg-card sm:w-28">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" sizes="112px" />
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className={`font-display text-base font-bold uppercase leading-tight text-white ${
            done ? "line-through" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{workout.equipment}</p>
        <StatRow
          duration={workout.duration}
          calories={workout.caloriesBurned}
          rating={workout.rating}
          className="mt-2"
        />
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-nowrap">
        <Link href={`/workout/${workout.id}`} className="btn-secondary !px-3 !py-2 text-xs">
          View Details
        </Link>
        {variant === "plan" && (
          <button
            onClick={() => onToggleDone(workout.id)}
            className="btn-secondary !px-3 !py-2 text-xs"
          >
            {done ? <CheckCircle2 size={14} className="text-accent" /> : <Circle size={14} />}
            {done ? "Done" : "Mark as Done"}
          </button>
        )}
        <button
          onClick={() => onRemove(workout.id)}
          aria-label="Remove"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-muted transition hover:border-red-500/60 hover:text-red-400"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
