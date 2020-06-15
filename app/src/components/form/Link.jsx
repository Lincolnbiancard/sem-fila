import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/form/primary'


const Link = ({ label, fontSize, onPress }) => {
    return (
        <View>
            <Text style={{ ...styles.link, fontSize: fontSize, textTransform: 'none' }} onPress={onPress} >
                { label }
            </Text>
        </View>
    )
}

export default Link