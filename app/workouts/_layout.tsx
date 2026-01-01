import { Stack } from "expo-router";
import React from "react";

export default function WorkoutsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="create" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
