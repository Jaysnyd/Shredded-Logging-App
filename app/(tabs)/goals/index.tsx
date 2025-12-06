import { useRouter } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Goals = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold font-style: italic">
        GOALS Screen
      </Text>
      <Button
        title="EDIT Goal Entry"
        onPress={() => router.push("/goals/editGoal")}
      />
      <Button
        title="ADD Goal Entry"
        onPress={() => router.push("/goals/addGoal")}
      />
    </SafeAreaView>
  );
};

export default Goals;
