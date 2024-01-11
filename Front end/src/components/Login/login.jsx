import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axiosInstance from "../../config/axiosConfig";
import LoginValidate from "../../validate/Login";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./login.css";




function Login() {

  const navigate = useNavigate();
  
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (object) => {
    try {
      const accessLogin = await axiosInstance.post("/user/login", object ,
        { headers: { Authorization: `Bearer ${Token}` } }
      );
      console.log("Success login:", accessLogin);

      var Token = accessLogin.data.token;
      var userId = accessLogin.data.userId;
      localStorage.setItem("token", Token);
      localStorage.setItem("userid", userId);

      swal("Successfuly Login", "Email and Password is valid", "success", {button: false});
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
      swal("Unauthorized", "Email or password is invalid", "warning" , {button: false});
    }
  };


  return (
    <section className="sec-log">
      <Formik
        initialValues={initialValues}
        validate={LoginValidate}
        onSubmit={handleSubmit}
        >
        {(props) => (
          <Form
            className="login row g-3 p-3 rounded"
            onSubmit={props.handleSubmit}
            >
            <h2 className="text-center">Sign In</h2>

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

            <div className="col-12 text-center py-1">
              <button type="submit" className="btn btn-login p-3">LogIn</button>
            </div>
            <p className="text-center text-dark">If you don't have account <Link to="/signup">Sign Up</Link></p>
          </Form>
        )}
      </Formik>

    </section>
  );
}

export default Login;