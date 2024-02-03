import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { YStack, Image, Text, ScrollView, Paragraph, XStack, H3 } from 'tamagui';

export default function WorkoutDetails() {
  const { width } = Dimensions.get('window');
  const { title, repetitions, series, weight, notes } = useLocalSearchParams();

  return (
    <ScrollView>
      <Image
        resizeMethod="resize"
        width={width}
        height={width * 0.7}
        source={{ uri: require('@/assets/images/agachamento-livre.jpg') }}
      />
      <YStack paddingHorizontal="$4" ai="center" rowGap="$4">
        <Text color="whitesmoke" mt="$4" fontSize="$8">
          {title}
        </Text>
        <Paragraph color="whitesmoke" ta="center" fontSize="$5">
          {notes ||
            '1. De pé, segurar a barra com a pegada pronada, com as mãos alinhadas com os ombros. A coluna deve permanecer ereta durante todo o exercício. \n 2. Trazer a barra para cima, flexionando os cotovelos, até que estes estejam na mesma linha dos ombros.\n 3. Retornar lentamente à posição inicial.'}
        </Paragraph>
        <H3 color="whitesmoke">Indicação</H3>
        <Text color="whitesmoke">{`${series} séries de ${repetitions} repetições.`}</Text>
        <H3 color="whitesmoke">Carga</H3>
        <XStack gap="$4" ai="center">
          <TouchableOpacity>
            <Ionicons name="remove-circle" size={28} color="#00C896" />
          </TouchableOpacity>
          <Text color="whitesmoke">{weight} kg</Text>
          <TouchableOpacity>
            <Ionicons name="add-circle" size={28} color="#00C896" />
          </TouchableOpacity>
        </XStack>
      </YStack>
    </ScrollView>
  );
}
