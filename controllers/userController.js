const User = require("../models/User"); // find or create users
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);

exports.findOrCreateUser = async (token) => {
  // 1. Verify auth token
  const googleUser = await verifyAuthToken(token);
  // 2. check if the user exists
  const user = await checkIfUserExists(googleUser.email); // will return undefined or a google user
  // 3. if user exists, return them; otherwise create new user in DB
  return user ? user : createNewUser();
};

const verifyAuthToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.OAUTH_CLIENT_ID,
    });
    return ticket.getPayload();
  } catch (err) {
    console.error("Error verifying auth token", err);
  }
};

const checkIfUserExists = async (email) => {
  await User.findOne({ email }).exec(); // to return a promise, use the .exec() method at the end
};

const createNewUser = (googleUser) => {
  const { name, picture, email } = googleUser;
  const user = { name, picture, email };
  return new User(user).save();
};
