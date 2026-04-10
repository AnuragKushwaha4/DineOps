import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Loader from "../Components/CommanComponents/Loader"
const ProtectedRoute = ({children}) => {
const { isAuth } = useSelector((state) => state.user)

  

    if (!isAuth) {
  return <Navigate to="/auth/login" replace />
}
  return (
    children
  )
}

export default ProtectedRoute
