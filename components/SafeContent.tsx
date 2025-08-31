import { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeContent = ({ children }: { children: ReactNode }) => {
  const { top, right, left } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: top }}
      className='flex-1'>
      {children}
    </View>
  );
};

export default SafeContent;
