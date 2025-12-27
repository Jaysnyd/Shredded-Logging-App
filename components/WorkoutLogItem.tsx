import { useLogging } from "@/context/LogContext";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

type Props = {
  workoutId: string;
  name: string;
  focus: string;
  imgSrc: any;
  date: string;
};

const WorkoutLogItem = ({ workoutId, name, focus, imgSrc, date }: Props) => {
  const { addWorkoutToDate } = useLogging();

  const handleAddWorkout = () => {
    addWorkoutToDate(date, {
      id: uuidv4(), // unique log entry
      workoutId, // reference to premade workout
      name,
      focus,
    }); 
    router.back();
  };

  return (
    <View className="bg-white mt-4 mx-6 rounded-xl p-2 items-center flex-row">
      {/* IMAGE  */}
      <View>
        <Image source={imgSrc} className="w-24 h-24" />
      </View>

      {/* Description  */}
      <View className="ml-4">
        <Text className="text-base font-bold text-black mb-2">{name}</Text>
        <Text className="text-sm text-secondary font-semibold ">
          Focus: {focus}
        </Text>
      </View>

      {/* Add Button  */}
      <TouchableOpacity
        onPress={handleAddWorkout}
        className="absolute right-8 items-center bg-secondary px-4 py-2 rounded-full "
      >
        <Text className="text-white text-xl font-bold">{"+"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutLogItem;
