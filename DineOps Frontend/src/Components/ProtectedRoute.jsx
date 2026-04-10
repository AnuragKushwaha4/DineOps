import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const userData = useSelector(state=>state.user)
    if (!userData?.isAuth) {
  return <Navigate to="/auth/login" replace />
}
  return (
    children
  )
}

export default ProtectedRoute
