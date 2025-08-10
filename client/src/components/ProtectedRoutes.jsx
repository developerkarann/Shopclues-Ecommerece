import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const token = useSelector((state)=> state.auth.token)
    const naviate = useNavigate()

    useEffect(() => {
      if(!token){
        return naviate('/login')
    }
    }, [])
    

  return children
}

export default ProtectedRoutes