import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbConnection";

export class Board extends Model {
    declare ID: number;
    declare Name: string;

    obscured() {
        return ({
            ID: this.ID,
            Name: this.Name
        });
    }
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
