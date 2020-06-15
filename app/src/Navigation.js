import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import HomeScreen from './pages/Home'
import WalletScreen from './pages/Wallet'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    }
}

const tabBarOptions = {
    style: {
        backgroundColor: '#131418',
        borderTopColor: '#FFFF00'
    },
    activeTintColor: '#FFF',
    disactiveTintColor: '#92929c'
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        const { lib: Icon, name } = icons[route.name]

        return <Icon name={name} size={size} color={color} />
    }
})

export default function Navigation() {
    return (
        <Tab.Navigator 
            screenOptions={screenOptions}
            tabBarOptions={tabBarOptions}
        >

            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    title: 'Início'
                }}  
            />
            <Tab.Screen
                name='Wallet'
                component={WalletScreen}
                options={{
                    title: 'Carteira'
                }}
            />

        </Tab.Navigator>
    )
}