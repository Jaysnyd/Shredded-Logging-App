import Fontisto from "@expo/vector-icons/Fontisto";
import { TextInput, TouchableOpacity, View } from "react-native";

// Filter created workouts / recently used workouts when user types, add Debouncing as well

type Props = {
  value: string;
  onChange: (text: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <View className="p-4  w-full items-center">
      {/* container  */}
      <View className="flex-row items-center bg-white border border-gray-300 rounded-2xl px-3 w-10/12">
        {/* Left Icon  */}
        <Fontisto name="search" size={20} color="#4CB491" />

        {/* Text Box  */}
        <TextInput
          className="flex-1 h-12 text-secondary text-base ml-2"
          placeholder="Search Workouts.."
          value={value}
          onChangeText={onChange}
          placeholderTextColor={"#4CB491"}
        />

        {/* Clear Button  */}
        {value.length > 0 && (
          <TouchableOpacity onPress={() => onChange("")} activeOpacity={0.8}>
            <Fontisto name="close" size={20} color="#4CB491" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
