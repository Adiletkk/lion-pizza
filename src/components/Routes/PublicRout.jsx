import  { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


function PublicRout({children}) {
    const auth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate();
    useEffect(() =>{ 
        if(auth){ 
            navigate('/admin')
        }
    } ,[auth])

  return children
    
}

export default PublicRout