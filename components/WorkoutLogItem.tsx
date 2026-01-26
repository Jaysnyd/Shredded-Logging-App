import { useLogging } from "@/context/LogContext";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

type Props = {
  workoutId: string;
  name: string;
  focus: string;
  weight: string;
  sets: string;
  date: string;
  source: string;
};

const WorkoutLogItem = ({
  workoutId,
  name,
  focus,
  weight,
  sets,
  date,
  source,
}: Props) => {
  const { addWorkoutToDate } = useLogging();

  // Disable touchable opacity if workout is premade
  const isPremade = source === "premade";

  const handleAddWorkout = () => {
    addWorkoutToDate(date, {
      id: uuidv4(), // unique log entry
      workoutId, // reference to premade workout
      name,
      focus,
      weight,
      sets,
      createdAt: Date.now(),
    });
    router.back();
  };

  return (
    <TouchableOpacity
      disabled={isPremade}
      onPress={() => {
        router.push(`/workouts/${workoutId}`);
      }}
    >
      <View className="bg-white mt-4 mx-6 rounded-xl p-2 items-center flex-row">
        {/* Description  */}

        <View className="ml-1">
          <Text className="text-lg font-bold text-black mb-1">{name}</Text>

          <View className="flex-row gap-4">
            <Text className="text-sm text-secondary font-bold ">
              Focus: {focus}
            </Text>

            {weight !== "" && (
              <Text className="text-sm text-secondary font-bold ">
                Weight: {weight}
              </Text>
            )}

            {sets !== "" && (
              <Text className="text-sm text-secondary font-bold ">
                Sets: {sets}
              </Text>
            )}
          </View>
        </View>

        {/* Add Button  */}
        <TouchableOpacity
          onPress={handleAddWorkout}
          className="absolute right-3 items-center bg-secondary px-4 py-2 rounded-full "
        >
          <Text className="text-white text-xl font-bold">{"+"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutLogItem;
