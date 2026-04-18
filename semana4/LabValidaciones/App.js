import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaPassword, setConfirmaPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const checkPasswordStrength = (pass) => {
    let score = 0;

    if (pass.length >= 6) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[@$!%*?&]/.test(pass)) score++;

    if (score <= 1) return "Débil";
    if (score === 2 || score === 3) return "Media";
    return "Fuerte";
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordStrength(checkPasswordStrength(text));
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (!nombre || !apellido || !email || !password || !telefono) {
      setError("Completa todos los campos obligatorios");
    } else if (!isEmailValid(email)) {
      setError("Correo electrónico inválido");
    } else if (passwordStrength === "Débil") {
      setError("La contraseña es muy débil");
    } else if (password !== confirmaPassword) {
      setError("Las contraseñas no coinciden");
    } else if (!/^\d{9}$/.test(telefono)) {
      setError("Teléfono inválido (9 dígitos)");
    } else {
      setError("");
      alert("Registro exitoso");
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength === "Débil") return "red";
    if (passwordStrength === "Media") return "orange";
    if (passwordStrength === "Fuerte") return "green";
    return "gray";
  };

  const getIcon = (condition) => {
    if (condition === true) return "✔";
    if (condition === false) return "✖";
    return "⚠";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <Text>{getIcon(nombre.length > 0)}</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <Text>{getIcon(apellido.length > 0)}</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <Text>{getIcon(isEmailValid(email))}</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="numeric"
          value={telefono}
          onChangeText={setTelefono}
        />
        <Text>{getIcon(/^\d{9}$/.test(telefono))}</Text>
      </View>

      <TextInput
        style={styles.passwordInput}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />

      {password ? (
        <Text style={{ color: getStrengthColor(), marginBottom: 10 }}>
          Seguridad: {passwordStrength}
        </Text>
      ) : null}

      <TextInput
        style={styles.passwordInput}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmaPassword}
        onChangeText={setConfirmaPassword}
      />

      <Text>
        {getIcon(password && confirmaPassword && password === confirmaPassword)}
      </Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f4f6f8",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 14,
  },

  passwordInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 14,
    marginBottom: 6,
  },

  strengthText: {
    fontSize: 12,
    marginBottom: 8,
  },

  icon: {
    marginLeft: 8,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12, 
    borderRadius: 8,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },

  error: {
    color: "#dc2626",
    marginBottom: 8,
    textAlign: "center",
    fontSize: 13,
  },
});
