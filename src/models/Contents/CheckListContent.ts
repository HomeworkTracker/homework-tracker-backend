import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConnection";
import { Post } from "../Post";

export class CheckListContent extends Model {
    declare ID: number;
    declare Text: string;
    declare Done: boolean;
}

CheckListContent.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Text: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { sequelize, modelName: "CheckListContent" });

CheckListContent.belongsTo(Post);