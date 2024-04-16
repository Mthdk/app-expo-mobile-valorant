import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import PlayerModel from "../../../models/PlayerModel";

type Props = {
  data: PlayerModel;
  onPress: () => void;
};

export function CardComp({ data, onPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.nome}>{"Nome: " + data.primeiroNome}</Text>
          <Text></Text>
          <Text style={styles.sobrenome}>{"Sobrenome: " + data.segundoNome}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.email}>{"E-mail: " + data.email}</Text>
          <Text style={styles.ender}>{"Cidade: " + data.cidade}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialIcons
          name="person"
          size={35}
          color="#888D97"
        />
      </TouchableOpacity>
    </View>
  );
}
