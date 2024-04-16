import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
       // alignItems: 'center',
       // justifyContent: 'center',
        // Remova a cor de fundo padrão
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover', // ou 'contain' se preferir
        position: 'absolute',
    },
    list: {
        flex: 1,
        width: '100%'
    },
    listContent: {
        padding: 24,
        paddingBottom: 150
    },
    ViewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    SearchContainer: {
        flexDirection: "row",
        paddingLeft: 50,
        paddingRight: 50,
    },
});