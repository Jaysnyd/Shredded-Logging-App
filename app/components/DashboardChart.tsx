import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const data = [
  { value: 50, label: "Sun" },
  { value: 80, label: "Mon" },
  { value: 40, label: "Tue" },
  { value: 95, label: "Wed" },
  { value: 85, label: "Thu" },
  { value: 70, label: "Fri" },
  { value: 100, label: "Sat" },
];

const DashboardChart = () => {
  return (
    <View className="bg-accent mt-1 m-6 p-4 rounded-xl">
      <BarChart
        data={data}
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
        maxValue={100}
        yAxisLabelWidth={0}
        hideYAxisText
        rulesColor={"#426D60"}
        dashWidth={2}
      />
    </View>
  );
};

export default DashboardChart;

