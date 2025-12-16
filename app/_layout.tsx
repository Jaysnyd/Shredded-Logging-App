import { GoalsProvider } from "@/context/GoalsContext";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  return (
    <GoalsProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </SafeAreaProvider>
    </GoalsProvider>
  );
}
