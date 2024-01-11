var UserModel = require("../Models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

/* -------------------------------------------------------------------------- */
/*                            Create User by Register                         */
/* -------------------------------------------------------------------------- */

let Register = async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await UserModel.create({ password: hashedPassword, ...userData});
    return res.status(200).json({ message: "Register Successful", Usersaved: user });
  } catch (err) {
    res.json({ message: "Error creating user", err });
  }
};

/* -------------------------------------------------------------------------- */
/*                            getting a user by id                            */
/* -------------------------------------------------------------------------- */

let getUserById = async (req, res) => {
  let id = req.params.id;
  try {
    let founduser = await UserModel.findById({ _id: id });
    res.json({ message: `User Found Successfully`, user: founduser });
  } catch (err) {
    res.send(err);
    res.json({ warning: `User with ID:${id} can't be found ` });
  }
};


/* -------------------------------------------------------------------------- */
/*---------------------------- Login user ------------------------------------*/
/* -------------------------------------------------------------------------- */

let Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      var isPasswordValid = bcrypt.compareSync(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.SECRET
        );
        return res.status(200).json({ message: "Login Successful", token, userId: user.id });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(401).json({ message: "Invalid email" });
    }
  } catch (err) {
    console.log("Error:--->", err);
    res.json({ warning: `faild login`,err });
  }
};

module.exports = { Register, getUserById, Login };
