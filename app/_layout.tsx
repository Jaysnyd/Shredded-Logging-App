import { GoalsProvider } from "@/context/GoalsContext";
import { LoggingProvider } from "@/context/LogContext";
import { PlanProvider } from "@/context/PlanContext";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  return (
    <PlanProvider>
      <WorkoutProvider>
        <LoggingProvider>
          <GoalsProvider>
            <SafeAreaProvider>
              <StatusBar style="dark" />
              <Stack screenOptions={{ headerShown: false }}></Stack>
            </SafeAreaProvider>
          </GoalsProvider>
        </LoggingProvider>
      </WorkoutProvider>
    </PlanProvider>
  );
}
