import { NextFunction, Response, Request } from "express";
import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import fs from "fs";
import { User } from "../models/User";

const PRIVATEKEY = fs.readFileSync("private.key", "utf-8");

const authentification = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token ?? "";
    try {
        const decodedToken: JwtPayload | string = jsonwebtoken.verify(token, PRIVATEKEY);
        if (typeof decodedToken === "object") {
            const user = await User.findOne({
                where: { Username: decodedToken.user}
            });
            if (user) {
                res.locals.userID = user.ID;
                next();
            } else {
                throw new Error("Invalid Token!");
            }
        } else {
            throw new Error("Invalid Token!");
        }
    } catch (error) {
        if (typeof error === "string") {
            res.status(400).send(error);
        } else if (error instanceof Error){
            res.status(400).send(error.message);
        }
    }
};

export default authentification;