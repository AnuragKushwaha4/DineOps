import React from 'react'
import { useSelector } from 'react-redux'
import UnAutherizeHandler from "../CommanComponents/UnAutherizeHandler"
const ProtectedAdmin = ({children}) => {

    const {role}= useSelector(state=>state.user)

    if(role!="admin")return <UnAutherizeHandler/>
    
  return children
}

export default ProtectedAdmin
