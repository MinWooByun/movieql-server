import { ApolloServer, gql } from "apollo-server";

// package.json에서 type을 module로 하는 이유는 위에 처럼 import 문을 사용하기 위해서이고
// type을 module로 지정하지 않으면 아래처럼 선언해야 한다.
// const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
