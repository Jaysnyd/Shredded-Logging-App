import { useLogging } from "@/context/LogContext";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

type Props = {
  workoutId: string;
  name: string;
  focus: string;
  date: string;
};

const WorkoutLogItem = ({ workoutId, name, focus, date }: Props) => {
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
      {/* Description  */}
      <View className="ml-4">
        <Text className="text-lg font-bold text-black mb-1">{name}</Text>
        <Text className="text-m text-secondary font-semibold ">
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
