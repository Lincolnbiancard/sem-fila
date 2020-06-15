import React from 'react'
import { View, Text, Picker } from 'react-native'
import styles from '../../styles/form/primary'


const Select = ({ label, onChangeValue, selectedValue }) => {
    return (
        <View style={{ width: '100%', paddingHorizontal: 20 }}>
            <Text style={styles.label} >
                {label}
            </Text>
            <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.select}
                    onValueChange={onChangeValue}
                >
                    <Picker.Item label="Bi-Truck" value="bitruck" />
                    <Picker.Item label="Bitrem LS Traçado (3/2/2 Eixos)" value="" />
                    <Picker.Item label="Bitrem LS Trucado (3/2/2 Eixos)" value="" />
                    <Picker.Item label="Bitrem Toco (2/2/2 Eixos)" value="" />
                    <Picker.Item label="Carreta Direc. Vanderléia (2/3 Eixos)" value="" />
                    <Picker.Item label="Carreta Direc. Vanderléia Traçada (3/3 Eixos)" value="" />
                    <Picker.Item label="Carreta Direc. Vanderléia Trucada (3/3 Eixos)" value="" />
                    <Picker.Item label="Carreta LS Traçada (3/3 Eixos)" value="" />
                    <Picker.Item label="Carreta LS Traçada Simples (3/2 Eixos)" value="" />
                    <Picker.Item label="Carreta LS Trucada (3/3 Eixos)" value="" />
                    <Picker.Item label="Carreta LS Trucada Simples (3/2 Eixos)" value="" />
                    <Picker.Item label="Carreta Toco (2/3 Eixos)" value="" />
                    <Picker.Item label="Carreta Toco Simples (2/2 Eixos)" value="" />
                    <Picker.Item label="Rodotrem Centopéia (4/3/3 Eixos)" value="" />
                    <Picker.Item label="Rodotrem LS Traçado (3/3/3 Eixos)" value="" />
                    <Picker.Item label="Rodotrem LS Trucado (3/3/3 Eixos)" value="" />
                    <Picker.Item label="Rodotrem Toco (2/3/3 Eixos)" value="" />
                    <Picker.Item label="Só Cavalo Mecânico (4x2)" value="" />
                    <Picker.Item label="Só Cavalo Mecânico Centopéia (8x2)" value="" />
                    <Picker.Item label="Só Cavalo Mecânico LS (6x2)" value="" />
                    <Picker.Item label="Só Cavalo Mecânico LS Traçado (6x4)" value="" />
                    <Picker.Item label="Toco" value="" />
                    <Picker.Item label="Toco 3/4" value="" />
                    <Picker.Item label="Tritrem" value="" />
                    <Picker.Item label="Truck" value="" />
                    <Picker.Item label="Utilitário" value="" />
                    <Picker.Item label="VUC / HR" value="" />
                    <Picker.Item label="Van" value="" />
                </Picker>
            </View>
        </View>
    )
}

export default Select