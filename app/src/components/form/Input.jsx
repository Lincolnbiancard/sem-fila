import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from '../../styles/form/primary'


const Button = ({ width, paddingHorizontal, label, value, onChangeText, secureTextEntry, keyboardType, placeholder }) => {
    return (
        <View style={{ width: width ? width : '100%', paddingHorizontal: paddingHorizontal != undefined ? paddingHorizontal : 20 }}>
            <Text style={styles.label}>
                { label }
            </Text>
            <TextInput
                label="Senha"
                placeholder={placeholder}
                keyboardType={keyboardType ? keyboardType : 'default'}
                secureTextEntry={!!secureTextEntry}
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Button