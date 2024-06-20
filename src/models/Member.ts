import { Model } from "sequelize";
import { sequelize } from "./dbConnection";

export class Member extends Model {
}

Member.init({
}, { sequelize, modelName: "Member" });
