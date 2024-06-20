import { Router } from "express";
import { Board } from "../models/Board";
import { Member } from "../models/Member";
import { sequelize } from "../models/dbConnection";

const board = Router();

board.route("/board")
    .get(async (req, res) => {
        const boards = await sequelize.query(`
            SELECT * FROM Boards WHERE ID = ANY (SELECT BoardID FROM Members WHERE UserID = ?)
            `, {
                model: Board,
                mapToModel: true,
                replacements: [ res.locals.userID]
            });
        res.send(boards);
    })
    .post(async (req, res) => {
        try {
            if (!req.body.name) {
                res.status(400).send("name attribute required");
            }

            const board = await Board.create({
                Name: req.body.name,
                Members: [{
                    UserID: res.locals.userID
                }]
            }, {
                include: [Member]
            });
            
            res.status(201).send(board.obscured());
        } catch (error) {
            if (typeof error === "string") {
                res.status(400).send(error);
            } else if (error instanceof Error){
                res.status(400).send(error.message);
            }
        }
    });

export default board;