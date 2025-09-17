import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ReactNativeModal } from 'react-native-modal';
import { OtpInput } from 'react-native-otp-entry';

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('idle');
  const [openVerifyOtpModal, setOpenVerifyOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [error, setError] = useState('');

  const onPressSendOTP = async () => {
    setIsLoading(true);
    try {
      console.log(phoneNumber);
      setOpenVerifyOtpModal(true);
    } catch (error: any) {
      console.log(error);
      setError(error?.message || 'something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const onPressVerifyOTP = async () => {
    setVerificationStatus('pending');
    try {
      console.log(otpCode);
      setVerificationStatus('success');
      setTimeout(() => {
        setOpenVerifyOtpModal(false);
      }, 1500);
    } catch (error) {
      setVerificationStatus('failed');
    }
  };

  return (
    <View className='flex-1 items-center justify-center bg-gray-100 pt-10 gap-10 px-4'>
      <View className='items-center gap-y-10'>
        <View className='flex flex-row items-center gap-x-6'>
          <Ionicons
            name='sparkles'
            size={78}
            color='black'
          />
          <Text className='text-2xl font-bold font-roboto'>Logo</Text>
        </View>
        <View className='items-center gap-y-8'>
          <Text className='text-center text-4xl font-bold font-roboto'>Enter Your Details to Get Started</Text>
          <Text className='text-lg text-center max-w-sm text-gray-600 font-light font-roboto'>
            Please enter your phone number and the OTP code sent to your device to verify your identity.
          </Text>
        </View>
      </View>

      <View className='bg-white p-6 rounded-md w-full'>
        <Text className='font-semibold capitalize mb-4'>phone number</Text>
        <View className='border rounded-md border-gray-400 p-3 bg-gray-100 flex-row gap-x-3 items-center'>
          <View className='flex flex-row  items-center gap-x-2 pe-4 border-e border-gray-400'>
            <Image
              source={require('@/assets/images/flag.png')}
              className='w-10 h-10'
              style={{ width: 60, height: 40 }}
            />
            <Text className='text-lg font-semibold text-gray-500'>+20</Text>
          </View>
          <View>
            <TextInput
              placeholder='01015147813'
              value={phoneNumber}
              autoCapitalize='none'
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
          </View>
        </View>
        <TouchableOpacity
          disabled={isLoading}
          onPress={onPressSendOTP}
          className='bg-primary py-4 rounded-md flex items-center justify-center mt-4'>
          <Text className='font-bold text-white capitalize text-lg'>{isLoading ? <ActivityIndicator color={'white'} /> : 'send OTP'}</Text>
        </TouchableOpacity>

        <View className='mt-6 items-center'>
          <Text className='text-gray-500 font-semibold capitalize flex-row items-center gap-x-3 flex'>Didn&apos;t receive a code? </Text>
        </View>
      </View>

      <ReactNativeModal isVisible={openVerifyOtpModal}>
        <View className=' bg-white justify-center py-10 rounded-md px-8 gap-4'>
          {verificationStatus === 'success' ? (
            <View className='items-center justify-center gap-3'>
              <Ionicons
                name='checkmark-circle-outline'
                size={112}
                color='#2677B2'
              />
              <Text className='text-lg font-semibold'>Verified Successfully</Text>
            </View>
          ) : (
            <>
              <Text className='font-semibold'>OTP code</Text>
              <OtpInput
                numberOfDigits={6}
                onTextChange={(text) => setOtpCode(text)}
              />
              <TouchableOpacity
                onPress={onPressVerifyOTP}
                className='w-full bg-primary rounded-md py-4 items-center justify-center'>
                <Text className='text-white font-bold  capitalize'>
                  {verificationStatus === 'idle' || verificationStatus === 'failed' ? 'verify' : <ActivityIndicator color={'white'} />}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default LoginScreen;
