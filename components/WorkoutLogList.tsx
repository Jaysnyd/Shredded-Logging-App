import { Workout } from "@/types/workout";
import { ScrollView } from "react-native";
import WorkoutLogItem from "./WorkoutLogItem";

type Props = {
  workoutsToShow: Workout[];
  curDate: string;
};

const WorkoutLogList = ({ workoutsToShow, curDate }: Props) => {
  return (
    <ScrollView className="w-full mt-6" showsVerticalScrollIndicator={false}>
      {workoutsToShow.map((workout) => (
        <WorkoutLogItem
          key={workout.id}
          workoutId={workout.id}
          name={workout.name}
          focus={workout.focus}
          weight={workout.weight}
          sets={workout.sets}
          date={curDate}
        />
      ))}
    </ScrollView>
  );
};

export default WorkoutLogList;
