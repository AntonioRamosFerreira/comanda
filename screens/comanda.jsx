import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from '../style.js';

export default function Comanda({navigation}) {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>João Carlos</Text>
                </View>
                <MaterialIcons name="exit-to-app" size={24} color="black" onPress={() => navigation.navigate('Home') }/>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Comanda" />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produtos')}>
                    <Text style={styles.buttonText}>confirmar</Text>
                </TouchableOpacity>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
}