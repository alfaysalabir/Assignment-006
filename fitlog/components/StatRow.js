import { Clock, Flame, Star } from "lucide-react";

export default function StatRow({ duration, calories, rating, size = 14, className = "" }) {
  return (
    <div className={`flex items-center gap-4 text-xs text-muted ${className}`}>
      <span className="flex items-center gap-1.5">
        <Clock size={size} className="text-accent" />
        {duration} min
      </span>
      <span className="flex items-center gap-1.5">
        <Flame size={size} className="text-accent" />
        {calories} kcal
      </span>
      <span className="flex items-center gap-1.5">
        <Star size={size} className="text-accent" />
        {rating}
      </span>
    </div>
  );
}
