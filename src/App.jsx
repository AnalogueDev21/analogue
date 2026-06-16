import { useMemo } from "react";
import AppShell from "./components/layout/AppShell.jsx";
import DiscoveryPage from "./pages/DiscoveryPage.jsx";
import ProfileResultPage from "./pages/ProfileResultPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import { useDiscoveryStore } from "./store/discoveryStore.js";
import { useProfileStore } from "./store/profileStore.js";

export default function App() {
  const currentStep = useDiscoveryStore((state) => state.currentStep);
  const hasStarted = useDiscoveryStore((state) => state.hasStarted);
  const isComplete = useDiscoveryStore((state) => state.isComplete);
  const profile = useProfileStore((state) => state.profile);

  const page = useMemo(() => {
    if (profile) return <ProfileResultPage />;
    if (hasStarted || isComplete || currentStep > 0) return <DiscoveryPage />;
    return <WelcomePage />;
  }, [currentStep, hasStarted, isComplete, profile]);

  return <AppShell>{page}</AppShell>;
}
