import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbConnection";
import { Post } from "./Post";
import { Member } from "./Member";

export class Board extends Model {
    declare ID: number;
    declare Name: string;
}

Board.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, { sequelize, modelName: "Board" });
