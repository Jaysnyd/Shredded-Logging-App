import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddGoal = () => {
  const [name, setName] = useState("");
  const [pr, setPR] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    require("@/assets/images/panda-arm.png"),
    require("@/assets/images/squatting.png"),
    require("@/assets/images/bench-press.png"),
    require("@/assets/images/ExerciseBall-Panda.png"),
    require("@/assets/images/panda-arm.png"),
    require("@/assets/images/panda-arm.png"),
    require("@/assets/images/panda-arm.png"),
  ];

  return (
    <SafeAreaView className="flex-1 bg-white items-center w-full">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      <View className="w-full bg-primary h-1/2 rounded-b-3xl mt-3">
        <Text className="text-3xl font-bold text-white font-style: italic ml-8 pt-10">
          Add New Goal
        </Text>
        <Text className="text-secondary mb-2 ml-8">
          Something to work towards!
        </Text>
      </View>

      {/* GOAL INPUTS  */}
      <View className="flex flex-column absolute top-64 left-4 right-4 bg-white p-6 rounded-xl shadow-lg">
        <Text className="text-xl font-bold mb-4 text-center">Lets Shred</Text>

        {/* NAME GOAL  */}
        <Text className="mt-3 mb-1 font-medium text-base">Goal: </Text>
        <TextInput
          className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
          placeholder="Enter Goal Name..."
          placeholderTextColor="#426D60"
          value={name}
          onChangeText={setName}
        />

        {/* CURRENT PR  */}
        <Text className="font-medium text-base mb-1">Current PR:</Text>
        <TextInput
          className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
          placeholder="225lbs..."
          placeholderTextColor="#426D60"
          value={pr}
          onChangeText={setPR}
        />

        {/* SELECT GOAL IMAGE  */}
        <Text className="font-medium text-base mb-1">Select Image:</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ paddingLeft: 22 }}
        >
          <View className="flex-row flew-wrap justify-between ">
            {images.map((img, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(img)}
                className={`mr-3 p-1 rounded-lg ${
                  selectedImage === img ? "border-2 border-accent" : ""
                }`}
              >
                <Image
                  source={img}
                  className="w-20 h-20 rounded-xl"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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

export default AddGoal;
