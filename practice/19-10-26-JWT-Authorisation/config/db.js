import { Sequelize } from "sequelize";
import configData from "./config.js";

const { database, dialect, username, password, host } = configData.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

export default sequelize;
