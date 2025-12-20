import React from "react";
import { Text, View } from "react-native";

const EmptyGoalsScreen = () => {
  return (
    <View className="bg-accent  p-5 ml-6 mr-6 mt-8 rounded-xl items-center">
      <Text className="text-3xl font-extrabold pr-2 text-secondary font-style: italic">
        No Goals Yet!
      </Text>
      <Text className="mt-2 text-center">
        Setting clear goals helps you stay motivated, track progress, and turn
        daily workouts into long-term results. Goals keep you focused and
        accountable. Start with one goal and build from there!
      </Text>
    </View>
  );
};

export default EmptyGoalsScreen;
