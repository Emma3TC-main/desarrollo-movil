import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabs from "./HomeTab";
import { Text } from "react-native";
import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); 

function PerfilScreen() {
  return <Text>Pantalla de Perfil</Text>;
}

function ConfiguracionScreen() {
  return <Text>Pantalla de configuración</Text>;
}

function DrawerMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={HomeTabs} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
      <Drawer.Screen name="Configuración" component={ConfiguracionScreen} />
    </Drawer.Navigator>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Button
      title="Ingresar"
      onPress={() => navigation.navigate("Home")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
