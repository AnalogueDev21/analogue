import Card from "../ui/Card.jsx";
import OptionCard from "../ui/OptionCard.jsx";

export default function QuestionCard({ question, selectedAnswerId, onSelect }) {
  return (
    <Card className="p-5 sm:p-6">
      <p className="text-sm font-semibold text-analogue-blue">{question.category}</p>
      <h1 className="mt-3 text-2xl font-bold tracking-normal text-analogue-ink sm:text-3xl">
        {question.prompt}
      </h1>
      <p className="mt-3 text-base leading-7 text-analogue-muted">
        {question.helper}
      </p>

      <div className="mt-6 space-y-3">
        {question.answers.map((answer) => (
          <OptionCard
            key={answer.id}
            label={answer.label}
            description={answer.description}
            selected={selectedAnswerId === answer.id}
            onClick={() => onSelect(question.id, answer)}
          />
        ))}
      </div>
    </Card>
  );
}
