import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Loader from "../Components/CommanComponents/Loader"

import { getData } from '../Https/index'
const ProtectedRoute = ({children}) => {
const { isAuth } = useSelector((state) => state.user)
const dispatch = useDispatch();
  

    if (!isAuth) {
  return <Navigate to="/auth/login" replace />
}

  return (
    children
  )
}

export default ProtectedRoute
