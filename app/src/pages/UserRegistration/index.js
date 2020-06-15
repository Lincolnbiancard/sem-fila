import React, { useState } from 'react';
import { View, Text } from 'react-native'

import Input from '../../components/form/Input'
import Link from '../../components/form/Link'
import Button from '../../components/form/Button'
import Upload from '../../components/form/Upload'

import styles from '../../styles/form/primary'
import { ScrollView } from 'react-native-gesture-handler';

const fields = {
    fullName: null,
    cpf_cnpj: null,
    mobile: null,
    cnh: null,
    cnhDueDate: null,
    rntrc: null,
    userType: null
}

const UserRegistration = ({ navigation: { navigate } }) => {
    const [form, setForm] = useState(fields)

    return (
        <ScrollView>
            <Text style={styles.titleHeader}>PERFIL</Text>
            <Upload label='Adicionar Foto' />
            <Input label="Nome Completo" value={form.fullName} onChangeText={text => setForm({ ...form, fullName: text })} placeholder='Coloque seu nome completo' />
            <Input label="CPF/CNPJ" value={form.cpf_cnpj} keyboardType='numeric' onChangeText={text => setForm({ ...form, cpf_cnpj: text })} placeholder='Coloque seu CPF/CNPJ' />
            <Input label="Whatsapp" value={form.mobile} keyboardType='numeric' onChangeText={text => setForm({ ...form, mobile: text })} placeholder='Coloque seu Whatsapp' />
            <View style={{ ...styles.row, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <Input width="55%" paddingHorizontal={0} label="Número da CNH" value={form.cnh} keyboardType='numeric' onChangeText={text => setForm({ ...form, cnh: text })} placeholder='Coloque o número da CNH' />
                <Input width="40%" paddingHorizontal={0} label="Vencimento" value={form.cnhDueDate} keyboardType='numeric' onChangeText={text => setForm({ ...form, cnhDueDate: text })} placeholder='DD/MM/AAAA' />
            </View>
            <Input label="Número de registro da ANTT" value={form.rntrc} keyboardType='numeric' onChangeText={text => setForm({ ...form, rntrc: text })} placeholder='Coloque seu RNTRC' />
            <View style={{ ...styles.row, marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 30 }} >
                <Link label="Voltar" fontSize={15} onPress={() => navigate('SignIn')} />
                <Button title="Avançar" onPress={() => navigate('TruckRegistration')} />
            </View>
        </ScrollView>
    )
}

export default UserRegistration;