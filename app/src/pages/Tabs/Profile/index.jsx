import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../../../styles/form/primary'

import Header from '../../../components/global/header'

import Photo from '../../../assets/photo.svg'

import { FontAwesome } from '@expo/vector-icons'

import Trucker from '../../../assets/trucker.svg'

const container = {
    justifyContent: 'flex-start'
}

const customStyles = {
    nameText: {
        color: '#8B8B8B',
        fontSize: 25,
        fontWeight: 'bold'
    },
    infoText: {
        color: '#8B8B8B',
        fontSize: 15,
        marginBottom: 10
    },
    infoContainer: {
        width: '95%',
        paddingHorizontal: 30,
        paddingVertical: 15,
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
    contact: {
        color: '#3498DB',
        fontSize: 15,
        marginLeft: 10,
    }
}

const MyLoads = () => {
    return (
        <View style={{ ...styles.container, ...container }}>
            <Header label="Perfil" />
            <View style={{ marginTop: 100 }}></View>
            <Photo width={180} height={180} style={{ marginBottom: 25 }}/>
            <Text style={customStyles.nameText}>Roberto Moraes Filho</Text>
            <Text style={{ ...customStyles.nameText, fontWeight: '100' }}>82</Text>
            <Text style={customStyles.infoText}>Fretes Realizados</Text>
            <View style={customStyles.infoContainer}>
                <TouchableOpacity style={{ ...styles.button, marginTop: 10, width: 100, position: 'absolute', right: 40, top: 45 }}>
                    <Text style={styles.textButton}>Editar</Text>
                </TouchableOpacity>
                <Text style={customStyles.infoText}>Motorista</Text>
                <Text style={customStyles.infoText}>CPF: 855.944.980-95</Text>
                <View style={customStyles.row}>
                    <FontAwesome size={20} name="whatsapp" color="#3498DB" />
                    <Text style={customStyles.contact}>(11) 94002-8922</Text>
                </View>
                <Text style={{ ...customStyles.infoText, marginTop: 15 }}>Caminhão - Eixo Simples</Text>
                <Text style={customStyles.infoText}>Documentação: Aprovada</Text>
                <Trucker style={{ alignSelf: 'center', marginVertical: 15 }} />
            </View>
        </View>
    )
}

export default MyLoads