import Calendar from "@/components/Calendar";
import DateStrip from "@/components/DateStrip";
import EntryCard from "@/components/EntryCard";
import { useLogging } from "@/context/LogContext";
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
  console.log(workouts); // DELETE CONSOLE LOG L8R

  // Header Date Formatting
  const dateObj = new Date(`${selectedDate}T00:00:00`);

  const weekday = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const fullDate = dateObj.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });

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

        {/* <PlanDayHeader /> */}

        {/* LOGGED WORKOUTS FOR SELECTED DATE:  */}
        <ScrollView
          className="w-full flex-1 mt-2"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          <View className="w-full">
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
        className="bg-secondary w-1/2 absolute bottom-28 p-4 rounded-xl mt-4 items-center"
      >
        <Text className="text-white text-lg font-bold">Add Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Log;
