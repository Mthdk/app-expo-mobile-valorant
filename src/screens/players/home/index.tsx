import React, { useCallback, useState } from "react";
import { View, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";
import { getAllPlayers } from "../../../controllers/PlayerController";
import PlayerModel from "../../../models/PlayerModel";
import { CardComp } from "../../../components/players/card";
import { Input } from "../../../components/input/Input";

type Props = {
  navigation: any;
};

const backgroundImage = require("../../../../assets/imagehome.jpg"); // Importe sua imagem de fundo

export const HomeComp = ({ navigation }: Props) => {
  const pageName = "Players";
  const [data, setData] = useState<PlayerModel[]>([]);
  const [term, setTerm] = useState("");

  function handleEdit(id: any) {
    navigation.navigate(pageName, { id: id });
  }

  useFocusEffect(
    useCallback(() => {
      setTerm("");
      handleFectchData();
    }, [])
  );

  async function handleFectchData() {
    try {
      console.log("Pesquisa: " + term);

      var data = await getAllPlayers(term);
      setData(data);
    } catch (e) {
      console.log("Erro: " + e);
    }
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.Container}>
      <View style={styles.ViewContainer}>
        <View style={styles.SearchContainer}>
          <Input
            placeholder="Pesquise pelo Nome"
            onChangeText={(text) => {
              console.log("text: " + text);
              setTerm(text);
            }}
            value={term}
          ></Input>

          <TouchableOpacity
            style={{
              alignItems: "center",
              paddingTop: 20,
              paddingRight: 5,
              paddingLeft: 5,
            }}
            onPress={() => {
              console.log("Filtrando por Nome: ");

              handleFectchData().then(() => {
                console.log("Filtrando por Nome - Carregou dados: ");
              });
            }}
          >
            <MaterialIcons name="search" size={35} color="#836FFF" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <CardComp data={item} onPress={() => handleEdit(item.id)} />
          )}
        />
      </View>
    </ImageBackground>
  );
};