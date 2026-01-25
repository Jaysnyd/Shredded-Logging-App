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

      {/* Plan Structure Explained.   MODAL */}
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-secondary px-4 py-2 rounded-xl -mt-12"
        >
          <Text className="text-white">Information</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          text="Push / Pull / Legs (PPL)
Trains pushing, pulling, and leg movements on separate days for balanced volume and recovery.

Full Body
Works all major muscle groups each session, great for efficiency and overall strength.

Upper / Lower
Alternates upper-body and lower-body days to allow recovery while training frequently.

Body Part
Focuses on one primary muscle group per workout for targeted volume and intensity.

No Plan
Train however you want without a structured split—complete flexibility."
          onClose={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePlan;
