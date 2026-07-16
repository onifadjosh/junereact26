import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFullname } from '../redux/appSlice'

const Contact = () => {
  const currentUser= useSelector((state)=>state.fullname)

  const dispatch = useDispatch()
  return (
    <div>This is my contact page {currentUser} 
    
    
      <button onClick={()=>dispatch(updateFullname())}>update full name</button>
    </div>
  )
}

export default Contact