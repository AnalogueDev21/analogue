import { CheckCircle2 } from "lucide-react";
import Card from "../ui/Card.jsx";

export default function LearningPathCard({ path }) {
  return (
    <Card className="p-5 sm:p-6">
      <p className="text-sm font-semibold text-analogue-blue">Recommended Path</p>
      <h2 className="mt-2 text-2xl font-bold text-analogue-ink">{path.title}</h2>
      <p className="mt-3 text-base leading-7 text-analogue-muted">
        {path.description}
      </p>
      <div className="mt-5 space-y-3">
        {path.steps.map((step) => (
          <div key={step} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-analogue-green" />
            <p className="text-sm font-medium leading-6 text-analogue-ink">{step}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
