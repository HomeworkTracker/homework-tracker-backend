import { DataTypes } from "sequelize";
import { sequelize } from "./dbConnection";

export const User = sequelize.define("User", {
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Username: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING(72).BINARY,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});