import { RotateCcw } from "lucide-react";
import LearningPathCard from "../components/profile/LearningPathCard.jsx";
import ProfileSummary from "../components/profile/ProfileSummary.jsx";
import ScoreOverview from "../components/profile/ScoreOverview.jsx";
import InsightList from "../components/profile/InsightList.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";
import Button from "../components/ui/Button.jsx";
import { useDiscoveryStore } from "../store/discoveryStore.js";
import { useProfileStore } from "../store/profileStore.js";

export default function ProfileResultPage() {
  const profile = useProfileStore((state) => state.profile);
  const resetProfile = useProfileStore((state) => state.resetProfile);
  const resetDiscovery = useDiscoveryStore((state) => state.resetDiscovery);

  const handleRestart = () => {
    resetProfile();
    resetDiscovery();
  };

  if (!profile) return null;

  return (
    <PageContainer className="gap-5 py-3">
      <ProfileSummary profile={profile} />
      <ScoreOverview scores={profile.scores} />

      <div className="grid gap-3 sm:grid-cols-2">
        <InsightList title="จุดแข็ง" items={profile.strengths} />
        <InsightList title="สิ่งที่ควรเรียนต่อ" items={profile.weaknesses} />
      </div>

      <LearningPathCard path={profile.learningPath} />

      <div className="pb-4 pt-2">
        <Button variant="secondary" className="w-full sm:w-fit" onClick={handleRestart}>
          <RotateCcw className="mr-2 h-4 w-4" />
          ทำ Discovery ใหม่
        </Button>
      </div>
    </PageContainer>
  );
}
