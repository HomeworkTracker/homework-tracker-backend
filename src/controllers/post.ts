import { Router } from "express";
import { PlainTextContent } from "../models/Contents/PlainTextContent";
import { Post } from "../models/Post";
import { Board } from "../models/Board";
import { User } from "../models/User";

const post = Router();

post.route("/post/:boardID")
    .post(async (req, res) => {
        try {
            const board = await Board.findOne({
                where: {
                    ID: req.params.boardID
                }
            });

            if (board) {
                const post = await Post.create({
                    UserID: res.locals.userID,
                    BoardID: board.ID,
                    PlainTextContents: [{
                        Text: req.body.text
                    }],
                }, {
                    include: [PlainTextContent, Board, User]
                });
                res.status(201).send(post.toJSON());
            } else {
                throw new Error("BoardID does not exist!");
            }
            
        } catch (error) {
            if (typeof error === "string") {
                res.status(400).send(error);
            } else if (error instanceof Error){
                res.status(400).send(error.message);
            }
        }
    });

export default post;