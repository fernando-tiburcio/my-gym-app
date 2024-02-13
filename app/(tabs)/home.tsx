import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'expo-router';
import React from 'react';
import { Accordion, H3, Paragraph, ScrollView, Separator, Square, Text, YStack } from 'tamagui';

import WorkoutCard from '@/components/workoutCard';
import workoutData from '@/data/workout.json';

export default function WorkoutsScreen() {
  return (
    <YStack bg="#000" flex={1}>
      <Text fontSize="$5" textAlign="center" color="$gray12" mt="$3.5" fontWeight="bold">
        Bem vindo de volta, Fernando!
      </Text>
      <Text color="$gray9" mt="$2" textAlign="center">
        {format(new Date(Date.now()), 'PPPP', { locale: ptBR })}
      </Text>
      <Separator
        mt="$4"
        borderColor="$primaryGreen"
        width="80%"
        alignSelf="center"
        borderWidth="$0.25"
      />
      <H3 textAlign="center" mt="$2">
        {workoutData.workout_type}
      </H3>
      <ScrollView scrollEnabled paddingHorizontal="$2">
        <Accordion
          type="single"
          defaultValue={workoutData.workout_specification[0].workout_title}
          collapsible
          mt="$4"
          space="$6">
          {workoutData.workout_specification.map((workout) => {
            return (
              <Accordion.Item value={workout.workout_title} key={workout.workout_title}>
                <Accordion.Trigger
                  flexDirection="row"
                  justifyContent="space-between"
                  paddingTop={8}
                  paddingBottom={8}
                  borderTopLeftRadius={12}
                  borderTopRightRadius={12}>
                  {({ open }: never) => (
                    <>
                      <Paragraph>{workout.workout_title}</Paragraph>
                      <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                        <Ionicons name="chevron-down-circle" size={28} color="#00C896" />
                      </Square>
                    </>
                  )}
                </Accordion.Trigger>
                <Accordion.Content
                  style={{ borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                  <ScrollView horizontal p="$4" scrollEnabled space="$4">
                    {Object.values(workout.exercises).map((exercise) => (
                      <Link
                        key={exercise.title}
                        href={{
                          pathname: '/workout/workoutDetails',
                          params: { ...exercise },
                        }}>
                        <WorkoutCard key={exercise.title} {...exercise} />
                      </Link>
                    ))}
                  </ScrollView>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </ScrollView>
      <Text color="$gray10" ta="center" mt="$4" mb="$2">
        Seu último treino foi no dia 23 de out. {`\n`}e você fez o treino B
      </Text>
    </YStack>
  );
}
