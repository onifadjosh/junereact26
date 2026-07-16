import React, { useState } from 'react'

const DisplayUser = ({allUsers, deleteUser, editUser}) => {
    const [firstName, setfirstName] = useState("")
          const [lastName, setlastName] = useState("")
          const [email, setemail] = useState("")
          const [password, setpassword] = useState("")
          const [currentIndex, setcurrentIndex] = useState(null)
  return (
    <div><div className=''>

    {
      allUsers.map((user, index)=>(
        <div className="card" style={{width: "18rem"}} key={index}>
          <div className="card-body">
            <h5 className="card-title">{user.firstName+" "+user.lastName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <button className='btn btn-danger' onClick={()=>deleteUser(index)}>Delete</button>
           <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={()=>setcurrentIndex(index)}>Edit</button>
          </div>
        </div>
      ))
    }
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text"  placeholder='First Name' onChange={(e)=>setfirstName(e.target.value)}/> <br />
          <input type="text" placeholder='Last Name' onChange={(e)=>setlastName(e.target.value)}/> <br />
          <input type="text" placeholder='Email'  onChange={(e)=>setemail(e.target.value)}/> <br />
          <input type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/> <br />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>editUser(currentIndex, {firstName, lastName, email, password})} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>


</div>
  )
}

export default DisplayUser