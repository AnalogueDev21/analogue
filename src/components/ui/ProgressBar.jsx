export default function ProgressBar({ value }) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
      <div
        className="h-full rounded-full bg-analogue-green transition-all duration-300"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
