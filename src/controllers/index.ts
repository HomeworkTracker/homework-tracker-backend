import { Router } from 'express';
import post from './post';
const controllers = Router();

controllers.use(post);

export default controllers;