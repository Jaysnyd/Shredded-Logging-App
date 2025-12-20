import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Log = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      <ScrollView>
        <Text>Logging</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Log;
