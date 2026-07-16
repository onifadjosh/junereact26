import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
  const cookies = new Cookies()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      
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
          `${import.meta.env.VITE_DEV_BASE_URL}/api/v1/login`,
          values,
        );

        console.log(response.data);
        if (response.status != 200) {
          alert("Invalid credentials");
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

export default Login;
