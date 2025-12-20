import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const NoGoals = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/(tabs)/goals/addGoal");
  };

  return (
    <View className="bg-accent p-5 ml-6 mr-6 mt-2 rounded-xl flex-row justify-between items-center">
      <View>
        <Text className="text-black font-bold">You dont have any Goals,</Text>
        <Text className="text-gray-600 mt-1">
          Set something to Shred towards!
        </Text>

        <Text className="text-secondary font-bold italic mt-4">
          Keep track of your own Goals and Prs
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={handlePress}
          className="items-center bg-secondary px-4 py-2 rounded-full ml-9"
        >
          <Text className="text-white font-semibold">{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoGoals;
