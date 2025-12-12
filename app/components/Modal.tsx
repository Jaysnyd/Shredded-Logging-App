import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface InfoModalProps {
  visible: boolean;
  onClose: () => void;
  text: string;
}

export default function InfoModal({ visible, onClose, text }: InfoModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white w-full rounded-2xl pl-2 pr-2 pt-6 pb-6 ">
          <Text className="text-lg font-semibold text-black mb-4 text-center">
            {text}
          </Text>

          <TouchableOpacity
            onPress={onClose}
            className="bg-secondary py-3 rounded-xl mt-2"
          >
            <Text className="text-center text-white font-semibold">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
