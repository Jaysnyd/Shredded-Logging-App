import { LoggedWorkout } from "@/types/loggedWorkout";
import { createContext, useContext, useState } from "react";

// Types
type LogsByDate = {
  [date: string]: LoggedWorkout[];
};

type LoggingContextType = {
  logs: LogsByDate;
  addWorkoutToDate: (date: string, workout: LoggedWorkout) => void;
  getWorkoutsForDate: (date: string) => LoggedWorkout[];
  updateLoggedWorkout: (date: string, workout: LoggedWorkout) => void;
  removeLoggedWorkout: (date: string, workoutId: string) => void;
  getRecentWorkouts: (limit?: number) => LoggedWorkout[];
};

// Context
const LoggingContext = createContext<LoggingContextType | undefined>(undefined);

// Provider - Core Logic
export const LoggingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [logs, setLogs] = useState<LogsByDate>({});

  const addWorkoutToDate = (date: string, workout: LoggedWorkout) => {
    setLogs((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), workout],
    }));
  };

  const getWorkoutsForDate = (date: string) => {
    return logs[date] || [];
  };

  const updateLoggedWorkout = (date: string, updatedWorkout: LoggedWorkout) => {
    setLogs((prev) => ({
      ...prev,
      [date]: prev[date].map((w) =>
        w.id === updatedWorkout.id ? updatedWorkout : w
      ),
    }));
  };

  const removeLoggedWorkout = (date: string, workoutId: string) => {
    setLogs((prev) => ({
      ...prev,
      [date]: prev[date].filter((w) => w.id !== workoutId),
    }));
  };

  const getRecentWorkouts = (limit = 20) => {
    const allLogged = Object.values(logs).flat();

    const sorted = [...allLogged].sort((a, b) => b.createdAt - a.createdAt);

    const seen = new Set<string>();
    const unique = [];

    for (const log of sorted) {
      if (!seen.has(log.workoutId)) {
        seen.add(log.workoutId);
        unique.push(log);
      }
      if (unique.length === limit) break;
    }
    return unique;
  };

  return (
    <LoggingContext.Provider
      value={{
        logs,
        addWorkoutToDate,
        getWorkoutsForDate,
        updateLoggedWorkout,
        removeLoggedWorkout,
        getRecentWorkouts,
      }}
    >
      {children}
    </LoggingContext.Provider>
  );
};

export const useLogging = () => {
  const context = useContext(LoggingContext);
  if (!context) {
    throw new Error("useLogging must be used within LoggingProvider");
  }
  return context;
};
