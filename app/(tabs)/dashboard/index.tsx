import DashboardChart from "@/components/DashboardChart";
import DashboardGoals from "@/components/DashboardGoals";
import TodaysFocus from "@/components/TodaysFocus";
import { useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// CHANGE LATER:
// Static Data for goals now.
// Will change to dynamic, to represent what users sets as their goals.
// IF no goals, Add just one goal box to tell user to set a goal!
const benchImg = require("@/assets/images/bench-press.png");
const squatImg = require("@/assets/images/squatting.png");

export default function Dashboard() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white align-center">
      <ScrollView>
        <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
          SHREDDED
        </Text>

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

        <DashboardGoals
          imgSrc={benchImg}
          goal="Bench Press 900lbs"
          personalRecord="750lbs"
        />

        <DashboardGoals
          imgSrc={squatImg}
          goal="Squat 1600lbs"
          personalRecord="1250lbs"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
