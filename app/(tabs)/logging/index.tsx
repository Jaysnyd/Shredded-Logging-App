import Calendar from "@/components/Calendar";
import DateStrip from "@/components/DateStrip";
import EntryCard from "@/components/EntryCard";
import { useLogging } from "@/context/LogContext";
import { usePlan } from "@/context/PlanContext";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Log = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  // Formatting and selecting todays date
  const today = new Date();
  const formattedToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const [selectedDate, setSelectedDate] = useState(formattedToday);

  // USE OF LOG CONTEXT
  const { getWorkoutsForDate } = useLogging();
  const workouts = getWorkoutsForDate(selectedDate);

  // Header Date Formatting
  const dateObj = new Date(`${selectedDate}T00:00:00`);

  const weekday = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const fullDate = dateObj.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });

  // Todays Plan Day
  const { getPlanDayForDate } = usePlan();
  const planDayForSelectedDate = getPlanDayForDate(selectedDate);

  const isNoPlan =
    planDayForSelectedDate?.key === "none" || !planDayForSelectedDate;

  console.log("Plan Day for Selected Date:", planDayForSelectedDate);
  console.log("selectedDate:", selectedDate);
  return (
    <SafeAreaView className="flex-1 bg-white items-center align-center">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center ">
        SHREDDED
      </Text>

      <View className="mt-4 w-full flex-1">
        <View className="ml-4 mt-2 mb-8 flex-row items-center">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesome name="calendar" size={36} color="black" />
          </TouchableOpacity>

          <View className="flex-column ml-4">
            <Text className="text-gray-500 text-xl">{weekday}</Text>
            <Text className="text-primary text-3xl font-bold -mt-2">
              {fullDate}
            </Text>
          </View>
        </View>

        {/* COMPONENTS  */}
        <View className="w-full">
          <DateStrip
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />

          <Calendar
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </View>

        {/* TODAYS FOCUS HEADER */}
        <View className="-mt-9 align-center text-center bg-accent p-4 mx-6 rounded-xl flex-row justify-center items-center">
          {isNoPlan ? (
            <>
              <Text className="text-sm text-black font-bold -mt-1">
                Todays Focus: Shred your way!
              </Text>
            </>
          ) : (
            <Text className="text-sm text-black font-bold">
              Todays Focus: {planDayForSelectedDate.focus.join(", ")}
            </Text>
          )}
        </View>

        {/* LOGGED WORKOUTS FOR SELECTED DATE:  */}
        <ScrollView
          className="w-full flex-1 mt-2"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          <View className="w-full">
            {workouts.length === 0 ? (
              <Text className="text-center text-gray-400 mt-24">
                No Workouts Logged Yet
              </Text>
            ) : null}

            {workouts.map((workout) => (
              <EntryCard
                key={workout.id}
                workout={workout}
                onPress={() =>
                  router.push(`/logging/${selectedDate}/${workout.id}`)
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>

      {/* ADD WORKOUT  */}
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/logging/addEntry",
            params: { date: selectedDate },
          })
        }
        className="bg-secondary absolute bottom-28 rounded-full w-16 h-16 items-center justify-center border-4 border-accent"
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Log;
