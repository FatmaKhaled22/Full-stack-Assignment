import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegisterValidate from "../../validate/Register";
import axiosInstance from "../../config/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../Login/login.css";


function SignUp() {

  const navigate = useNavigate();
  const initialValues = {
    userName : "",
    email: "",
    password:"",
    phoneNumber:"",
  };


  const handleSubmit = async (object) => {
    try {
      const Registered = await axiosInstance.post("/user/register", object);
      console.log("Success creating category:", Registered);
      swal("Successfuly registration" , "The user has been added successfully" ,"success" , {button:false});
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      swal("Try Again", "Registration is rejected " ,"warning");
    } 
  };


  return (
    <section className="sec-sign">
      <Formik
        initialValues={initialValues}
        validate={RegisterValidate}
        onSubmit={handleSubmit}
        >
        {(props) => (
          <Form
            className="signup row g-3 p-4 rounded"
            onSubmit={props.handleSubmit}>
            <h2 className="text-center">Sign Up</h2>

            <div className="col-12">
              <label htmlFor="userName" className="form-label">User Name</label>
              <Field
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                placeholder="Enter your user name"
                onChange={props.handleChange}
                value={props.values.userName}
              />
              <ErrorMessage name="userName" component="div" />
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={props.handleChange}
                value={props.values.email}
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="col-12">
              <label htmlFor="password" className="form-label">Password</label>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={props.handleChange}
                value={props.values.password}
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="col-12">
              <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
              <Field
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                onChange={props.handleChange}
                value={props.values.phoneNumber}
              />
              <ErrorMessage name="PhoneNumber" component="div" />
            </div>

            <div className="col-12 text-center py-1">
              <button type="submit" className="btn btn-login p-3">SignUp</button>
            </div>
            <p className="text-center text-dark">If you have account <Link to="/login">Login</Link> here</p>
          </Form>
        )}
      </Formik>

    </section>
  );
}

export default SignUp;