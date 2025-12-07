import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddEntry = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-red font-bold font-style: italic">
        Add Entry Sub-Screen
      </Text>
    </SafeAreaView>
  );
};

export default AddEntry;
