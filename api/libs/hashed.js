const { hash, compare } = require("bcrypt");

exports.hashPassword = async (password) => {
  return await hash(password, 10);
};

exports.checkPassword = async (password, hashedPass) => {
  return await compare(password, hashedPass);
};
