const { sign } = require("jsonwebtoken");

exports.signToken = async (id, email) => {
  const token = sign(
    { id: id, email: email },
    String(process.env.JWT_SECRTE_KEY),
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  return token;
};
