import { Router } from "express";
import { Op } from "sequelize";
import { User } from "../../models/User";
import "dotenv/config";
import bcrypt from "bcrypt";

const login = Router();

login.route("/login")
    .post(async (req, res) => {
        const body = req.body;
        try {
            if (!body.username || !body.password) {
                throw new Error("username/email and password attribute required");
            }
            
            const user: User | null = await User.findOne({where: {
                [Op.or]: [
                    {Username: body.username}, 
                    {Email: body.username}
                ]
            }});

            if (user) {
                bcrypt.compare(body.password, user.Password, (err, result) => {
                    if (err) {
                        res.status(500).send(err)
                    } else if (result) {
                        res.status(200).send("logged in!");
                    } else {
                        res.status(400).send("Wrong Username/Password!");
                    }
                });
            } else {
                res.status(400).send("Wrong Username/Password!");
            }
        } catch(error) {
            if (typeof error === "string") {
                res.status(400).send(error)
            } else if (error instanceof Error){
                res.status(400).send(error.message)
            }
        }
    });

export default login;
