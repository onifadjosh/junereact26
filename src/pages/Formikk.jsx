import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'


const Formikk = () => {
  // const [firstname, setfirstname] = useState("Pamilerin")
  const formik = useFormik({
      initialValues:{
        firstname:"",
        lastname:"",
        email:"",
        password:""
      },

      onSubmit:async(values)=>{
        console.log(values);
        
      },
      validationSchema: yup.object({
        firstname:yup.string().required("First name is required").min(3, "First name must be more than three letters"),
        lastname:yup.string().required("Last name is required").min(3, "Last name must be more than three letters"),
        email:yup.string().required("Email is required").email("Invalid email format"),
        password:yup.string().required("password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password too weak")

      })
  })
  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);
  
  
  
  return (
    <div>
      <input type="text" placeholder='first name'   name='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
      {formik.touched.firstname&&formik.errors.firstname? <small className='text-danger'>{formik.errors.firstname}</small>:""}<br/>


      <input type="text" placeholder='last name'  name='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
      {formik.touched.lastname&&formik.errors.lastname? <small className='text-danger'>{formik.errors.lastname}</small>:""}<br/>


      <input type="text" placeholder='email'  name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
      {formik.touched.email&&formik.errors.email? <small className='text-danger'>{formik.errors.email}</small>:""}<br />


      <input type="text" placeholder='password'  name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
      {formik.touched.password&&formik.errors.password? <small className='text-danger'>{formik.errors.password}</small>:""}<br/>



      <button type='submit' onClick={formik.handleSubmit}>Submit</button>
    </div>
  )
}

export default Formikk