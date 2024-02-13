import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Avatar, H3, Image, Text, XStack, YStack } from 'tamagui';

export default function ProfileScreen() {
  return (
    <YStack ai="center" pt="$4">
      <H3>Perfil</H3>
      <XStack paddingVertical={80}>
        <Avatar circular size="$14">
          <Avatar.Image src="https://github.com/fernando-tiburcio.png" />
          <Avatar.Fallback bc="#primaryGreen" />
        </Avatar>
        <TouchableOpacity>
          <Feather name="camera" size={24} color="#00C896" style={{ marginLeft: -20 }} />
        </TouchableOpacity>
      </XStack>
      <Text color="whitesmoke" mb="$4" fontSize="$8">
        Fernando Tiburcio
      </Text>
      <Text color="whitesmoke" mb="$2">
        fernando.tiburcio@gmail.com
      </Text>
      <Text color="whitesmoke">(14) 99103 - 8724</Text>
    </YStack>
  );
}
