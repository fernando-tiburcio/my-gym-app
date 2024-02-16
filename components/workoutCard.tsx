import React from 'react';
import { Card, Progress, Image, Text, YStack, CardHeader } from 'tamagui';

interface Props {
  title: string;
  repetitions: number;
  series: number;
  dificulty: string;
}

export default function WorkoutCard({ title, repetitions, dificulty, series }: Props) {
  const workoutDificulty = {
    easy: 33,
    medium: 66,
    hard: 80,
    extreme: 100,
  }[dificulty!];

  return (
    <Card w="$15" ai="center" pb="$3" br="$4" bg="#000" overflow="hidden">
      <Image
        source={{
          uri: require('@/assets/images/agachamento-livre.jpg'),
        }}
        style={{ width: 204, height: 204 }}
      />

      <YStack gap="$1.5" ai="center" paddingVertical="$2">
        <Text color="$gray12" ellipse numberOfLines={1}>
          {title}
        </Text>
        <Text color="$gray12">{`${series} x ${repetitions} reps.`}</Text>
        <Text color="$gray10">Dificuldade</Text>
        <Progress size="$3" value={workoutDificulty} style={{ maxWidth: '70%' }}>
          <Progress.Indicator animation="lazy" style={{ backgroundColor: '#00C896' }} />
        </Progress>
      </YStack>
    </Card>
  );
}
