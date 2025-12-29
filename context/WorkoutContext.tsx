import { Workout } from "@/types/workout";
import { createContext, useContext, useState } from "react";

// Types
type WorkoutContextType = {
  customWorkouts: Workout[];
  addCustomWorkout: (workout: Workout) => void;
  updateCustomWorkout: (workout: Workout) => void;
  removeCustomWorkout: (workoutId: string) => void;
};

// Context
const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

// Provider
export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customWorkouts, setCustomWorkouts] = useState<Workout[]>([]);

  const addCustomWorkout = (workout: Workout) => {
    setCustomWorkouts((prev) => [...prev, workout]);
  };

  const updateCustomWorkout = (updatedWorkout: Workout) => {
    setCustomWorkouts((prev) =>
      prev.map((w) => (w.id === updatedWorkout.id ? updatedWorkout : w))
    );
  };

  const removeCustomWorkout = (workoutId: string) => {
    setCustomWorkouts((prev) => prev.filter((w) => w.id !== workoutId));
  };

  return (
    <WorkoutContext.Provider
      value={{
        customWorkouts,
        addCustomWorkout,
        updateCustomWorkout,
        removeCustomWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkouts = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkouts must be used within WorkoutProvider");
  }
  return context;
};
