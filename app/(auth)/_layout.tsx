import SafeContent from '@/components/SafeContent';
import useAuth from '@/store/auth';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Redirect href={'/(root)/(tabs)/home'} />;

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
