import { Text, View, Pressable, TextInput } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useRef } from 'react';
import YoutubeIframe from 'react-native-youtube-iframe';
import { Dimensions } from 'react-native';

export default function Infos() {
  const navigation = useNavigation();
  const [peso, setPeso] = useState("");

  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de consumo de água</Text>
      <Text style={styles.label}>Informe seu peso:</Text>
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        value={peso} 
        onChangeText={setPeso} 
        placeholder="Digite seu peso (kg)"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
        onPress={() => navigation.navigate("Home", { peso: peso })}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>
      <Text style={styles.label}>A importância de beber água:</Text>
      <YoutubeIframe
        ref={playerRef}
        height={Dimensions.get('window').width * (9 / 16) * 2/3}
        width={Dimensions.get('window').width * 2/3}
        videoId="dQw4w9WgXcQ"
        play={playing}
        onChangeState={onStateChange}
      />
    </View>
  );
}
