// CHANGE LATER:
// When selection is dynamic and works with data,
// Change the checkboxes so only one plan can be selected at a time.
// AND Save Plan Selection when user selects then exits sub-screen.
// MODAL ----> Style to match app theme/UI
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { Image, Text, View } from "react-native";

const ShredPlan = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  return (
    <View className="flex-column mt-4">
      {/* PUSH / PULL / LEGS  */}
      <View className="bg-accent mt-1 m-6 p-2 rounded-xl flex-row items-center">
        <View></View>

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

      {/* FULL BODY  */}
      <View className="bg-accent -mt-3 m-6 p-2 rounded-xl flex-row items-center">
        <View></View>

        <View>
          <Image
            source={require("../../assets/images/bench-press.png")}
            className="w-24 h-24"
          />
        </View>

        <View className="ml-3">
          <Text className="text-base font-semibold text-black">Full Body</Text>
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

      {/* UPPER / LOWER  */}
      <View className="bg-accent -mt-3 m-6 p-2 rounded-xl flex-row items-center">
        <View></View>

        <View>
          <Image
            source={require("../../assets/images/bench-press.png")}
            className="w-24 h-24"
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

      {/* BODY PART  */}
      <View className="bg-accent -mt-3 m-6 p-2 rounded-xl flex-row items-center">
        <View></View>

        <View>
          <Image
            source={require("../../assets/images/bench-press.png")}
            className="w-24 h-24"
          />
        </View>

        <View className="ml-3">
          <Text className="text-base font-semibold text-black">Body Part</Text>
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

      {/* NO PLAN  */}
      <View className="bg-accent -mt-3 m-6 p-2 rounded-xl flex-row items-center">
        <View></View>

        <View>
          <Image
            source={require("../../assets/images/bench-press.png")}
            className="w-24 h-24"
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
    </View>
  );
};

export default ShredPlan;
