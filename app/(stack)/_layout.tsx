import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      {}
      <Stack.Screen
        name="changePlan"
        options={{
          title: "Change Plan",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
