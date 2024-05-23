import bcrypt from "bcrypt";
import express from "express";
import { initDBConnection } from "./models/dbConnection";
import 'dotenv/config';
import controllers from "./controllers";
import authentification from "./middleware/authentification";
import login from "./controllers/authentification/login";
import register from "./controllers/authentification/register";

const app = express();
app.use(express.json());


// Exceptions to authentification
app.use(login);
app.use(register);

// Controllers
app.use(authentification);
app.use(controllers);


initDBConnection();

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
});