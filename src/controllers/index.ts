import { Router } from "express";
import post from "./post";
import board from "./board";
import join from "./join";
const controllers = Router();

controllers.use(board);
controllers.use(post);
controllers.use(join);

export default controllers;