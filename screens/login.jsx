import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login({navigation}) 
{
    
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState ("")
    const [senha, setSenha] = useState ("")
    const [erro, setErro] = useState("")

    async function handleLogin(){
        if (await login({email, senha})) {
            navigation.navigate('Comanda')
    } else {
        setErro(" email ou senha invalidos ")
    }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/burguer.jpg')} />
            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <TextInput style={styles.input} placeholder='e-mail'
            value={email}
            onChangeText={setEmail}
            />
            <TextInput style={styles.input} placeholder='senha'
            value = {senha}
            onChangeText={setSenha}
            secureTextEntry 
            />

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.button}>entrar</Text>
            </TouchableOpacity>
            

            <Text style={styles.erro}>{erro}</Text>

        </View>
    );
}
