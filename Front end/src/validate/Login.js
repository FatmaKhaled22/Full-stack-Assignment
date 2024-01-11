const LoginValidate = (values) => {
  const errors = {};

  // let checkEmail = /^[a-z0-9._%+-]+@[admin]+\.[a-z]{2,4}$/;
  if (!values.email) {
    errors.email = "Email is Required";
  }

  // let checkPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
  if (!values.password) {
    errors.password = "Passsword is Required";
  }

  return errors;
};

export default LoginValidate;
