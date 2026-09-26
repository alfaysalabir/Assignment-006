import Link from "next/link";
import Image from "next/image";
import CategoryTags from "./CategoryTags";
import StatRow from "./StatRow";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="card group flex flex-col overflow-hidden transition hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="relative h-48 w-full overflow-hidden bg-bg-card">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <CategoryTags tags={workout.muscleGroups} />
        <h3 className="font-display text-lg font-bold uppercase leading-tight text-white">
          {workout.name}
        </h3>
        <p className="text-sm text-muted">{workout.equipment}</p>
        <StatRow
          duration={workout.duration}
          calories={workout.caloriesBurned}
          rating={workout.rating}
          className="mt-auto pt-1"
        />
      </div>
    </Link>
  );
}
