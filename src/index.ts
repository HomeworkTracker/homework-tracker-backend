import bcrypt from "bcrypt";
import express from "express";
import { initDBConnection } from "./models/dbConnection";
import 'dotenv/config';

// Authentification
import login from "./controllers/authentification/login";
import register from "./controllers/authentification/register";

const app = express();
app.use(express.json());

// Authentification
app.use(login);
app.use(register);

initDBConnection();

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
});