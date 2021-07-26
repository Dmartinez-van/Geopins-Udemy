const user = {
  _id: "1",
  name: "David",
  email: "david.antonio.martinez@gmail.com",
  picture: "https://cloudinary/com/asdf",
};

module.exports = {
  Query: {
    me: () => user,
  },
};
