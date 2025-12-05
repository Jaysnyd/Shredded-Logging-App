import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const goals = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold font-style: italic">
        GOALS Screen
      </Text>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default goals;
