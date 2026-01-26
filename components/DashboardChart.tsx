import { useLogging } from "@/context/LogContext";
import { format, subDays } from "date-fns";
import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

// const data = [
//   { value: 50, label: "Sun" },
//   { value: 80, label: "Mon" },
//   { value: 40, label: "Tue" },
//   { value: 95, label: "Wed" },
//   { value: 85, label: "Thu" },
//   { value: 70, label: "Fri" },
//   { value: 100, label: "Sat" },
// ];

const DashboardChart = () => {
  const { getWorkoutsForDate } = useLogging();
  
  // Get past 7 days workouts
  const last7DaysData = () => {
    const dataArray = [];

    for (let i = 6; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const formattedDate = format(date, "yyyy-MM-dd");
      const workouts = getWorkoutsForDate(formattedDate);
      dataArray.push({
        value: workouts.length,
        label: date.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }

    return dataArray;
  };

  const chartData = last7DaysData();
  const maxWorkouts = Math.max(...chartData.map((d) => d.value), 5);
  const chartWidth = chartData.length * 45;

  return (
    <View className="bg-accent mt-1 m-6 p-4 rounded-xl overflow-hidden">
      <BarChart
        data={chartData}
        width={chartWidth}
        maxValue={maxWorkouts}
        showGradient
        gradientColor={"#4CB491"}
        frontColor={"#426D60"}
        barWidth={25}
        height={200}
        spacing={20}
        noOfSections={4}
        barBorderRadius={4}
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisLabelWidth={0}
        hideYAxisText
        rulesColor={"#426D60"}
        dashWidth={2}
        disableScroll
      />
    </View>
  );
};

export default DashboardChart;
