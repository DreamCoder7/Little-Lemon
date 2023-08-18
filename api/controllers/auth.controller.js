const User = require("../models/user.model");
const { hashPassword } = require("../libs/hashed");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Please provide the input field!" });
  }

  const hashedPassword = await hashPassword(password);
  console.log(hashedPassword);

  const doc = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  try {
    const user = await User.create(doc);
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Couldn't create user!" });
  }

  res.status(200).json({ message: "created user successfuly!" });
};
