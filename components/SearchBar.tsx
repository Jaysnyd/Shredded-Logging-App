import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

// FOR LATER:
// Filter created workouts / recently used workouts when user types, add Debouncing as well

const SearchBar = () => {
  const [query, setQuery] = useState("");
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
          value={query}
          onChangeText={setQuery}
          placeholderTextColor={"#4CB491"}
        />

        {/* Clear Button  */}
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")} activeOpacity={0.8}>
            <Fontisto name="close" size={20} color="#4CB491" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
