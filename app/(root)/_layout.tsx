import SafeContent from '@/components/SafeContent';
import useAuth from '@/store/auth';
import { Redirect, Stack } from 'expo-router';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect href={'/(auth)'} />;

  return (
    <SafeContent>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeContent>
  );
};

export default Layout;
