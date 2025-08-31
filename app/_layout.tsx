import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import '../global.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    roboto: require('../assets/fonts/roboto-font.ttf'),
  });
  console.log(fontsLoaded);
  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(auth)' />
      <Stack.Screen name='(root)' />
    </Stack>
  );
}
