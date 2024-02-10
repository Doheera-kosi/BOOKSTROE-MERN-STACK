import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose'

const app = express();

app.get('/', (request, response) => {
  console.log(request)
  return response.status(200).send('Welcome to BookStore App')
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App Connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })