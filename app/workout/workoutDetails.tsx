import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { YStack, Image, Text, ScrollView, Paragraph, XStack, H3, Card, View } from 'tamagui';

export default function WorkoutDetails() {
  const { width } = Dimensions.get('window');
  const { title, repetitions, series, weight, notes } = useLocalSearchParams();
  const [updatedWeight, setUpdatedWeight] = useState<number>(0);
  const [serieCompleted, setSerieCompleted] = useState<number[]>([]);

  function handleUpdateWeight(weight: number) {
    setUpdatedWeight(weight);
  }

  function handleSerieCompleted(serie: number) {
    setSerieCompleted([...serieCompleted, serie]);
    router.push('/timerModal');
  }

  return (
    <ScrollView>
      <Image
        resizeMethod="resize"
        width={width}
        height={width * 0.5625}
        source={{ uri: require('@/assets/images/agachamento-livre.jpg') }}
      />
      <YStack paddingHorizontal="$4" ai="center" rowGap="$4" paddingBottom="$8">
        <Text color="whitesmoke" mt="$4" fontSize="$8">
          {title}
        </Text>
        <Paragraph color="whitesmoke" ta="center" fontSize="$5">
          {notes ||
            '1. De pé, segurar a barra com a pegada pronada, com as mãos alinhadas com os ombros. A coluna deve permanecer ereta durante todo o exercício. \n 2. Trazer a barra para cima, flexionando os cotovelos, até que estes estejam na mesma linha dos ombros.\n 3. Retornar lentamente à posição inicial.'}
        </Paragraph>
        <H3 color="whitesmoke" mt="$4">
          Indicação
        </H3>
        <Text color="whitesmoke">{`${series} séries de ${repetitions} repetições.`}</Text>
        <H3 color="whitesmoke" mt="$4">
          Carga
        </H3>
        <XStack gap="$4" ai="center">
          <TouchableOpacity onPress={() => handleUpdateWeight(updatedWeight - 1)}>
            <Ionicons name="remove-circle" size={24} color="#00C896" />
          </TouchableOpacity>
          <Text color="whitesmoke" fontSize="$8">
            {updatedWeight + parseInt(weight.toString(), 10)} kg
          </Text>
          <TouchableOpacity onPress={() => handleUpdateWeight(updatedWeight + 1)}>
            <Ionicons name="add-circle" size={24} color="#00C896" />
          </TouchableOpacity>
        </XStack>
        <Card bordered elevate paddingHorizontal="$4" pb="$4" mt="$4">
          <Card.Header ai="center" jc="center">
            <Text color="$gray12" fontSize="$6">
              Execução
            </Text>
          </Card.Header>
          {Array.from(Array(+series)).map((_, index) => {
            return (
              <XStack jc="space-between" ai="center" gap="$4" marginVertical="$2" key={index}>
                <Text color="whitesmoke" fontSize="$5">
                  Série {index + 1}
                </Text>
                <View borderBottomColor="$primaryGreen" borderBottomWidth="$0.25" w="$10" />
                <TouchableOpacity
                  style={{
                    backgroundColor: serieCompleted.includes(index) ? 'gray' : '#00C896',
                    padding: 8,
                    borderRadius: 8,
                  }}
                  disabled={serieCompleted.includes(index)}
                  onPress={() => handleSerieCompleted(index)}>
                  <Text color="$primaryBlack" fontWeight="500">
                    Iniciar descanso
                  </Text>
                </TouchableOpacity>
              </XStack>
            );
          })}
        </Card>
        <Paragraph fontSize="$3" ta="center" color="$primaryGray" mt="$3">
          Utilize o card de execução acima, ele vai te ajudar a marcar seu tempo de descanso e
          controlar melhor a execução das suas séries.
        </Paragraph>
      </YStack>
    </ScrollView>
  );
}
