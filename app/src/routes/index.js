import React from 'react'
import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import Loading from '../components/global/loading'

const Routes = () => {
    const { signed, loading } = useAuth()

    if (loading) {
        return <Loading />
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes