const { gql } = require("apollo-server");

//schema to define the types of data the data graph includes

module.exports = gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
  }

  type Query {
    me: User
  }
`;
