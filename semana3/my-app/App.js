import { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function App() {
  const [pantalla, setPantalla] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menu}>
        <Button title="Ejemplo 1" onPress={() => setPantalla(1)} />
        <Button title="Ejemplo 2" onPress={() => setPantalla(2)} />
        <Button title="Ejemplo 3" onPress={() => setPantalla(3)} />
      </View>

      {pantalla === 1 && (
        <View style={styles.contenedor}>
          <Text style={styles.texto}>Hola Mundo</Text>
        </View>
      )}

      {pantalla === 2 && (
        <View style={styles.contenedor}>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Logo React Native</Text>
        </View>
      )}

      {pantalla === 3 && (
        <View style={styles.contenedor}>
          <View style={styles.card}>
            <Text style={styles.titulo}>Tarjeta</Text>
            <Text>Ejemplo 3</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: "bold",
  },
});
