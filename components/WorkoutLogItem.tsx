import React from "react";
import { Text, View } from "react-native";

type Props = {
  name: string;
  focus: string;
  imgSrc: string;
};

const WorkoutLogItem = ({ name, focus, imgSrc }: Props) => {
  return (
    <View className="w-full bg-white mt-7 ml-6 mr-6">
      <Text className="text-black text-3xl">WorkoutLogItem</Text>
    </View>
  );
};

export default WorkoutLogItem;
