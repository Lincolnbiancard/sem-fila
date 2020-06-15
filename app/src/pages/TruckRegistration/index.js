import React, { useState } from 'react';
import { View, Text } from 'react-native'

import Input from '../../components/form/Input'
import Link from '../../components/form/Link'
import Button from '../../components/form/Button'
import Upload from '../../components/form/Upload'
import Select from '../../components/form/Select'

import Trucker from '../../assets/trucker.svg'

import styles from '../../styles/form/primary'

const fields = {
    truckerType: null
}

const TruckRegistration = ({ navigation: { navigate } }) => {
    const [formTruck, setForm] = useState(fields)

    return (
        <View style={ styles.container }>
            <Text style={{ ...styles.titleHeader, marginBottom: 40 }}>CADASTRO DE CAMINHÃO</Text>
            <Select label='Escolha o tipo de caminhão' selectedValue={formTruck.truckerType} onChangeValue={(value, index) => setForm({ ...formTruck, truckerType: value })} />
            <Trucker style={{ marginVertical: 40 }} />
            <Input label="Modelo do veículo" value={formTruck.fullName} onChangeText={text => setForm({ ...formTruck, fullName: text })} placeholder='Coloque o modelo do seu veículo' />
            <View style={{ ...styles.row, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <Input width="55%" paddingHorizontal={0} label="Placa" value={formTruck.cnh} keyboardType='numeric' onChangeText={text => setForm({ ...formTruck, cnh: text })} placeholder='Coloque a placa' />
                <Input width="40%" paddingHorizontal={0} label="Ano" value={formTruck.cnhDueDate} keyboardType='numeric' onChangeText={text => setForm({ ...formTruck, cnhDueDate: text })} placeholder='Ano do veículo' />
            </View>
            <Input label="Carroceria" value={formTruck.fullName} onChangeText={text => setForm({ ...formTruck, fullName: text })} placeholder='Coloque aqui a carroceria' />
            <View style={{ ...styles.row, marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 30 }} >
                <Link label="Voltar" fontSize={15} onPress={() => navigate('SignIn')} />
                <Button title="Avançar" onPress={() => navigate('SignIn')} />
            </View>
        </View>
    )
}

export default TruckRegistration;