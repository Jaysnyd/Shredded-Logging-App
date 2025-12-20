import EmptyGoalsScreen from "@/components/EmptyGoalsScreen";
import GoalsCard from "@/components/GoalsCard";
import { useGoals } from "@/context/GoalsContext";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Goals = () => {
  const { goals } = useGoals();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white items-center align-center">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      {/* HEADER  */}
      <View className=" w-3/4 mt-12 items-left align-left">
        <Text className="text-3xl font-extrabold pr-2 text-black font-style: italic">
          My Goals
        </Text>
        <Text className="text-gray-500 mb-2">
          Set Goals, Be Consistent, See Results.
        </Text>
        <View className="w-full items-center pt-3">
          <Image
            source={require("@/assets/images/goals-panda.png")}
            className="w-28 h-28"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* CURRENT GOALS LIST */}
      {goals.length === 0 ? (
        <EmptyGoalsScreen />
      ) : (
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          <View className="w-full">
            {goals.map((goal) => (
              <GoalsCard
                key={goal.id}
                goal={goal}
                onPress={() => router.push(`/goals/${goal.id}`)}
              />
            ))}
          </View>
        </ScrollView>
      )}

      {/* ADD GOAL BUTTON  */}
      <TouchableOpacity
        onPress={() => router.push("/goals/addGoal")}
        className="bg-secondary w-1/2 absolute bottom-28 p-4 rounded-xl mt-4 items-center"
      >
        <Text className="text-white text-lge font-bold">ADD GOAL</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Goals;
