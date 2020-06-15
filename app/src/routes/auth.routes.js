import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import UserRegistration from '../pages/UserRegistration'
import TruckRegistration from '../pages/TruckRegistration'

const AuthStack = createStackNavigator()

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Login'}} />
            <AuthStack.Screen name="UserRegistration" component={UserRegistration} options={{title: 'Cadastre-se'}} />
            <AuthStack.Screen name="TruckRegistration" component={TruckRegistration} options={{title: 'Cadastre seu veículo'}} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes
