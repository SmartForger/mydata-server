import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import schemas from './schemas'
import resolvers from './resolvers'

const app = express()
app.use(cors())

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql')
})