import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInCalendarDays } from "date-fns";
import React, { createContext, useContext, useEffect, useState } from "react";

import { PLAN_DEFINITIONS } from "@/constants/plans";
import { PlanDay, PlanType, TrainingPlan } from "@/types/plan";

const STORAGE_KEY = "training_plan";

type PlanContextValue = {
  plan: TrainingPlan | null;
  todaysPlanDay: PlanDay | null;
  getPlanDayForDate: (date: string) => PlanDay | null;
  setPlan: (type: PlanType, startIndex: number) => void;
  clearPlan: () => void;
  isLoaded: boolean;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlanState] = useState<TrainingPlan | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadPlan = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPlanState(JSON.parse(stored));
      }
      setIsLoaded(true);
    };

    loadPlan();
  }, []);

  // Saving a plan
  const setPlan = async (type: PlanType, startIndex: number) => {
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);

    const newPlan: TrainingPlan = {
      type,
      startIndex,
      startDate: startDate.toISOString(),
    };

    setPlanState(newPlan);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newPlan));
  };

  // Clearing a plan
  const clearPlan = async () => {
    setPlanState(null);
    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  // Determine today's focus
  const todaysPlanDay = React.useMemo<PlanDay | null>(() => {
    if (!plan || plan.type === "none") return null;

    const definition = PLAN_DEFINITIONS[plan.type];
    if (!definition || definition.cycle.length === 0) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(plan.startDate);
    start.setHours(0, 0, 0, 0);

    const rawDaysSinceStart = differenceInCalendarDays(today, start);
    const daysSinceStart = Math.max(rawDaysSinceStart, 0);

    const index = (plan.startIndex + daysSinceStart) % definition.cycle.length;

    return definition.cycle[index];
  }, [plan]);

  // Determine Plan day for Date (logging / past date purposes)
  const getPlanDayForDate = (date: string): PlanDay | null => {
    if (!plan || plan.type === "none") return null;

    const definition = PLAN_DEFINITIONS[plan.type];
    if (!definition || definition.cycle.length === 0) return null;

    const selectedDate = new Date(`${date}T00:00:00`);
    selectedDate.setHours(0, 0, 0, 0);

    const start = new Date(plan.startDate);
    start.setHours(0, 0, 0, 0);

    const rawDaysSinceStart = differenceInCalendarDays(selectedDate, start);

    const cycleLength = definition.cycle.length;

    const index =
      (((plan.startIndex + rawDaysSinceStart) % cycleLength) + cycleLength) %
      cycleLength;

    return definition.cycle[index];
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        todaysPlanDay,
        getPlanDayForDate,
        setPlan,
        clearPlan,
        isLoaded,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
};
