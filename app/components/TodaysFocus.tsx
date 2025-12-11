import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
  label: string;
  onPlanPress: any;
  onStartPress: any;
};

export default function TodaysFocus({
  title = "Push Day",
  subtitle = "Chest, Shoulders, Triceps",
  label = "Today's Focus",
  onPlanPress,
  onStartPress,
}: Props) {
  return (
    <View className="bg-accent p-5 ml-6 mr-6 mt-2 rounded-xl flex-row justify-between items-center">
      {/* Left Text Section  */}
      <View>
        <Text className="text-base font-semibold text-black">{label}</Text>
        <Text className="text-2xl font-extrabold mt-1 text-black font-style: italic">
          {title}
        </Text>
        <Text className="text-sm text-black ">{subtitle}</Text>
      </View>

      {/* Right Button Section  */}
      <View className="flex-col space-y-3">
        {/* View and Change Plan  */}
        <TouchableOpacity
          onPress={onPlanPress}
          className="items-center bg-primary px-4 py-2 mb-3 rounded-full"
        >
          <Text className="text-white font-semibold text-sm">Change Plan</Text>
        </TouchableOpacity>

        {/* Start Logging Workout  */}
        <TouchableOpacity
          onPress={onStartPress}
          className="items-center bg-primary px-4 py-2 rounded-full"
        >
          <Text className="text-white font-semibold text-sm">Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
