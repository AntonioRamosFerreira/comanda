import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/burguer.jpg')} />
            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <TextInput style={styles.input} placeholder='e-mail' />
            <TextInput style={styles.input} placeholder='senha' secureTextEntry />
            <TouchableOpacity onPress={() => navigation.navigate('Comanda') }>
                <Text style={styles.button}>entrar</Text>
            </TouchableOpacity>
            
        </View>
    );
}
