import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

const TabIcon = ({ source, focused }: { source: ImageSourcePropType; focused: boolean }) => (
  <View className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-primary/10 w-12 h-12' : ''}`}>
    <Image
      source={source}
      className='flex items-center justify-center flex-row'
    />
  </View>
);
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: 60,
          borderRadius: 30,
          marginInline: 15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 25,
        },
        tabBarItemStyle: {
          borderRadius: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: 50,
          width: 20,
        },

        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
        }}
      />
    </Tabs>
  );
}
