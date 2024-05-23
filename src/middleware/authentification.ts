import { NextFunction, Response, Request } from "express";

const authentification = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body?.token) {
        res.status(400).send('token required')
    } else {
        next();
    }
}

export default authentification;