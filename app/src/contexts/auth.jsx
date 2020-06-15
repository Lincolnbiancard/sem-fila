import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'

const AuthContext = createContext({ signed: true })

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@SEMFILA:user')
            const storageToken = await AsyncStorage.getItem('@SEMFILA:token')

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser))
                setToken(JSON.parse(storageToken))
                setLoading(false)
            }
        }
    }, [])

    async function signIn() {
        setLoading(true)
        const response = await auth.signIn()
        setLoading(false)

        if (response.user && response.token) {
            setUser(response.user)
            setToken(response.token)

            await AsyncStorage.setItem('@SEMFILA:user', JSON.stringify(response.user))
            await AsyncStorage.setItem('@SEMFILA:token', JSON.stringify(response.token))
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
            setToken(null)
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}