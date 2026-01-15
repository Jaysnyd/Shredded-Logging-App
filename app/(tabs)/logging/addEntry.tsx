import SearchBar from "@/components/SearchBar";
import WorkoutLogList from "@/components/WorkoutLogList";
import { useLogging } from "@/context/LogContext";
import { useWorkouts } from "@/context/WorkoutContext";
import { StaticWorkouts } from "@/data/PreMadeWorkouts";
import { Workout } from "@/types/workout";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddEntry = () => {
  const { date } = useLocalSearchParams<{ date: string }>();
  const router = useRouter();

  const { getRecentWorkouts } = useLogging();
  const recentLogs = getRecentWorkouts();

  const { customWorkouts } = useWorkouts();

  const [activeSource, setActiveSource] = useState("recents");
  let workoutsToDisplay: Workout[] = [];

  // Workouts List Selection
  switch (activeSource) {
    case "premade":
      workoutsToDisplay = StaticWorkouts;
      break;
    case "custom":
      workoutsToDisplay = customWorkouts;
      break;
    case "recents":
      workoutsToDisplay = recentLogs.map((log) => ({
        id: log.workoutId,
        name: log.name,
        focus: log.focus,
        weight: log.weight,
        sets: log.sets,
        source: "recent",
      }));
      break;
  }

  return (
    <SafeAreaView className="flex-1 bg-white items-center align-center">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      {/* Workout Selection Section  */}
      <View className="mt-2 bg-primary w-full items-center flex-1 items-center mb-16">
        <Text className="text-3xl text-white font-bold mt-4 italic">
          Workouts
        </Text>

        {/* Search Bar  */}
        <SearchBar />

        {/* Workout Log List, Recents-Custom-Pre.Made */}
        <View className="w-full items-center">
          <View className="flex-row gap-8">
            <TouchableOpacity onPress={() => setActiveSource("recents")}>
              <Text
                className={`text-m ${
                  activeSource === "recents"
                    ? "text-white font-bold underline underline-offset-8"
                    : "text-white"
                }`}
              >
                Recents
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveSource("custom")}>
              <Text
                className={`text-m ${
                  activeSource === "custom"
                    ? "text-white font-bold underline underline-offset-8"
                    : "text-white"
                }`}
              >
                My Workouts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveSource("premade")}>
              <Text
                className={`text-m ${
                  activeSource === "premade"
                    ? "text-white font-bold underline underline-offset-8"
                    : "text-white"
                }`}
              >
                Pre-Made
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* List displaying workouts that can be logged  */}
        <WorkoutLogList workoutsToShow={workoutsToDisplay} curDate={date} />
      </View>
      {/* Create Workout Button  */}
      {activeSource === "custom" && (
        <TouchableOpacity
          onPress={() => router.push("/workouts/create")}
          className="bg-secondary w-1/2  absolute bottom-28 p-4 rounded-xl items-center"
        >
          <Text className="text-white text-lg font-bold">Create Workout +</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default AddEntry;
