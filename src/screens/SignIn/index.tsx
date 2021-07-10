import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { View, Text, Image, StatusBar } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={"stretch"}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conect-se {`\n`}e Organize {`\n`}
          sua jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title={"Entrar com Discord"} onPress={handleSignIn} />
      </View>
    </View>
  );
}
