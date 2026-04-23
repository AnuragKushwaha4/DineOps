import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Loader from "../Components/CommanComponents/Loader"
import { getData } from '../Https/index'
import { setUser } from "../Redux/Slice/UserSlice"
const ProtectedRoute = ({ children }) => {

  const { isAuth } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchUser = async () => {
      try {

        const res = await getData()
        dispatch(setUser(res.data.data))   // store user in redux

      } catch (err) {
        console.log("Not authenticated")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

  }, [])

  if (loading) return <Loader />

  if (!isAuth) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}

export default ProtectedRoute