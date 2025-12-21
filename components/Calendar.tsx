import { Modal, View } from "react-native";
import { CalendarList } from "react-native-calendars";

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
  markedDates?: Record<string, any>;
  visible: boolean;
  onClose: () => void;
};

const Calendar = ({
  visible,
  onClose,
  selectedDate,
  onDateChange,
  markedDates = {},
}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white w-full h-96 rounded-2xl  pt-6 pb-6 flex-column justify-between align-center items-center">
          <CalendarList
            current={selectedDate}
            onDayPress={(day) => {
              onDateChange(day.dateString);
              onClose();
            }}
            horizontal
            pagingEnabled
            calendarWidth={360}
            markedDates={{
              ...markedDates,
              [selectedDate]: {
                selected: true,
                selectedColor: "#365f4c",
              },
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Calendar;
