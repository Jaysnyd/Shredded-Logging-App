import { useRouter } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Log = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold font-style: italic">
        LOG Screen
      </Text>
      <Button
        title="ADD Workout Entry"
        onPress={() => router.push("/logging/addEntry")}
      />
      <Button
        title="EDIT Workout Entry"
        onPress={() => router.push("/logging/editEntry")}
      />
    </SafeAreaView>
  );
};

export default Log;
