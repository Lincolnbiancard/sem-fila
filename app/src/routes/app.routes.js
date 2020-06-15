import React from 'react'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons'

import MyLoadsTab from '../pages/Tabs/Loads/My'
import NewLoadsTab from '../pages/Tabs/Loads/New'
import ProfileTab from '../pages/Tabs/Profile'
import { Text } from 'react-native'

const icons = {
    MyLoads: {
        lib: Entypo,
        name: 'back-in-time'
    },
    NewLoads: {
        lib: Feather,
        name: 'truck'
    },
    Profile: {
        lib: MaterialIcons,
        name: 'person-outline'
    }
}

const AppTab = createBottomTabNavigator()

const styles = {
    labelTab: {
        borderBottomColor: '#F39476',
        color: '#FFF',
        fontSize: 10,
        width: 80,
        textAlign: 'center'
    }
}

const titles = {
    MyLoads: 'Meus fretes',
    NewLoads: 'Novos Fretes',
    Profile: 'Perfil'
}

const AppRoutes = () => {
    return (
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    const { lib: Icon, name } = icons[route.name]

                    return <Icon name={name} color={color} size={size} />
                },
                tabBarLabel: ({ focused }) => {
                    return <Text 
                        style={{
                            ...styles.labelTab,
                            borderBottomWidth: focused ? 4 : 0,
                            paddingBottom: focused ? 1 : 5
                        }}
                    >
                        {titles[route.name]}
                    </Text>
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#3498DB',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 55,
                    padding: 5
                },
                activeTintColor: '#FFF',
                inactiveTintColor: '#C7C8D9',
            }}
        >
            <AppTab.Screen name="MyLoads" component={MyLoadsTab} />
            <AppTab.Screen name="NewLoads" component={NewLoadsTab} title="Novos Fretes" />
            <AppTab.Screen name="Profile" component={ProfileTab} title="Perfil" />
        </AppTab.Navigator>
    )
}

export default AppRoutes
