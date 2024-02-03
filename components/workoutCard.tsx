import React from 'react';
import { Card, Progress, Image, Text } from 'tamagui';

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
    <Card
      w="$15"
      h="$20"
      ai="center"
      jc="space-between"
      pb="$3"
      br="$4"
      bg="#000"
      overflow="hidden">
      <Image
        source={{
          uri: require('@/assets/images/agachamento-livre.jpg'),
        }}
        style={{ width: 204, height: 204 }}
      />

      <Text color="$gray12" textAlign="center" ellipse>
        {title}
      </Text>
      <Text color="$gray12">{`${series} x ${repetitions} reps.`}</Text>
      <Text color="$gray10">Dificuldade</Text>
      <Progress size="$3" value={workoutDificulty} style={{ width: '90%' }}>
        <Progress.Indicator animation="quick" style={{ backgroundColor: '#00C896' }} />
      </Progress>
    </Card>
  );
}
