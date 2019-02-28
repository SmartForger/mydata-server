require("dotenv").config();
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import "@babel/polyfill";

import models from "../models";

import schemas from "./schemas";
import resolvers from "./resolvers";
import { decode } from "./utils/token";

const app = express();
app.use(cors());

const getContext = ({ req }) => {
  const token = req.headers.authorization || "";
  const user = decode(token);

  return {
    models,
    me: user.data
  };
};

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: getContext
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
  console.log("Apollo Server on http://localhost:8000/graphql");
});
