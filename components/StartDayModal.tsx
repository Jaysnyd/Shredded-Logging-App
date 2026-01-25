import { PLAN_DEFINITIONS } from "@/constants/plans";
import { PlanDay, PlanType } from "@/types/plan";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface StartDayModalProps {
  visible: boolean;
  planType: PlanType;
  onSelectStartIndex: (startIndex: number) => void;
  onClose: () => void;
}

export default function StartDayModal({
  visible,
  onClose,
  planType,
  onSelectStartIndex,
}: StartDayModalProps) {
  const cycle: PlanDay[] = PLAN_DEFINITIONS[planType]?.cycle ?? [];

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white w-full rounded-2xl pl-2 pr-2 pt-6 pb-6 flex-column items-center">
          <Text className="text-lg font-semibold text-black mb-4 w-full text-center">
            Select Your Starting Day
          </Text>
          {/* Start Day Options  */}
          {cycle.map((day, index) => (
            <TouchableOpacity
              key={`${day.key}-${index}`}
              onPress={() => {
                onSelectStartIndex(index);

                onClose();
              }}
              className="w-full py-3 rounded-xl border border-gray-200"
            >
              <Text className="text-center text-black font-medium">
                Start with {day.label}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Close Button  */}
          <TouchableOpacity
            onPress={onClose}
            className="bg-secondary p-3 rounded-xl mt-4"
          >
            <Text className="text-black font-semibold">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
