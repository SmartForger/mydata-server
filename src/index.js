require('dotenv').config()
import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import "@babel/polyfill"

import models from '@kodydoherty/icy-deliver-pro-api/models'

import schemas from './schemas'
import resolvers from './resolvers'

const app = express()
app.use(cors())

// const getContext = ({ req }) => {
//   const token = req.headers.authorization || ''
//   const user = decode(token)

//   return {
//     models,
//     me: user.data
//   }
// }

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: { models }
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql')
})