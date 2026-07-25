import {books}  from "./dataset.js";
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Client {
  id: ID!
  name: String
  firstname: String
  beers: [Beer]
  }

    type Beer {
   id: ID!
 company: String,
    color: String,
    price: String,
    clientId:String
    client: Client
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    clients: [Client]
    beers: [Beer]
    client(id: Int): Client
  }
    type Mutation{
    createClient(
    name: String
  firstname: String
    ):Client

  createBeer(
company: String,
    color: String,
    price: String,
    clientId:String
   ):Beer

   addClient(
    name: String,
  firstname: String,
 company: String,
    color: String,
    price: String

   ):Client

updateClient(
id: Int,
name: String
firstname: String

): Client

destroyClient(id: Int) : Boolean!

    }
`;