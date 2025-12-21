import Calendar from "@/components/Calendar";
import DateStrip from "@/components/DateStrip";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Log = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Formatting and selecting todays date
  const today = new Date();
  const formattedToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const [selectedDate, setSelectedDate] = useState(formattedToday);

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
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center ">
        SHREDDED
      </Text>

      {/* DATE HEADER - DATESTRIP - CALENDAR COMPONENT */}
      <View className="mt-10">
        <View className="ml-4 mb-8 flex-row items-center">
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

        <DateStrip selectedDate={selectedDate} onSelectDate={setSelectedDate} />

        <Calendar
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </View>
    </SafeAreaView>
  );
};

export default Log;
