import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { YStack, Text, Button } from 'tamagui';

let interval: string | number | NodeJS.Timeout | undefined;
let hapticInterval: string | number | NodeJS.Timeout | undefined;

export default function TimerModal() {
  const [timer, setTimer] = useState(5);

  function countdownTimer() {
    interval = setInterval(() => {
      setTimer((currentTimer) => currentTimer - 1);
    }, 1000);
  }

  function handleHapticFeedback() {
    hapticInterval = setInterval(() => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }, 1000);
  }

  function closeModal() {
    clearInterval(hapticInterval);
    router.back();
  }

  useEffect(() => {
    countdownTimer();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(interval);
      handleHapticFeedback();
    }
  }, [timer]);

  return (
    <YStack ai="center" flex={1} rowGap="$6" bg="$primaryGreen" paddingHorizontal="$8">
      <Text fontSize="$6" textAlign="center" mt={260}>
        Aproveite para respirar fundo e se preparar para a próxima série!
      </Text>
      <Text fontSize="$14">{timer}</Text>
      {timer === 0 && (
        <Button size="$5" onPress={closeModal}>
          Encerrar descanso
        </Button>
      )}
    </YStack>
  );
}
