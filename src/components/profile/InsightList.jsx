import Card from "../ui/Card.jsx";

export default function InsightList({ title, items }) {
  return (
    <Card className="p-5">
      <h2 className="text-lg font-bold text-analogue-ink">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-analogue-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-analogue-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
