import React from 'react'
import { Text, View } from 'react-native'

import styles from '../../../../styles/form/primary'

import Header from '../../../../components/global/header'
import LoadContainer from '../LoadContainer'

const container = {
    justifyContent: 'flex-start'
}

const NewLoads = () => {
    return (
        <View style={{ ...styles.container, ...container }}>
            <Header label="Novos Fretes" />
            <View style={{ marginTop: 70 }}></View>
            <LoadContainer buttonTitle='Me Candidatar' />
            <LoadContainer buttonTitle='Me Candidatar' />
        </View>
    )
}

export default NewLoads