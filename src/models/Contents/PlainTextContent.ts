import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConnection";

export class PlainTextContent extends Model {
    declare ID: number;
    declare Text: string;
}

PlainTextContent.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Text: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
}, { sequelize, modelName: "PlainTextContent" });


