import { Workout } from "@/types/workout";
import { Text, View } from "react-native";

type Props = {
  workoutsToShow: Workout[];
};

const WorkoutLogList = ({ workoutsToShow }: Props) => {
  return (
    <View>
      {workoutsToShow.map((workout) => (
        <Text key={workout.id}>{workout.name}</Text>
      ))}
    </View>
  );
};

export default WorkoutLogList;
