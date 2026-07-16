import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
   <div className='/d-flex /flex-column   justify-content-start'>
     <h1>EPP ME EPP ME, USER DEY CARRY ME GO WHERE I NO KNOW</h1>
     <button className='btn btn-dark' onClick={()=>navigate("/")}>Go Home</button>
   </div>
  )
}

export default NotFound