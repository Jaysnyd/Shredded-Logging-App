import { useLogging } from "@/context/LogContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditEntry = () => {
  const router = useRouter();

  const { id, date } = useLocalSearchParams<{
    id: string;
    date: string;
  }>();

  const { getWorkoutsForDate, updateLoggedWorkout, removeLoggedWorkout } =
    useLogging();

  const workout = getWorkoutsForDate(date).find((w) => w.id === id);

  // Draft States
  const [name, setName] = useState("");
  const [focus, setFocus] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");

  useEffect(() => {
    if (workout) {
      setName(workout.name);
      setFocus(workout.focus);
      setWeight(workout.weight);
      setSets(workout.sets);
    }
  }, [workout]);

  if (!date || !id) return null;

  if (!workout) {
    return <Text>Workout not found!</Text>;
  }

  const handleSave = () => {
    updateLoggedWorkout(date, {
      ...workout,
      name,
      focus,
      weight,
      sets,
    });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center align-center">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      <View className="mt-2 bg-primary w-full items-center align-center h-5/6">
        <Text className="text-3xl font-bold text-white font-style: italic p-2">
          Edit Workout
        </Text>

        <View className="w-full items-center">
          <Image
            source={require("@/assets/images/FrontPose-Panda.png")}
            className="w-28 h-28 -mt-1"
            resizeMode="contain"
          />
        </View>

        {/* WORKOUT TEMPLATE */}
        <View className="flex flex-column w-11/12 mt-2 bg-white p-6 rounded-xl shadow-lg">
          <Text className="text-xl font-bold mb-4 text-center">
            Change / Delete Logged Workout
          </Text>

          {/* NAME  */}
          <Text className="mt-3 mb-1 font-medium text-base">Name: </Text>
          <TextInput
            className="bg-white p-3 text-black rounded-xl mb-4 border border-gray-900"
            value={name}
            onChangeText={setName}
          />

          {/* FOCUS */}
          <Text className="font-medium text-base mb-1">Muscle Focus:</Text>
          <TextInput
            className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
            value={focus}
            onChangeText={setFocus}
          />

          {/* WEIGHT */}
          <Text className="font-medium text-base mb-1">Weight:</Text>
          <TextInput
            className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
            value={weight}
            onChangeText={setWeight}
          />

          {/* SETS */}
          <Text className="font-medium text-base mb-1">Sets:</Text>
          <TextInput
            className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
            value={sets}
            onChangeText={setSets}
          />
        </View>

        {/* DELETE GOAL / SAVE CHANGES BUTTONS  */}
        <View className="w-full  p-4 rounded-xl mt-4 flex-row items-center justify-center gap-4">
          <TouchableOpacity
            onPress={() => {
              removeLoggedWorkout(date, id);
              router.back();
            }}
            className="bg-red-500 w-1/4  p-4 rounded-xl items-center"
          >
            <Text className="text-white text-lge font-bold">DELETE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSave}
            className="bg-secondary w-1/2 p-4 rounded-xl items-center"
          >
            <Text className="text-white text-lge font-bold">SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditEntry;
