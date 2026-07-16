import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const [image, setimage] = useState(null)
  
    const handleImage=(e)=>{
      console.log(e.target.files[0]);

      let theImage= e.target.files[0]

      let reader= new FileReader()

      reader.onloadend=()=>{
        console.log(theImage);
        setimage(reader.result)
      }

      // console.log(image);
      

      reader.readAsDataURL(theImage)

      

      
    }

    // console.log(image);
    
  const cookies = new Cookies()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(30, "First name must be at most 30 characters")
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(30, "Last name must be at most 30 characters")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        )
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post(
        `${import.meta.env.VITE_DEV_BASE_URL}/api/v1/register`,
          {...values, profilePicture:image},
        );

        console.log(response.data);
        if (response.status != 201) {
          alert("User creation failed");
        } else {
          alert(response.data.message);

          const decoded =await jwtDecode(response.data.token)
          
          cookies.set("token", response.data.token, {expires:new Date(decoded.exp*1000)})

          navigate("/contact")

        }
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    },
  });

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div
          className="card border-0 shadow-sm"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="card-body p-4">
            <h2 className="text-center mb-4 fw-bold" style={{ color: "#000" }}>
              Register
            </h2>

            <form onSubmit={formik.handleSubmit}>

               <input type="file"  onChange={(e)=>handleImage(e)}/>
              {/* First Name */}
              <div className="mb-3">
                <label
                  htmlFor="firstName"
                  className="form-label fw-semibold"
                  style={{ color: "#000" }}
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={`form-control ${formik.touched.firstName && formik.errors.firstName ? "is-invalid" : ""}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="Enter your first name"
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#000",
                    color: "#000",
                  }}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="invalid-feedback">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label
                  htmlFor="lastName"
                  className="form-label fw-semibold"
                  style={{ color: "#000" }}
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={`form-control ${formik.touched.lastName && formik.errors.lastName ? "is-invalid" : ""}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="Enter your last name"
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#000",
                    color: "#000",
                  }}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="invalid-feedback">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-semibold"
                  style={{ color: "#000" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#000",
                    color: "#000",
                  }}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="form-label fw-semibold"
                  style={{ color: "#000" }}
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Enter your password"
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#000",
                    color: "#000",
                  }}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn w-100 fw-semibold"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#333";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                }}
              >
                {formik.isSubmitting ? "Registering..." : "Register"}
              </button>
            </form>

            <p className="text-center mt-3 small" style={{ color: "#666" }}>
              Already have an account?{" "}
              <a
                href="#"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
