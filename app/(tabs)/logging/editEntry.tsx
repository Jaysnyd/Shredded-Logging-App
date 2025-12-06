import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const editEntry = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-red font-bold font-style: italic">
        Edit Entry Sub-Screen
      </Text>
    </SafeAreaView>
  );
};

export default editEntry;
