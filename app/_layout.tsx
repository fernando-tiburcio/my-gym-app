import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, router } from 'expo-router';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';

import config from '../tamagui.config';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      <TamaguiProvider config={config}>
        <Theme name="dark">
          <StatusBar style="auto" />
          <Stack>
            <Stack.Screen name="index" redirect />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="workout/workoutDetails"
              options={{
                presentation: 'modal',
                title: 'Detalhes do Treino',
                headerTitleStyle: { color: '#00C896' },
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={24} color="#00C896" />
                  </TouchableOpacity>
                ),
                contentStyle: {
                  backgroundColor: '#000',
                },
              }}
            />
            <Stack.Screen
              name="timerModal"
              options={{
                presentation: 'modal',
                headerShown: false,
              }}
            />
          </Stack>
        </Theme>
      </TamaguiProvider>
    </>
  );
}
