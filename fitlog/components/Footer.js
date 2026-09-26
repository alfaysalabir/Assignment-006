import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="FitLog logo" width={20} height={20} />
          <span className="font-display text-sm font-bold tracking-wide text-white">
            FIT<span className="text-accent">LOG</span>
          </span>
        </div>
        <p className="text-center text-sm text-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
