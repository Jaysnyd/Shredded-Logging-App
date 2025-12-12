// CHANGE LATER:
// When selection is dynamic and works with data,
// Save Plan Selection when user selects then exits sub-screen...
//
// When user selects plan, for the plan they selected ask them what day they want to start the plan then correspond that to their calendar. PPL -> Start: Monday --> Monday: Push, Tuesday: Pull, Wednesday: Legs, Thursday: Push, Friday: Pull, Saturday: Legs, Sunday: Rest

import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ShredPlan = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  //   Plans - PPL, FB, UL, BP, NP
  const selectPlan = (planName: string) => {
    switch (planName) {
      case "PPL":
        setChecked1(true);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
        break;

      case "FB":
        setChecked1(false);
        setChecked2(true);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
        break;

      case "UL":
        setChecked1(false);
        setChecked2(false);
        setChecked3(true);
        setChecked4(false);
        setChecked5(false);
        break;

      case "BP":
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(true);
        setChecked5(false);
        break;

      case "NP":
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(true);
        break;

      default:
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
    }
  };

  return (
    <View className="flex-column mt-4">
      {/* PUSH / PULL / LEGS  */}
      <TouchableOpacity onPress={() => selectPlan("PPL")}>
        <View className="bg-accent mt-1 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View>
            <Image
              source={require("../../assets/images/bench-press.png")}
              className="w-24 h-24"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Push / Pull / Legs (PPL)
            </Text>
            <Text className="text-sm text-gray-500 ">
              Grouped by movement patterns.
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={checked1}
              onValueChange={setChecked1}
              color={checked1 ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* FULL BODY  */}
      <TouchableOpacity onPress={() => selectPlan("FB")}>
        <View className="bg-accent mt-2 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View></View>

          <View>
            <Image
              source={require("../../assets/images/BackPose-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Full Body
            </Text>
            <Text className="text-sm text-gray-500 ">
              All Major Muscles, Every session.
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={checked2}
              onValueChange={setChecked2}
              color={checked2 ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* UPPER / LOWER  */}
      <TouchableOpacity onPress={() => selectPlan("UL")}>
        <View className="bg-accent mt-2 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View></View>

          <View>
            <Image
              source={require("../../assets/images/KettleBell-Squats-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Upper / Lower
            </Text>
            <Text className="text-sm text-gray-500">
              Body half division, four days
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={checked3}
              onValueChange={setChecked3}
              color={checked3 ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* BODY PART  */}
      <TouchableOpacity onPress={() => selectPlan("BP")}>
        <View className="bg-accent mt-2 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View></View>

          <View>
            <Image
              source={require("../../assets/images/ExerciseBall-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Body Part
            </Text>
            <Text className="text-sm text-gray-500 ">
              One muscle group each session
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={checked4}
              onValueChange={setChecked4}
              color={checked4 ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* NO PLAN  */}
      <TouchableOpacity onPress={() => selectPlan("NP")}>
        <View className="bg-accent mt-2 ml-6 mr-6 p-2 rounded-xl flex-row items-center">
          <View></View>

          <View>
            <Image
              source={require("../../assets/images/FrontPose-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">No Plan</Text>
            <Text className="text-sm text-gray-500">Shred my own way!</Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={checked5}
              onValueChange={setChecked5}
              color={checked5 ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShredPlan;
