import { ArrowLeft, ArrowRight } from "lucide-react";
import DiscoveryProgress from "../components/discovery/DiscoveryProgress.jsx";
import QuestionCard from "../components/discovery/QuestionCard.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";
import Button from "../components/ui/Button.jsx";
import { discoveryQuestions } from "../data/discoveryQuestions.js";
import { useDiscoveryStore } from "../store/discoveryStore.js";
import { useProfileStore } from "../store/profileStore.js";

export default function DiscoveryPage() {
  const currentStep = useDiscoveryStore((state) => state.currentStep);
  const answers = useDiscoveryStore((state) => state.answers);
  const setAnswer = useDiscoveryStore((state) => state.setAnswer);
  const nextStep = useDiscoveryStore((state) => state.nextStep);
  const previousStep = useDiscoveryStore((state) => state.previousStep);
  const resetDiscovery = useDiscoveryStore((state) => state.resetDiscovery);
  const generateProfileFromAnswers = useProfileStore(
    (state) => state.generateProfileFromAnswers,
  );

  const question = discoveryQuestions[currentStep];
  const selectedAnswer = question ? answers[question.id] : null;

  const handleNext = () => {
    if (currentStep === discoveryQuestions.length - 1) {
      generateProfileFromAnswers(answers);
      return;
    }
    nextStep();
  };

  return (
    <PageContainer className="gap-6 py-3">
      <DiscoveryProgress current={currentStep} total={discoveryQuestions.length} />

      <QuestionCard
        question={question}
        selectedAnswerId={selectedAnswer?.id}
        onSelect={setAnswer}
      />

      <div className="flex items-center justify-between gap-3">
        <Button
          variant="secondary"
          onClick={currentStep === 0 ? resetDiscovery : previousStep}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {currentStep === 0 ? "เริ่มใหม่" : "กลับ"}
        </Button>

        <Button disabled={!selectedAnswer} onClick={handleNext}>
          {currentStep === discoveryQuestions.length - 1 ? "ดูผลลัพธ์" : "ต่อไป"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </PageContainer>
  );
}
