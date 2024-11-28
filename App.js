import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import { useEffect, useState, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

import Inicio from "./src/pages/Inicio";
import Infos from './src/pages/Infos';
import Home from './src/pages/Home';

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Hora de se hidratar! 💧",
        body: "Já completou sua meta diária de água hoje?",
        data: { screen: "Home" },
      },
      trigger: null,
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificação recebida:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      const screen = response.notification.request.content.data.screen;
      console.log('Notificação clicada:', screen);
      if (screen) {
        navigationRef.current?.navigate(screen);
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Inicio">
        <Tab.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ color, size }) => null,
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen 
          name="Infos" 
          component={Infos} 
          options={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ color, size }) => null,
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ color, size }) => null,
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Falha ao obter permissão para notificações!');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    })).data;

    console.log('Token de notificação:', token);
  } else {
    alert('Notificações só funcionam em dispositivos reais.');
  }

  return token;
}
