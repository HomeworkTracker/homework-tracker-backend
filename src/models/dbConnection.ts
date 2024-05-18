import 'dotenv/config';
import { Sequelize, DataTypes} from 'sequelize';
import { User } from './User';


export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASS as string,
    {
        host: process.env.MYSQL_HOST as string,
        dialect: 'mysql'
    }
);


export const initDBConnection = () => {
    sequelize.authenticate().then(() => {
        console.log("MySQL: connection established!");
    }).catch((error) => {
        console.log("MySQL: connection error =", error);
    });

    sequelize.sync().then(() => {
        console.log("MySQL: User TABLE synced!")
    }).catch((error) => {
        console.log("MySQL: User Table error = ", error);
    })
    
}