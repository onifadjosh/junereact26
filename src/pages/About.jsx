import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseNum, increaseAgeNum, increaseNum } from '../redux/appSlice'

const About = () => {
  const age = useSelector((state)=>state.age)

  const dispatch = useDispatch()
  return (
    <div>
      <h1>{age}</h1>

      <button onClick={()=>dispatch(increaseNum())}>increase age</button>

      <button onClick={()=>dispatch(increaseAgeNum(10))}>increase age by 10</button>

      <button onClick={()=>dispatch(decreaseNum())}>decrease age</button>
    </div>
  )
}

export default About