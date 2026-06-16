import ScoreRing from "../ui/ScoreRing.jsx";

export default function ScoreOverview({ scores }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <ScoreRing label="Knowledge Score" value={scores.knowledge} tone="blue" />
      <ScoreRing label="Risk Score" value={scores.risk} tone="amber" />
      <ScoreRing
        label="Financial Readiness Score"
        value={scores.financialReadiness}
        tone="green"
      />
      <ScoreRing label="Goal Clarity Score" value={scores.goalClarity} tone="blue" />
    </div>
  );
}
