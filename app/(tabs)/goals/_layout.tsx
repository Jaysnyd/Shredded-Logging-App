import { GoalsProvider } from "@/context/GoalsContext";
import { Stack } from "expo-router";
import React from "react";

export default function GoalsLayout() {
  return (
    <GoalsProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="addGoal" />
        <Stack.Screen name="editGoal" />
      </Stack>
    </GoalsProvider>
  );
}
