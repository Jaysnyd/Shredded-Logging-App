import { staticGoals } from "@/data/staticGoals";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditGoal = () => {
  const [name, setName] = useState("");
  const [pr, setPR] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const { id } = useLocalSearchParams();
  const goal = staticGoals.find((g) => g.id === id);

  return (
    <SafeAreaView className="flex-1 bg-white items-center w-full">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      <View className="w-full bg-primary h-1/2 rounded-b-3xl mt-3 items-center">
        <TouchableOpacity className="items-center">
          <FontAwesome5 name="edit" size={24} color="white" className="mt-8" />
          <Image
            source={require("@/assets/images/bench-press.png")}
            className="w-42 h-40 -mt-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* EDIT GOAL  */}
      <View className="flex flex-column absolute top-80 left-4 right-4 bg-white p-6 rounded-xl shadow-lg">
        <Text className="text-xl font-bold mb-4 text-center">Edit Goal:</Text>

        {/* CHANGE GOAL NAME  */}
        <Text className="mt-3 mb-1 font-medium text-base">Goal: </Text>
        <TextInput
          className="bg-white p-3 rounded-xl mb-4 border text-black border-gray-900"
          placeholder="Enter Goal Name..."
          placeholderTextColor="#426D60"
          value={goal?.name}
          onChangeText={setName}
        />

        {/* CHANGE GOAL PR  */}
        <Text className="font-medium text-base mb-1">Current PR:</Text>
        <TextInput
          className="bg-white p-3 rounded-xl mb-4 border text-black border-gray-900"
          placeholder="225lbs..."
          placeholderTextColor="#426D60"
          value={goal?.pr}
          onChangeText={setPR}
        />
      </View>

      {/* CREATE GOAL BUTTON  */}
      <TouchableOpacity
        // onPress={() => router.push("/goals/addGoal")}
        className="bg-secondary w-1/2 absolute bottom-56 p-4 rounded-xl mt-4 items-center"
      >
        <Text className="text-white text-lge font-bold">SAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditGoal;

// ACCESS Object element
// <Text className="text-5xl text-red font-bold font-style: italic">
//       {`Goal: ${goal?.name}`}
//     </Text>
