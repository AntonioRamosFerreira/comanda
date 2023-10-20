import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFBFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBetween: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 4
    },
    button: {
        backgroundColor: '#121A2C',
        color: '#FFBA26',
        padding: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFBA26',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    imagem: {
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
    },
    box: {
        borderColor: '#121A2C',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
    },
    pedidos: {
        width: '100%',
    },
    pedidoData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pedidoDataTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
    },
    cardProduto: {
        borderColor: '#121A2C55',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
    },
    produtoData: {
        flex: 1,
        alignSelf: 'flex-start',
    },
    thumb: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    price: {
        color: '#29A035',
        fontSize: 18,
    },
    spinner: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        borderRadius: 999,
    },
    spinnerMinus: {
        textAlign: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 999,
        width: 24,
        height: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    spinnerPlus: {
        textAlign: 'center',
        backgroundColor: '#121A2C',
        borderRadius: 999,
        width: 24,
        height: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#FFF',
    },
    spinnerValue: {
        textAlign: 'center',
        width: 24,
        height: 24,
        lineHeight: 24,
    },
    scroll: {
        width: '100%',
    }

});