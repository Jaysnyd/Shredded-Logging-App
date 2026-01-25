// CHANGE LATER:
// When selection is dynamic and works with data,
// Save Plan Selection when user selects then exits sub-screen...
//
// When user selects plan, for the plan they selected ask them what day they want to start the plan then correspond that to their calendar. PPL -> Start: Monday --> Monday: Push, Tuesday: Pull, Wednesday: Legs, Thursday: Push, Friday: Pull, Saturday: Legs, Sunday: Rest

import { usePlan } from "@/context/PlanContext";
import { PlanType } from "@/types/plan";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import StartDayModal from "./StartDayModal";

const ShredPlan = () => {
  const { plan, setPlan } = usePlan();

  // const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  const [showStartDayModal, setShowStartDayModal] = useState(false);

  const activePlan: PlanType = plan?.type ?? "none";

  const handlePlanPress = (planType: PlanType) => {
    // If no plan, set to none directly
    if (planType === "none") {
      setPlan("none", 0);
      setShowStartDayModal(false);
      return;
    }

    setShowStartDayModal(true);
    activePlan !== planType && setPlan(planType, 0);
  };

  const handleStartDaySelect = (startIndex: number) => {
    setPlan(activePlan, startIndex);
    setShowStartDayModal(false);
  };

  return (
    <View className="flex-column mt-4">
      {/* PUSH / PULL / LEGS  */}
      <TouchableOpacity onPress={() => handlePlanPress("ppl")}>
        <View className="bg-accent mt-1 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View>
            <Image
              source={require("@/assets/images/bench-press.png")}
              className="w-24 h-24"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Push / Pull / Legs (PPL)
            </Text>
            <Text className="text-sm text-gray-500 ">
              Grouped by movement patterns.
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={activePlan === "ppl"}
              color={activePlan === "ppl" ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* FULL BODY  */}
      <TouchableOpacity onPress={() => handlePlanPress("fullBody")}>
        <View className="bg-accent mt-2 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View>
            <Image
              source={require("@/assets/images/BackPose-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Full Body
            </Text>
            <Text className="text-sm text-gray-500 ">
              All Major Muscles, Every session.
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={activePlan === "fullBody"}
              color={activePlan === "fullBody" ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* UPPER / LOWER  */}
      <TouchableOpacity onPress={() => handlePlanPress("upperLower")}>
        <View className="bg-accent mt-2 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View>
            <Image
              source={require("@/assets/images/KettleBell-Squats-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Upper / Lower
            </Text>
            <Text className="text-sm text-gray-500">
              Body half division, four days
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={activePlan === "upperLower"}
              color={activePlan === "upperLower" ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* BODY PART  */}
      <TouchableOpacity onPress={() => handlePlanPress("bodyPart")}>
        <View className="bg-accent mt-2 mr-6 ml-6 p-2 rounded-xl flex-row items-center">
          <View>
            <Image
              source={require("@/assets/images/ExerciseBall-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">
              Body Part
            </Text>
            <Text className="text-sm text-gray-500 ">
              One muscle group each session
            </Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={activePlan === "bodyPart"}
              color={activePlan === "bodyPart" ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* NO PLAN  */}
      <TouchableOpacity onPress={() => handlePlanPress("none")}>
        <View className="bg-accent mt-2 ml-6 mr-6 p-2 rounded-xl flex-row items-center">
          <View>
            <Image
              source={require("@/assets/images/FrontPose-Panda.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="ml-3">
            <Text className="text-base font-semibold text-black">No Plan</Text>
            <Text className="text-sm text-gray-500">Shred my own way!</Text>
          </View>

          <View className="absolute right-5 top-1/2">
            <Checkbox
              value={activePlan === "none"}
              color={activePlan === "none" ? "#4CB491" : undefined}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal for selecting start day  */}
      {showStartDayModal && activePlan !== "none" && (
        <StartDayModal
          visible={showStartDayModal}
          planType={activePlan}
          onSelectStartIndex={handleStartDaySelect}
          onClose={() => setShowStartDayModal(false)}
        />
      )}
    </View>
  );
};

export default ShredPlan;
