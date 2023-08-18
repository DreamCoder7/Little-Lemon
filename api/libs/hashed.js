const { hash } = require("bcrypt");

exports.hashPassword = async (password) => {
  return await hash(password, 10);
};
