import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold font-style: italic">
        SHREDDED Dashboard
      </Text>
      <Button
        title="Change Plan"
        onPress={() => router.push("/(tabs)/dashboard/changePlan")}
      />
    </SafeAreaView>
  );
}
