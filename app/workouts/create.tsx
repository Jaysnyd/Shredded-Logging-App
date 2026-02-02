import { useWorkouts } from "@/context/WorkoutContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuidv4 } from "uuid";

const CreateWorkout = () => {
  const [name, setName] = useState("");
  const [focus, setFocus] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [error, setError] = useState(false);
  const [errorFocus, setErrorFocus] = useState(false);

  const router = useRouter();

  const { addCustomWorkout } = useWorkouts();

  const handleSaveWorkout = () => {
    if (name.trim().length === 0) {
      setError(true);
      Alert.alert("Workout must have a name");
      return;
    }
    setError(false);

    if (focus.trim().length === 0) {
      setErrorFocus(true);
      Alert.alert("Muscle focus cannot be empty");
      return;
    }
    setErrorFocus(false);

    addCustomWorkout({
      id: uuidv4(),
      name: name,
      focus: focus,
      weight: weight,
      sets: sets,
      source: "custom",
    });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center w-full">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      <KeyboardAvoidingView
        className="flex-1 w-full"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="flex-1"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 160 }}
          showsVerticalScrollIndicator={false}
        >
          {/* FORM  */}
          <View className="w-full bg-primary h-1/2 rounded-b-3xl mt-3">
            <Text className="text-3xl font-bold text-white font-style: italic pt-10 text-center">
              Create New Workout
            </Text>
            <Image
              source={require("@/assets/images/FrontPose-Panda.png")}
              className="w-28 h-28 -mt-1 self-center"
              resizeMode="contain"
            />

            {/* CREATE WORKOUT FORM  */}
            <View className="-mt-32 mx-4 bg-white p-6 rounded-xl shadow-lg mt-6">
              <Text className="text-xl font-bold mb-4 text-center">
                Custom Workout
              </Text>

              {/* NAME  */}
              <Text className="mt-3 mb-1 font-medium text-base">Name: </Text>
              <TextInput
                className="bg-white p-3 text-black rounded-xl mb-4 border border-gray-900"
                placeholder="Bench Press..."
                placeholderTextColor="#426D60"
                maxLength={28}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (error && text.trim().length > 0) setError(false);
                }}
              />

              {/* FOCUS */}
              <Text className="font-medium text-base mb-1">Muscle Focus:</Text>
              <TextInput
                className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
                placeholder="Chest..."
                placeholderTextColor="#426D60"
                maxLength={14}
                value={focus}
                onChangeText={(text) => {
                  setFocus(text);
                  if (errorFocus && text.trim().length > 0)
                    setErrorFocus(false);
                }}
              />

              {/* WEIGHT */}
              <Text className="font-medium text-base mb-1">Weight:</Text>
              <TextInput
                className="bg-white p-3 rounded-xl mb-4 border border-gray-900"
                placeholder="225lbs"
                placeholderTextColor="#426D60"
                maxLength={6}
                value={weight}
                onChangeText={setWeight}
              />

              {/* SETS */}
              <Text className="font-medium text-base mb-1">Sets:</Text>
              <TextInput
                className="bg-white p-3 rounded-xl mb-1 border border-gray-900"
                placeholder="3"
                placeholderTextColor="#426D60"
                maxLength={2}
                value={sets}
                onChangeText={setSets}
              />
            </View>

            {/* SAVE WORKOUT BUTTON  */}
            <TouchableOpacity
              onPress={handleSaveWorkout}
              className="bg-secondary w-1/2 p-4 rounded-xl  items-center border-4 border-primary mt-8 self-center"
            >
              <Text className="text-white text-lg font-bold">SAVE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateWorkout;
