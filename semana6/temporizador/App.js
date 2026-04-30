import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function App() {
  const [timeleft, setTimeLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // detener cuando llegue a 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval); // limpiar el intervalo al desmontar
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>
        {timeleft > 0 ? `Tiempo restante: ${timeleft}` : "¡Tiempo agotado!"}
      </Text>
    </View>
  );
}
