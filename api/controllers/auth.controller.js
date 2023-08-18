const User = require("../models/user.model");
const { hashPassword, checkPassword } = require("../libs/hashed");
const { signToken } = require("../libs/jwt");

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
    const userExisted = await User.findOne({ email: email });

    if (userExisted) {
      res.status(409).json({ message: "A user exist with that email!" });
      return;
    }

    const user = await User.create(doc);
    console.log(user);

    // create token
    const token = await signToken(user.id, email);

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(201).json({ message: "created user successfuly!", user: user });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Couldn't create user!" });
    return;
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    res.status(400).json({
      message: "Please provide email and password!",
    });
    return;
  }

  try {
    const user = await User.findOne({ email: email });
    console.log(user);

    if (!user) {
      res.status(400).json({ message: "Invalid user!" });
      return;
    }

    const isCorrectPass = await checkPassword(password, user.password);

    if (!isCorrectPass) {
      res.status(401).json({ message: "Incorrect password!" });
      return;
    }

    // create token
    const token = await signToken(user.id, email);
    console.log(token);

    // store token
    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({ message: "Login Successfuly!", user: user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid email!" });
    return;
  }
};
