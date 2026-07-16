// import React from 'react'
// import Button from './components/Button'

// const App = () => {

//   const design = {
//     color:"green",
//     backgroundColor:"yellow"
//   }

//   const name= "sade"
//   return (
//     <div >

//       <div className='text'>
//           This is my first react application
//       </div>

//       <h1 style={{color:"red", backgroundColor:"black"}}>This is another text from there</h1>


//       <h1 style={design}>This is another type of styling</h1>


//       <h1 className='bg-dark text-danger'>This is a text to test bootstrap </h1>


//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>


//       <h1>{name}</h1>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//     // const [first, setfirst] = useState(second)
//   const [number, setnumber] = useState(20)
//   const [name, setname] = useState("pampam")
  

//   const incNum =()=>{
//     setnumber(number+1)
//   }


//   const changeName=()=>{
//     setname("Josh")
//   }
  
//   return (
//     <div>
//         <button onClick={incNum} className='btn btn-dark'><h1>{number}</h1></button>

//         <button className='btn btn-dark' onClick={()=>setname("Josh")}>{name}</button>
//     </div>
//   )
// }

// export default App

//binding forms to state

// import React, { useState } from 'react'
// import Button from './components/Button'
// import AddUser from './components/AddUser'
// import DisplayUser from './components/DisplayUser'

// const App = () => {

//   // const [firstName, setfirstName] = useState("")
//   // const [lastName, setlastName] = useState("")
//   // const [email, setemail] = useState("")
//   // const [password, setpassword] = useState("")
//   const [allUsers, setallUsers] = useState([])
  

//   // const handleInputChange=(event)=>{
//   //   // console.log("I am working");
//   //   console.log(event.target.value);

//   //   setfirstName(event.target.value)
    
    
//   // }

//   const saveUser=(user)=>{
//     // let user = {firstName, lastName, email, password}

//     console.log(user);

//     let fruits = ["orange", "mango", "lemon", "apple"]

//     let newFruits = [...fruits, "grape", "watermelon", "pineapple"]

//     console.log(newFruits);

//     let newAllUsers = [...allUsers, user]
//     setallUsers(newAllUsers)
    
//   }


//   const deleteUser=(index)=>{
//     let newAllUsers = [...allUsers]
    
//     newAllUsers.splice(index, 1)

//     setallUsers(newAllUsers)
//   }


//   const editUser=(index, user)=>{
//     let newAllUsers= [...allUsers]

//     newAllUsers.splice(index, 1, user)

//     setallUsers(newAllUsers)
//   }

//   const clickBtn=()=>{
//     alert("I am a boy")
//   }

//   return (
//     <div>

//      <Button title="start" color="btn-success" func={clickBtn}/>
//      <Button title="stop" color="btn-danger"/>
//      <Button title="pause" color="btn-warning"/>




//       <h1>Register Page</h1>

     
//     <AddUser saveUser={saveUser}/>



//       <hr />

      
//     <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>





//     </div>
//   )
// }

// export default App


import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Formikk from './pages/Formikk'
import MakeRequest from './pages/MakeRequest'
import Register from './pages/Register'
import Login from './pages/Login'
import Authguard from './auth/Authguard'
import Cookies from 'universal-cookie'

const App = () => {
  const cookies = new Cookies()
  const token =cookies.get("token")
  // console.log(token);
  
  return (
    <>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route element={<Authguard isAuth={token}/>}>
          <Route path='/sp-contact' element={<Contact/>}/>
             <Route path="/about" element={<About/>}/>
            <Route path='/contact' element={<Navigate to={"/sp-contact"}/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route  path='/formikk' element={<Formikk/>}/>
            <Route  path='/makerequest' element={<MakeRequest/>}/>
          </Route>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/login' element={<Login/>}/>

          {/* children route or nested routes- outlet, layout etc */}



          {/* wild card routing */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App