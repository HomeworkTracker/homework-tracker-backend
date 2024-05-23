import { Router } from "express";
import { PlainTextContent } from "../models/Contents/PlainTextContent";
import { ContentType, Post } from "../models/Post";

const post = Router();

post.route('/post')
    .post(async (req, res) => {
        const body = req.body;
        try {
            const post = await Post.create({
                UserID: 0,
                ContentType: ContentType.PlainText,
                PlainTextContent: {
                    Text: 'Hello World'
                }
            }, {
                include: [PlainTextContent]
            });
            res.status(201).send(post.toJSON());
        } catch (error) {
            if (typeof error === "string") {
                res.status(400).send(error)
            } else if (error instanceof Error){
                res.status(400).send(error.message)
            }
        }
    });

export default post;