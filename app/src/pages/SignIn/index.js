import React from 'react';
import { View } from 'react-native'
import { useAuth } from '../../contexts/auth'

import Input from '../../components/form/Input'
import Link from '../../components/form/Link'
import Button from '../../components/form/Button'

import Logo from "../../assets/logo.svg";
import styles from '../../styles/form/primary'

const SignIn = ({ navigation: { navigate } }) => {
    const { signIn } = useAuth()
    const[username, setUsername] = React.useState('');
    const[password, setPassword] = React.useState('');

    function handleSignIn() {
        signIn()
    }

    return (
        <View style={ styles.container }>
            <Logo width={250} height={250} style={{ marginBottom: 40 }} />
            <View style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <Input label="CPF/CNPJ" value={username} onChangeText={text => setUsername(text)} keyboardType='numeric' placeholder='Coloque seu CPF/CNPJ' />
                <Input label="Senha" value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder='Coloque sua senha' />
                <Link label="Esqueci a senha" />
            </View>
            <View style={{ ...styles.row, marginTop: 100 }} >
                <Link label="Criar Conta" fontSize={15} onPress={() => navigate('UserRegistration') } />
                <Button title="Entrar" onPress={handleSignIn} />
            </View>
        </View>
    )
}

export default SignIn;