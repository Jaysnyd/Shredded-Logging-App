import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "/Users/jaysnyder/Documents/Shredded-Mobile-App/app/globals.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold font-style: italic">
        SHREDDED
      </Text>
    </SafeAreaView>
  );
}
