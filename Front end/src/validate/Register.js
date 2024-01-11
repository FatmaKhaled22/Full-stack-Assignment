const RegisterValidate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "UserName is Required";
  } else if (values.userName.length < 4) {
    errors.userName = "Must be at least 4 characters";
  }

  let checkEmail = /^[a-z0-9._%+-]+@[gmail]+\.[a-z]{2,4}$/;
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!checkEmail.test(values.email)) {
    errors.email = "Invalid email address";
  }

  let checkPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
  if (!values.password) {
    errors.password = "Passsword is Required";
  } else if (!checkPass.test(values.password)) {
    errors.password =
      "Password must be contains capital letter , numbers & at least 6 characters";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone-Num is Required";
  } else if (isNaN(values.phoneNumber) || values.phoneNumber < 0) {
    errors.phoneNumber = "Invalid number of phoneNumber";
  }

  return errors;
};

// export default SignUpSchema;
export default RegisterValidate;
