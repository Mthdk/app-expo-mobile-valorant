import AsyncStorage from "@react-native-async-storage/async-storage";
import PlayerModel from "../models/PlayerModel";
import uuid from "react-native-uuid";
import baseInicial from "../../baseLocal.json";

let dbKey = "@fromHook:base_competidores";

export const getAllPlayers = async (term: string) => {
  try {

    await initDatabase();

    const jsonValue = await AsyncStorage.getItem(dbKey);
    const data = jsonValue ? JSON.parse(jsonValue) : [];

    let listaPlayers = [];
    for (let i = 0; i < data.length; i++) {
      if (term !== undefined && term !== "" && data[i].primeiroNome.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) === -1) {
        continue;
      }
      listaPlayers.push(getPlayerFromData(data[i]));
    }

    return listaPlayers;
  } catch (error) {
    console.log("getAllPlayers: " + error);
  }

  return [];
};

export const addPlayer = async (comp: PlayerModel) => {
  try {
    comp.id = uuid.v4().toString();
    var players = await getAllPlayers("");
    const dbData = players ? players : [];
    dbData.unshift(comp);

    await AsyncStorage.setItem(dbKey, JSON.stringify(dbData));

  } catch (error) {
    console.log("addPlayer: " + error);
  }
};

export const updatePlayer = async (comp: PlayerModel) => {
  try {
    console.log("updatePlayer: " + JSON.stringify(comp));


    var players = await getAllPlayers("");
    const dbData = players ? players : [];
    const indexToRemove = dbData.findIndex((item) => item.id === comp.id);
    if (indexToRemove !== -1) {
      dbData.splice(indexToRemove, 1);
      const previewData = [...dbData, comp];
      await AsyncStorage.setItem(dbKey, JSON.stringify(previewData));

      return true;
    }

  } catch (error) {
    console.log("updatePlayer: " + error);
  }
  return false;
};

export const deletePlayer = async (comp: PlayerModel) => {
  try {
    var players = await getAllPlayers("");
    const dbData = players ? players : [];
    const indexToRemove = dbData.findIndex((item) => item.id === comp.id);
    if (indexToRemove !== -1) {
      dbData.splice(indexToRemove, 1);
      await AsyncStorage.setItem(dbKey, JSON.stringify(dbData));
      return true;
    }
  } catch (error) {
    console.log("deletePlayer: " + error);
  }
  return false;
};

function getPlayerFromData(data: any) {
  return new PlayerModel(
    data?.id,
    data?.primeiroNome,
    data?.segundoNome,
    data?.email,
    data?.cep,
    data?.rua,
    data?.numero,
    data?.bairro,
    data?.cidade,
    data?.uf
  );
}


async function initDatabase() {
  const dbData = await AsyncStorage.getItem(dbKey);
  if (dbData === null) {
    await AsyncStorage.setItem(dbKey, JSON.stringify(baseInicial));
  }
}