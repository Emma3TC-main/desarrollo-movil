import * as React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; 
function ChatScreen() {
  return <Text>Lista de Chats</Text>;
}

function EstadosScreen() {
  return <Text>Estados</Text>;
}

function LlamadasScreen() {
  return <Text>Llamadas</Text>;
}

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Chats") {
            iconName = "chatbubble";
          } else if (route.name === "Estados") {
            iconName = "ellipse";
          } else if (route.name === "Llamadas") {
            iconName = "call";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Estados" component={EstadosScreen} />
      <Tab.Screen name="Llamadas" component={LlamadasScreen} />
    </Tab.Navigator>
  );
}