import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddGoal = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-red font-bold font-style: italic">
        Add Goal Sub-Screen
      </Text>
    </SafeAreaView>
  );
};

export default AddGoal;
