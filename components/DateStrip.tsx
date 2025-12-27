import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const getDateRange = (centerDate: string, range = 2) => {
  const dates = [];
  const base = new Date(`${centerDate}T00:00:00`);

  for (let i = -range; i <= range; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    dates.push(d);
  }
  return dates;
};

const DateStrip = ({ selectedDate, onSelectDate }: any) => {
  const dates = getDateRange(selectedDate);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mx-2 -mt-6 mb-14"
    >
      {dates.map((date) => {
        const iso = date.toISOString().split("T")[0];
        const isSelected = iso === selectedDate;

        return (
          <TouchableOpacity
            key={iso}
            onPress={() => onSelectDate(iso)}
            className={`mx-1 px-4 py-3 rounded-xl h-24 w-20 items-center ${
              isSelected ? "bg-primary" : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-3xl ${
                isSelected ? "text-white" : "text-gray-700"
              }`}
            >
              {date.getDate()}
            </Text>
            <Text
              className={`text-lg ${
                isSelected ? "text-white" : "text-gray-500"
              }`}
            >
              {date.toLocaleDateString("en-US", { weekday: "short" })}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DateStrip;
