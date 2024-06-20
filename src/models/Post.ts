import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbConnection";
export class Post extends Model {
    declare ID: number;
}

Post.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
}, { sequelize, modelName: "Post" });
