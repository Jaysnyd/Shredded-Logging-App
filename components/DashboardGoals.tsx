import { Goal } from "@/types/goal";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  goal: Goal;
  onPress: () => void;
};

const DashboardGoals = ({ goal, onPress }: Props) => {
  return (
    <View className="bg-accent mt-3 ml-2 mr-2 rounded-xl flex-row items-center">
      {/* Left Goal Image:  */}
      <View className="w-1/4 ml-2">
        <Image source={goal.image} className="w-24 h-24" />
      </View>

      {/* Middle / Goal Name and PR:  */}
      <View className="flex-column ml-5">
        <Text className="text-base text-primary font-semibold text-black text-lg">
          {goal.name}
        </Text>
        <Text className="text-gray-500 text-base">Current PR: {goal.pr}</Text>
      </View>

      {/* Button to goals page:  */}
      <TouchableOpacity
        onPress={onPress}
        className="absolute right-4 items-center bg-secondary px-4 py-2 rounded-full ml-14"
      >
        <Text className="text-white font-semibold">{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardGoals;
