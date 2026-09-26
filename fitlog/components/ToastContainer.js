"use client";

import { CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

const ICONS = {
  default: CheckCircle2,
  info: Info,
  warn: AlertTriangle,
};

export default function ToastContainer() {
  const { toasts, dismissToast } = usePlan();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.tone] || ICONS.default;
        return (
          <div
            key={toast.id}
            className="animate-toast-in flex items-center gap-3 rounded-lg border border-line bg-bg-card2 px-4 py-3 shadow-xl shadow-black/40"
            role="status"
          >
            <Icon size={18} className="shrink-0 text-accent" />
            <p className="flex-1 text-sm font-medium text-white">{toast.message}</p>
            <button
              onClick={() => dismissToast(toast.id)}
              className="shrink-0 text-muted transition hover:text-white"
              aria-label="Dismiss notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
