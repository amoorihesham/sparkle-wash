import SafeContent from '@/components/SafeContent';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <SafeContent>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
      </Stack>
      <StatusBar style='auto' />
    </SafeContent>
  );
};

export default AuthLayout;
