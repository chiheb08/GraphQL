import { GraphQLServer } from 'graphql-yoga' ; 
import { Query } from './resolvers/Query.mjs';
import { Todo } from './resolvers/Todo.mjs';
import { User } from './resolvers/User.mjs';
import { db } from './db/db.mjs';
import { Mutation } from './resolvers/Mutation.mjs';
//const { createServer } = require('graphql-yoga')
// Provide your schema
//const server = createServer({
    // définir le schéma de graphql : 
    // Notre contrat , ce que nous offrons à travers notre serveur graphQL 
  const typeDefs= "src/schema/schema.graphql";
  // Implementation de notre contrat 
 const  resolvers = {
    Query,
    Todo,
    User,
    Mutation
  };
// Start the server and explore http://localhost:4000/graphql
const server = new GraphQLServer(
  {
    typeDefs,
    resolvers,
    context:{
      db
    }
  }
  ) ; 
server.start(()=> console.log("Server is running ")) ;