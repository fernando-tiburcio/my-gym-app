import React from 'react';
import { Card, Progress, Image, Text } from 'tamagui';

export default function WorkoutCard() {
  return (
    <Card w="$15" h="$20" ai="center" jc="space-between" pb="$3">
      <Image
        source={{
          width: 204,
          height: 204,
          uri: require('@/assets/images/agachamento-livre.jpg'),
        }}
      />

      <Text color="$gray12">Agachamento Livre</Text>
      <Text color="$gray12">3 x 15 reps.</Text>
      <Text color="$gray10">Dificuldade</Text>
      <Progress size="$3" value={75} style={{ backgroundColor: '#00C896', width: '90%' }}>
        <Progress.Indicator animation="bouncy" />
      </Progress>
    </Card>
  );
}
