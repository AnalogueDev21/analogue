import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateProfile } from "../services/profileGenerator.js";

export const useProfileStore = create(
  persist(
    (set) => ({
      profile: null,
      generateProfileFromAnswers: (answers) =>
        set({ profile: generateProfile(answers) }),
      resetProfile: () => set({ profile: null }),
    }),
    {
      name: "analogue-profile",
    },
  ),
);
