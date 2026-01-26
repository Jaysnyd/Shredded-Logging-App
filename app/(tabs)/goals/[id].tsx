// import Modal from "@/components/EditGoalModal";
import EditGoalModal from "@/components/EditGoalModal";
import { useGoals } from "@/context/GoalsContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditGoal = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams<{ id: string }>();
  const { goals, updateGoal, deleteGoal } = useGoals();
  const goal = goals.find((g) => g.id === id);

  // Draft states
  const [name, setName] = useState("");
  const [pr, setPR] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const goalImages = [
    require("@/assets/images/panda-arm.png"),
    require("@/assets/images/squatting.png"),
    require("@/assets/images/bench-press.png"),
    require("@/assets/images/FrontPose-Panda.png"),
    require("@/assets/images/ExerciseBall-Panda.png"),
    require("@/assets/images/BackPose-Panda.png"),
    require("@/assets/images/KettleBell-Squats-Panda.png"),
  ];

  // Change image modal
  const [modalVisible, setModalVisible] = useState(false);
  const handleImageSelect = (image: any) => {
    setSelectedImage(image);
    setModalVisible(false);
  };

  useEffect(() => {
    if (goal) {
      setName(goal.name);
      setPR(goal.pr);
      setSelectedImage(goal.image);
    }
  }, [goal]);

  if (!goal) return null;

  const handleSave = () => {
    updateGoal({
      ...goal,
      name,
      pr,
      image: selectedImage,
    });
    router.back();
  };

  const handleDelete = () => {
    deleteGoal(goal.id);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center w-full">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>

      {/* CHANGE GOAL IMAGE  */}
      <View className="w-full bg-primary h-1/2 rounded-b-3xl mt-3 items-center">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="px-4 py-2 rounded-xl mt-1"
        >
          <View className="-mt-6">
            <View className="mt-8 items-center">
              <FontAwesome5 name="edit" size={24} color="white" />
            </View>

            <View>
              <Image
                source={selectedImage ?? goal.image}
                className="w-36 h-36 mt-1"
                resizeMode="contain"
              />
            </View>
          </View>
        </TouchableOpacity>

        <EditGoalModal
          visible={modalVisible}
          imageList={goalImages}
          onSelectImage={handleImageSelect}
          onClose={() => setModalVisible(false)}
        />
      </View>

      {/* EDIT GOAL  */}
      <View className="flex flex-column absolute top-80 left-4 right-4 bg-white p-6 rounded-xl shadow-lg">
        <Text className="text-xl font-bold mb-4 text-center">Edit Goal:</Text>

        {/* CHANGE GOAL NAME  */}
        <Text className="mt-3 mb-1 font-medium text-base">Goal: </Text>
        <TextInput
          className="bg-white p-3 rounded-xl mb-4 border text-primary font-bold border-gray-900"
          value={name}
          onChangeText={setName}
          autoFocus
          maxLength={28}
        />

        {/* CHANGE GOAL PR  */}
        <Text className="font-medium text-base mb-1">Current PR:</Text>
        <TextInput
          className="bg-white p-3 rounded-xl mb-4 border text-primary font-bold border-gray-900"
          value={pr}
          onChangeText={setPR}
          autoFocus
          maxLength={8}
        />
      </View>

      {/* DELETE GOAL / SAVE CHANGES BUTTONS  */}
      <View className="w-full absolute bottom-72 p-4 rounded-xl mt-4 flex-row items-center justify-center gap-4">
        <TouchableOpacity
          onPress={handleDelete}
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
    </SafeAreaView>
  );
};

export default EditGoal;
