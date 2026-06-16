import ProgressBar from "../ui/ProgressBar.jsx";

export default function DiscoveryProgress({ current, total }) {
  const value = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm font-medium text-analogue-muted">
        <span>Discovery Engine</span>
        <span>
          {current + 1}/{total}
        </span>
      </div>
      <ProgressBar value={value} />
    </div>
  );
}
