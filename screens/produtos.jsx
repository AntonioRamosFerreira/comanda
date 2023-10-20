import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from '../style.js';
import CardProduto from '../components/card.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Produtos({navigation}) {
    const [produtos, setProdutos] = useState([])

    useEffect( () => {
        axios.get("http://localhost:3000/produtos")
          .then(resp => setProdutos(resp.data))
    }, [] )


    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => navigation.navigate('Comanda') } />
                </TouchableOpacity>

                <View style={styles.box}>
                    <Text>comanda</Text>
                    <Text style={styles.title}>2457</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="procurar" />

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>
                {produtos.map(p => <CardProduto key={p.id} produto={p}/> )}
               
            </ScrollView>


            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>finalizar</Text>
            </TouchableOpacity>
        </View>

    )
}