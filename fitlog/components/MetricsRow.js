import { Dumbbell, Clock, Flame } from "lucide-react";

export default function MetricsRow({ exercises, minutes, calories }) {
  const items = [
    { label: "Exercises", value: exercises, icon: Dumbbell },
    { label: "Minutes", value: minutes, icon: Clock },
    { label: "Calories", value: calories, icon: Flame },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map(({ label, value, icon: Icon }) => (
        <div key={label} className="card flex items-center gap-4 p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
            <Icon size={20} className="text-accent" />
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white">{value}</p>
            <p className="text-sm text-muted">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
