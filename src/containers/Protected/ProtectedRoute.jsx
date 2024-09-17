import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/loading/Loading'

const ProtectedRoutes = () => {
	const {user, loading} = useAuth();
	if(loading)return <Loading/>

	if(!user) return <Navigate to='/'/>

	return <><Outlet/></>
}

export default ProtectedRoutes
