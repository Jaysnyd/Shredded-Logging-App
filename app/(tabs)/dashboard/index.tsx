import DashboardChart from "@/components/DashboardChart";
import DashboardGoals from "@/components/DashboardGoals";
import TodaysFocus from "@/components/TodaysFocus";
import NoGoals from "@/components/NoGoals";
import { useGoals } from "@/context/GoalsContext";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const { goals } = useGoals();
  const router = useRouter();

  const topGoals = goals.slice(0, 2);

  // TEST if goals array is updated
  // useEffect(() => {
  //   console.log("Dash UPDATE", goals);
  // }, [goals]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>
      <ScrollView>
        <Text className="text-md text-gray-400 ml-7 mt-8 w-full">
          Welcome Back, Billy!
        </Text>

        {/* TODAYS FOCUS  */}
        <TodaysFocus
          title="Push Day"
          subtitle="Chest, Shoulders, Triceps"
          label="Todays Focus"
          onPlanPress={() => router.push("/dashboard/changePlan")}
          onStartPress={() => router.push("/logging")}
        />

        {/* LOGGING CONSISTENCY CHART  */}
        <Text className="font-semibold text-xl text-black ml-7 mt-9 w-full">
          Activity Progress
        </Text>
        <DashboardChart />

        {/* GOALS SECTION  */}
        <Text className="font-semibold text-xl text-black ml-7 mt-1 w-full">
          Goals
        </Text>

        {/* CURRENT GOALS LIST */}

        {goals.length === 0 ? (
          <NoGoals />
        ) : (
          <View className="px-4 pb-6">
            {topGoals.map((goal) => (
              <DashboardGoals
                key={goal.id}
                goal={goal}
                goalArr={goals}
                onPress={() => router.push(`/goals/${goal.id}`)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
