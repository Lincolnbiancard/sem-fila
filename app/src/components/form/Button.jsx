import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/form/primary'

const CustomButton = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={ styles.textButton }>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton