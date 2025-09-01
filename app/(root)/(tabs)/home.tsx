import useAuth from '@/store/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
const HomeScreen = () => {
  const { user } = useAuth();
  return (
    <View className='py-4 px-4'>
      <View className='py-6 flex-row flex items-center justify-between w-full gap-3 border-b border-gray-300'>
        <View>
          <Text className='text-xl font-bold uppercase w-full'>sparkle wash</Text>
        </View>

        <View className='flex flex-row items-center gap-3'>
          <View>
            <Ionicons
              name='notifications-outline'
              size={24}
              color='black'
            />
          </View>
          <Image
            source={require('@/assets/images/person.png')}
            style={{ width: 42, height: 42, borderRadius: 9999, backgroundColor: '#ccc' }}
          />
        </View>
      </View>

      <View className='py-8 flex gap-6 justify-center items-center '>
        <View className='w-full flex items-center justify-center gap-1'>
          <Text className='text-2xl font-semibold capitalize text-gray-500 w-full text-center'>welcome back 👋</Text>
          <Text className='text-2xl font-bold capitalize w-full text-center'>{user.name}!</Text>
        </View>
        <View className='p-6 bg-slate-100 rounded-md flex w-full items-center justify-center gap-4'>
          <View className='flex flex-row items-center gap-x-6'>
            <Ionicons
              name='sparkles'
              size={68}
              color='black'
            />
          </View>
          <Text className='text-4xl font-bold'>Wash my car now</Text>
          <Text className='text-xl text-gray-500 text-center font-light'>Get your car spotless with an immediate service.</Text>
        </View>
        <View className='p-6  rounded-md flex w-full items-center justify-center gap-4'>
          <View className='flex flex-row items-center gap-x-6'>
            <Ionicons
              name='time'
              size={68}
              color='black'
            />
          </View>
          <Text className='text-4xl font-bold'>Schedule a wash</Text>
          <Text className='text-xl text-gray-500 text-center font-light'>Plan your car wash for a future date and time.</Text>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
