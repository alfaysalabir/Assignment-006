import { Loader2 } from "lucide-react";

export default function Loader({ label = "Loading workouts…" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-muted">
      <Loader2 size={28} className="animate-spin-slow text-accent" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
