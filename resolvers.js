const { AuthenticationError } = require("apollo-server");

const user = {
  _id: "1",
  name: "David",
  email: "david.antonio.martinez@gmail.com",
  picture: "https://cloudinary/com/asdf",
};

// this app does not use root or info. Args = arguments, ctx = context
const authenticated = (next) => (root, args, ctx, info) => {
  // if no currentUser
  if (!ctx.currentUser) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx, info) => ctx.currentUser),
  },
};
