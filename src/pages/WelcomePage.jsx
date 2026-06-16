import { ArrowRight } from "lucide-react";
import PageContainer from "../components/layout/PageContainer.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { useDiscoveryStore } from "../store/discoveryStore.js";
import { useProfileStore } from "../store/profileStore.js";

export default function WelcomePage() {
  const startDiscovery = useDiscoveryStore((state) => state.startDiscovery);
  const resetDiscovery = useDiscoveryStore((state) => state.resetDiscovery);
  const resetProfile = useProfileStore((state) => state.resetProfile);

  const handleStart = () => {
    resetProfile();
    resetDiscovery();
    startDiscovery();
  };

  return (
    <PageContainer className="justify-center gap-8">
      <div className="space-y-5">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-analogue-blue">
          Analogue
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-normal text-analogue-ink sm:text-6xl">
          รู้จักตัวเองก่อนเริ่มเรียนการลงทุน
        </h1>
        <p className="max-w-xl text-lg leading-8 text-analogue-muted">
          Analogue ช่วยประเมินพื้นฐาน เป้าหมาย ความพร้อม และวิธีตัดสินใจของคุณ
          แล้วสร้างเส้นทางการเรียนรู้ที่เหมาะกับคุณ
        </p>
      </div>

      <Card className="p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-analogue-ink">เริ่มจากผู้ใช้</p>
            <p className="mt-2 text-sm leading-6 text-analogue-muted">
              ระบบจะทำความรู้จักคุณก่อน ไม่เริ่มจากตลาด
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-analogue-ink">เรียนผ่านการคิด</p>
            <p className="mt-2 text-sm leading-6 text-analogue-muted">
              คำถามถูกออกแบบให้ช่วยสะท้อนจุดเริ่มต้นของคุณ
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-analogue-ink">Mentor ไม่ใช่ Guru</p>
            <p className="mt-2 text-sm leading-6 text-analogue-muted">
              ไม่มีการบอกซื้อขายหุ้น มีแต่เส้นทางเรียนรู้ที่ชัดขึ้น
            </p>
          </div>
        </div>
      </Card>

      <Button className="w-full sm:w-fit" size="lg" onClick={handleStart}>
        เริ่มทำความรู้จักตัวเอง
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </PageContainer>
  );
}
