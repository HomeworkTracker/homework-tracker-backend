import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConnection";

export class MongoDocContent extends Model {
    declare ID: number;
    declare MongoDocID: string;
}

MongoDocContent.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Text: {
        type: DataTypes.CHAR(12),
        allowNull: false
    }
}, { sequelize, modelName: "MongoDocContent" });

