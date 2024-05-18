import { Router } from "express";

const login = Router();

login.route("/login")
    .post((req, res) => {
        res.send("success")
    });

export default login;
