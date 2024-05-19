import FontAwesome from '@expo/vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={36} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  const tabBarHeight = Platform.select({
    ios: 100,
    android: 70,
  });

  const statusBarHeight = Constants.statusBarHeight;

  return (
    <>
      <Tabs
        sceneContainerStyle={{ paddingTop: statusBarHeight, backgroundColor: '#000' }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
            height: tabBarHeight,
          },
          tabBarActiveTintColor: '#00c896',
          tabBarLabelStyle: { fontSize: 14 },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Treinos',
            tabBarIcon: ({ color }) => <TabBarIcon name="external-link" color={color} />,
          }}
        />
        <Tabs.Screen
          name="performance"
          options={{
            title: 'Desempenho',
            tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {},
});
