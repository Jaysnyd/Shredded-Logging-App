// app/(stack)/_layout.tsx

import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      {}
      <Stack.Screen
        name="changePlan"
        options={{
          // The title to show in the header when this screen is active
          title: "Change Plan",
          // You can customize the header here, e.g., to show a back button
          headerShown: true,
        }}
      />

      {/* add <Stack.Screen> definitions for any other 
        non-tab screen you move into the (stack) folder here.
      */}
    </Stack>
  );
}
