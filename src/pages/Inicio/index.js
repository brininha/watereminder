import { Text, View, Image, Pressable, ImageBackground } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/fundo-app.png')}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <Text style={styles.text}><Text style={styles.highlight}>Water</Text>eminder</Text>
                <Pressable style={({pressed}) => [
                styles.button,
                pressed && styles.pressedButton,
            ]} onPress={() => navigation.navigate('Infos')}>
                    <Image source={require("../../../assets/images/btn-start.png")} style={styles.btn}/>
                </Pressable>
            </ImageBackground>
        </View>
    );
}