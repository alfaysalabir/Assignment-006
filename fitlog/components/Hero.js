import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-12 sm:pt-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8 bg-bg-card rounded-2xl p-8 lg:p-16">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-[52px]">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
            today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a href="#library" className="btn-primary mt-8 w-fit !px-6 !py-3 text-base">
            Browse Workouts
            <ArrowDown size={18} />
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-visible lg:max-w-none">
          <Image
            src="/banner.png"
            alt="Illustration of an athlete performing a resistance machine exercise"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
