Les shema graphql

type Client {
  id: ID!
  name: String
  firstname: String
  beers: [Beer]
}

type Beer {
  id: ID!
  company: String
  color: String
  price: String
  clientId: String
  client: Client
}

type Query {
  clients: [Client]
  beers: [Beer]
  client(id: Int): Client
}

type Mutation {
  createClient(name: String, firstname: String): Client
  createBeer(company: String, color: String, price: String, clientId: String): Beer
  addClient(name: String, firstname: String, company: String, color: String, price: String): Client
  updateClient(id: Int, name: String, firstname: String): Client
  destroyClient(id: Int): Boolean!
}

