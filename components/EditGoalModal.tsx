import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

interface EditGoalProps {
  visible: boolean;
  onClose: () => void;
  imageList: any;
  onSelectImage: (image: any) => void;
}

export default function EditGoalModal({
  visible,
  onClose,
  imageList,
  onSelectImage,
}: EditGoalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white w-full rounded-2xl pl-2 pr-2 pt-6 pb-6 flex-column items-center">
          <View className="items-center">
            <View className=" w-full flex-row flex-wrap gap-4">
              {imageList.map((image: any, index: any) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onSelectImage(image)}
                >
                  <Image
                    source={image}
                    className="w-28 h-28"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={onClose}
            className="bg-secondary py-4 rounded-xl mt-6 w-1/2"
          >
            <Text className="text-center text-white font-semibold">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
