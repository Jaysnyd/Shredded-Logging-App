import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// type Goal = {
//   id: string;
//   name: string;
//   pr: string;
//   image: string;
// };

// type Props = {
//   goal: Goal;
//   onPress: any;
// };

const GoalsCard = ({ goal, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-white shadow mt-3 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
        <View>
          <Image source={goal.image} className="w-24 h-24" />
        </View>

        <View className="ml-3">
          <Text className="text-base font-bold text-black">{goal.name}</Text>
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


