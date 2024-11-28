import React from "react";
import { Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./style.js";

export default function Home() {
  const route = useRoute();
  const { peso } = route.params;
  const consumoAgua = (peso * 0.035).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Consumo de água</Text>
        <Text style={styles.label}>
          Você precisa consumir {consumoAgua} litros de água por dia
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/fundo-home.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}