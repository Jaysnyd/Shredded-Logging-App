import { StaticWorkouts } from "@/data/PreMadeWorkouts";
import { LoggedWorkout } from "@/types/loggedWorkout";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  workout: LoggedWorkout;
  onPress: () => void;
};

const EntryCard = ({ workout, onPress }: Props) => {
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-white shadow mt-3 mr-6 ml-6 p-2 rounded-xl flex-row items-center">

        <View className="ml-3 w-3/4">
          <Text className="text-lg font-bold text-black mb-1">
            {workout.name}
          </Text>
          <Text className="text-m text-secondary font-semibold">
            Focus: {workout.focus}
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

export default EntryCard;
