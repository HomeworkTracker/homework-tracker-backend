import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbConnection";
export class Post extends Model {
    declare ID: number;
}

export enum ContentType {
    PlainText = "PlainText",
    CheckList = "CheckList"
}

Post.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ContentType: {
        type: DataTypes.ENUM,
        values: Object.values(ContentType),
        allowNull: false
    }
}, { sequelize, modelName: "Post" });
