import { Router } from "express";
import { Member } from "../models/Member";
import { Board } from "../models/Board";
import { User } from "../models/User";

const join = Router();

join.route("/join/:id")
    .post(async (req, res) => {
        try {
            const board = await Board.findOne({
                where: {ID: req.params.id}
            });

            if (board) {
                await Member.create({
                    UserID: res.locals.userID,
                    BoardID: board.ID
                }, {
                    include: [Board, User]
                });
                res.send("success");
            } else {
                throw new Error("Board does not exist!");
            }
            
        } catch (error) {
            if (typeof error === "string") {
                res.status(400).send(error);
            } else if (error instanceof Error){
                res.status(400).send(error.message);
            }
        }
    });

export default join;