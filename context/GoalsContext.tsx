import { Goal } from "@/types/goal";
import { createContext, useContext, useState } from "react";

type GoalsContextType = {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  deleteGoal: (id: string) => void;
  updateGoal: (goal: Goal) => void;
};

const GoalsContext = createContext<GoalsContextType | null>(null);

export const GoalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = (goal: Goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const deleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const updateGoal = (updatedGoal: Goal) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
    );
  };

  return (
    <GoalsContext.Provider value={{ goals, addGoal, deleteGoal, updateGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }
  return context;
};
