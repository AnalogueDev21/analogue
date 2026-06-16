import { Check } from "lucide-react";

export default function OptionCard({ label, description, selected, onClick }) {
  return (
    <button
      className={`flex min-h-20 w-full items-start gap-4 rounded-lg border bg-white p-4 text-left transition ${
        selected
          ? "border-analogue-blue ring-4 ring-blue-100"
          : "border-analogue-line hover:border-zinc-300 hover:bg-zinc-50"
      }`}
      onClick={onClick}
      type="button"
    >
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
          selected
            ? "border-analogue-blue bg-analogue-blue text-white"
            : "border-zinc-300 text-transparent"
        }`}
      >
        <Check size={15} strokeWidth={3} />
      </span>
      <span className="min-w-0">
        <span className="block text-base font-semibold text-analogue-ink">
          {label}
        </span>
        {description ? (
          <span className="mt-1 block text-sm leading-6 text-analogue-muted">
            {description}
          </span>
        ) : null}
      </span>
    </button>
  );
}
