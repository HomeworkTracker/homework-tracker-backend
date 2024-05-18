import { Router } from 'express';
import register from './register';
import login from './login';

const controllers = Router();

controllers.use(register);
controllers.use(login);

export default controllers;