import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-center justify-center gap-5 px-5 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-bg-card">
        <Dumbbell size={28} className="text-accent" />
      </div>
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
        Page not found
      </h1>
      <p className="max-w-sm text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link href="/" className="btn-primary mt-2">
        Go to workouts
      </Link>
    </div>
  );
}
