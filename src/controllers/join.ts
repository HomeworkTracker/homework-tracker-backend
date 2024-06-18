import { Router } from "express";
import { Member } from "../models/Member";
import { Board } from "../models/Board";
import { User } from "../models/User";

const join = Router();

join.route("/join")
    .post(async (req, res) => {
        try {
            const user = await User.findOne();
            const board = await Board.findOne();
            console.log(user, board)
            const member = await Member.create({
                UserID: 1,
                BoardID: 1
            }, {
                include: [Board, User]
            })
            res.send([user, board, member]);
        } catch (error) {
            console.log(error)
            if (typeof error === "string") {
                res.status(400).send(error);
            } else if (error instanceof Error){
                res.status(400).send(error.message);
            }
        }
    });

export default join;