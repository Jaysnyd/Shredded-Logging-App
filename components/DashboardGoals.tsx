import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  imgSrc: any;
  goal: string;
  personalRecord: string;
};

const DashboardGoals = ({ imgSrc, goal, personalRecord }: Props) => {
  return (
    <View className="bg-accent p-1 ml-6 mr-6 mt-2 rounded-xl flex-row items-center">
      {/* LEFT  / GOAL ICON  */}
      <View className="w-1/4 ml-2">
        <Image source={imgSrc} className="w-24 h-24" />
      </View>

      {/* MIDDLE / GOAL INFO & LEVEL  */}
      <View className="flex-column ml-5">
        <Text className="text-base text-primary font-semibold text-black text-lg">
          {goal}
        </Text>
        <Text className=" text-gray-500 text-base">
          Current PR: {personalRecord}
        </Text>
      </View>
      {/* BUTTON TO GOALS SUBPAGE - Edit Goal  */}
      {/* CHANGE LATER: For the moment, use the goal page to redirect user. Once sub-page is built re-direct to that sub-page with for that goal.  */}
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/goals")}
        className="absolute right-4 items-center bg-secondary px-4 py-2 rounded-full ml-14"
      >
        <Text className="text-white font-semibold">{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardGoals;
