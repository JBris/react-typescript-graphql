import "reflect-metadata";
import express from "express";
import * as graphqlHTTP from "express-graphql";

const app = express();
app.set("port", 3000);

app.use((req, res) => {
  res.status(404).send({ message: "Please use the /graphql and /graphiql endpoints." });
});


export default app;