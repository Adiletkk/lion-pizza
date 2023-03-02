import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function PrivateRout({children}) {
   const auth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate();
    useEffect(() =>{ 
        if(!auth){ 
            navigate('/login')
        }
    } ,[auth])

  return children
    
}

export default PrivateRout