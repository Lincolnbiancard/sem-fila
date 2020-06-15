import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const styles = {
    container: {
        width: '95%',
        height: 180,
        paddingHorizontal: 30,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        marginHorizontal: '5%',
        marginTop: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    photo: {
        backgroundColor: '#C7C8D9',
        width: 48,
        height: 48,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoText: {
        color: '#3498DB'
    },
    companyName: {
        color: '#8B8B8B',
        fontSize: 15,
        fontWeight: 'bold'
    },
    setor: {
        color: '#8B8B8B',
        fontSize: 12
    },
    infoText: {
        color: '#8B8B8B'
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#3498DB',
        borderRadius: 50,
    },
    textButton: {
        color: '#fff',
        fontSize: 13,
    }
}

const MyLoads = ({ buttonTitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.photo}>
                    <Text style={styles.photoText}>HR</Text>
                </View>
                <View style={{marginLeft: 30}}>
                    <Text style={styles.companyName}>MILHOS BRASIL</Text>
                    <Text style={styles.setor}>Rama: Agro</Text>
                </View>
            </View>
            <View style={{ ...styles.row, justifyContent: 'space-between' }}>
                <Text style={styles.infoText}>Origem: Salvador / BA</Text>
                <Text style={styles.infoText}>Destino: São Paulo / SP</Text>
            </View>
            <View style={{ ...styles.row, justifyContent: 'space-between' }}>
                <Text style={styles.infoText}>Distância: 175km</Text>
                <Text style={styles.infoText}>Carregamento: 17/04 às 10h00</Text>
            </View>
            <View style={{ ...styles.row, justifyContent: 'space-between' }}>
                <Text style={styles.infoText}>R$ 1.500,00</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyLoads