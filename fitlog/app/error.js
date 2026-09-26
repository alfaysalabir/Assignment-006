"use client";

export default function Error({ error, reset }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-center justify-center gap-4 px-5 py-24 text-center">
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
        Something went wrong
      </h1>
      <p className="max-w-sm text-sm text-muted">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      <button onClick={() => reset()} className="btn-primary mt-2">
        Try again
      </button>
    </div>
  );
}
