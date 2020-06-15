import React from 'react'
import { View, Text } from 'react-native'
import Logomarca from '../../assets/logomarca'

const styles = {
    container: {
        position: 'absolute',
        backgroundColor: '#3498DB',
        top: 0,
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 10
    },
    label: {
        color: '#FFF',
        marginLeft: 15,
        fontSize: 17
    },
    logoTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10
    }
}

const Header = ({ label }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoTitle}>
                <Logomarca width={25} height={25} />
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    )
}

export default Header