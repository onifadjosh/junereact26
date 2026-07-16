import React, { useState } from 'react'

const AddUser = ({saveUser}) => {
     const [firstName, setfirstName] = useState("")
      const [lastName, setlastName] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
  return (
    <div>
         <div>
          <input type="text"  placeholder='First Name' onChange={(e)=>setfirstName(e.target.value)}/> <br />
          <input type="text" placeholder='Last Name' onChange={(e)=>setlastName(e.target.value)}/> <br />
          <input type="text" placeholder='Email'  onChange={(e)=>setemail(e.target.value)}/> <br />
          <input type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/> <br />


          <button onClick={()=>saveUser({firstName, lastName, email, password})}>Save user</button>
      </div>
    </div>
  )
}

export default AddUser