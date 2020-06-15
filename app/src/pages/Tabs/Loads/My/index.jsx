import React from 'react'
import { Text, View } from 'react-native'

import styles from '../../../../styles/form/primary'

import Header from '../../../../components/global/header'
import LoadContainer from '../LoadContainer'

const container = {
    justifyContent: 'flex-start'
}

const MyLoads = () => {
    return (
        <View style={{ ...styles.container, ...container }}>
            <Header label="Meus Fretes" />
            <View style={{marginTop: 70}}></View>
            <LoadContainer buttonTitle='Iniciar' />
            <LoadContainer buttonTitle='Iniciar' />
            <LoadContainer buttonTitle='Iniciar' />
        </View>
    )
}

export default MyLoads