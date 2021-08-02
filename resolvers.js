const { AuthenticationError } = require("apollo-server");
const Pin = require("./models/Pin");

// const user = {
//   _id: "1",
//   name: "David",    DUMMY DATA --- MAY BE DELETED
//   email: "david.antonio.martinez@gmail.com",
//   picture: "https://cloudinary/com/asdf",
// };

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
  Mutation: {
    createPin: authenticated(async (root, args, ctx) => {
      const newPin = await new Pin({
        ...args.input,
        author: ctx.currentUser._id,
      }).save();
      const pinAdded = await Pin.populate(newPin, "author");
      return pinAdded;
    }),
  },
};
