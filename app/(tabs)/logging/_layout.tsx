import { Stack } from "expo-router";
import React from "react";

export default function LoggingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="addEntry" />
      <Stack.Screen name="editEntry" />
    </Stack>
  );
}
