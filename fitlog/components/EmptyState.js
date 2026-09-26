import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function EmptyState({
  title = "NOTHING HERE YET",
  text = "Browse the library and add a lift to get today moving.",
  ctaLabel = "Go to workouts",
  ctaHref = "/",
}) {
  return (
    <div className="card flex flex-col items-center gap-4 px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-bg-card">
        <Dumbbell size={24} className="text-accent" />
      </div>
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="max-w-sm text-sm text-muted">{text}</p>
      <Link href={ctaHref} className="btn-primary mt-2">
        {ctaLabel}
      </Link>
    </div>
  );
}
