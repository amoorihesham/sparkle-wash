import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ScheduleScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [error, setError] = useState('');

  const onChangeDate = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    if (!selectedDate || selectedDate < new Date()) {
      setError('Date Must Be In Future.');
      return;
    }

    setDate(selectedDate);
    setError('');
    setShowDatePicker(false);
    setShowTimePicker(true);
  };

  const onChangeTime = (event: DateTimePickerEvent, selectedTime: Date | undefined) => {
    if (!selectedTime || selectedTime < new Date()) {
      setError('Date Must Be In Future.');
      return;
    }

    setDate(selectedTime);
    setError('');
    setShowDatePicker(false);
    setShowTimePicker(false);
  };

  return (
    <View className='py-10 px-4'>
      <Text className='text-3xl font-semibold text-center'>Schedule a Wash</Text>
      <View className='border-t border-gray-300 mt-10 py-4'>
        {error && <Text className='w-full text-center font-medium text-red-500 mb-3'>{error}</Text>}
        <TouchableOpacity
          className='w-full border border-gray-400 py-3 px-4 rounded-md bg-gray-200
        '
          onPress={() => setShowDatePicker(true)}>
          <Text className='capitalize text-2xl font-medium w-full text-center'>{date.toLocaleString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            onChange={onChangeDate}
            mode='date'
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            value={date}
            onChange={onChangeTime}
            mode='time'
          />
        )}
        <TouchableOpacity
          className='w-full bg-primary py-3 px-4 rounded-md mt-6
        '>
          <Text className='capitalize text-2xl font-medium w-full text-white text-center'>confirm schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleScreen;
