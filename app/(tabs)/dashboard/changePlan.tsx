import Modal from "@/components/Modal";
import ShredPlan from "@/components/ShredPlan";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePlan = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 align-center bg-white">
      <Text className="text-4xl text-primary font-bold font-style: italic w-full text-center">
        SHREDDED
      </Text>
      {/* HEADER  */}
      <Text className="text-3xl font-extrabold mt-7 ml-8 text-black font-style: italic">
        Change Plan
      </Text>
      <Text className="text-m  ml-8 text-black font-style: italic">
        Organize your shred routine
      </Text>

      {/* PLAN OPTIONS  */}
      <ShredPlan />

      {/* Plan Structure Explained.   MODAL --> Learn More */}
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-secondary px-4 py-2 rounded-xl -mt-12"
        >
          <Text className="text-white">Information</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          text="Your Plan is the structure of how your training is organized throughout the week. It
        divides your workouts into specific muscle groups or goals on different
        days—helping you stay consistent, recover properly, and make steady
        progress."
          onClose={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePlan;
