import bcrypt from "bcrypt";
import express from "express";
import { initDBConnection } from "./models/dbConnection";
import 'dotenv/config';
import controllers from "./controllers/authentification";

const app = express();
app.use(express.json());
app.use(controllers);

initDBConnection();

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
});