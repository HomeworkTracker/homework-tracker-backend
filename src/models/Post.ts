import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbConnection";
import { MongoDocContent } from "./Contents/MongoDocContent";
import { PlainTextContent } from "./Contents/PlainTextContent";

export class Post extends Model {
    declare ID: number;
    declare UserID: number;
    declare ContentID: number;
}

export enum ContentType {
    PlainText = 'PlainText',
    MongoDoc = 'MongoDoc'
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
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, { sequelize, modelName: 'Post' });

Post.hasOne(PlainTextContent, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: {
        name: 'ContentID'
    }
});

MongoDocContent.belongsTo(Post, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: 'PostID'
});

Post.hasOne(MongoDocContent, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: {
        name: 'ContentID'
    }
});

PlainTextContent.belongsTo(Post, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: 'PostID'
});

