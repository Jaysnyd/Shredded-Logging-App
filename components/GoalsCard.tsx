import { Goal } from "@/types/goal";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type GoalsCardProps = {
  goal: Goal;
  onPress: () => void;
};

const GoalsCard = ({ goal, onPress }: GoalsCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-white shadow mt-3 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
        <View>
          <Image source={goal.image} className="w-24 h-24" />
        </View>

        <View className="ml-2 w-1/2">
          <Text className="text-base font-bold text-black mb-2">
            {goal.name}
          </Text>
          <Text className="text-sm text-secondary font-semibold ">
            Current PR: {goal.pr}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onPress}
          className="absolute right-4 items-center bg-secondary px-4 py-2 rounded-full ml-14"
        >
          <Text className="text-white font-semibold">{">"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default GoalsCard;
