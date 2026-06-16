import Card from "../ui/Card.jsx";
import Tag from "../ui/Tag.jsx";

export default function ProfileSummary({ profile }) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Tag tone="blue">Analogue Profile</Tag>
        <Tag tone="green">{profile.readinessLabel}</Tag>
      </div>
      <h1 className="mt-5 text-3xl font-bold tracking-normal text-analogue-ink sm:text-4xl">
        {profile.profileType.title}
      </h1>
      <p className="mt-3 text-base leading-7 text-analogue-muted">
        {profile.profileType.description}
      </p>
    </Card>
  );
}
