import { Router } from "express";
import { Board } from "../models/Board";
import { User } from "../models/User";

const board = Router();

board.route("/board")
    .post(async (req, res) => {
        try {
            if (!req.body.name) {
                res.status(400).send("name attribute required");
            }

            const board = await Board.create({
                Name: req.body.name,
            });
            
            res.status(201).send(board.toJSON());
        } catch (error) {
            if (typeof error === "string") {
                res.status(400).send(error);
            } else if (error instanceof Error){
                res.status(400).send(error.message);
            }
        }
    });

export default board;