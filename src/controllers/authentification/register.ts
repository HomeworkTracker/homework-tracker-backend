import { Router } from "express";

const register = Router();

register.route('/register')
    .post((req, res) => {
        res.send("register")
    });

export default register;