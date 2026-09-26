"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

const LINKS = [
  { href: "/#library", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { metrics, saved } = usePlan();
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/my-plan") return pathname === "/my-plan";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="FitLog logo" width={28} height={28} priority />
          <span className="font-display text-lg font-bold tracking-wide text-white">
            FIT<span className="text-accent">LOG</span>
          </span>
        </Link>

        {/* Center nav links - desktop */}
        <ul className="hidden items-center gap-2 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive(link.href)
                    ? "bg-bg-card text-accent"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right badges - desktop */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link href="/my-plan" className="badge-plan" aria-label="Items in today's plan">
            Plan <span>{metrics.exercises}</span>
          </Link>
          <Link href="/my-plan" className="badge-saved" aria-label="Saved items">
            Saved <span>{saved.length}</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md border border-line p-2 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg px-5 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-semibold ${
                    isActive(link.href) ? "bg-bg-card text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2.5">
            <Link href="/my-plan" className="badge-plan" onClick={() => setOpen(false)}>
              Plan <span>{metrics.exercises}</span>
            </Link>
            <Link href="/my-plan" className="badge-saved" onClick={() => setOpen(false)}>
              Saved <span>{saved.length}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
