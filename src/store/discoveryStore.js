import { create } from "zustand";
import { persist } from "zustand/middleware";
import { discoveryQuestions } from "../data/discoveryQuestions.js";

export const useDiscoveryStore = create(
  persist(
    (set, get) => ({
      currentStep: 0,
      hasStarted: false,
      answers: {},
      isComplete: false,
      startDiscovery: () => set({ currentStep: 0, hasStarted: true, isComplete: false }),
      setAnswer: (questionId, answer) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: answer,
          },
        })),
      nextStep: () => {
        const nextStep = get().currentStep + 1;
        if (nextStep >= discoveryQuestions.length) {
          set({ isComplete: true });
          return;
        }
        set({ currentStep: nextStep });
      },
      previousStep: () =>
        set((state) => ({
          currentStep: Math.max(0, state.currentStep - 1),
          isComplete: false,
        })),
      resetDiscovery: () =>
        set({ currentStep: 0, hasStarted: false, answers: {}, isComplete: false }),
    }),
    {
      name: "analogue-discovery",
    },
  ),
);
