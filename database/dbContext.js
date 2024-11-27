const { Sequelize, DataTypes } = require("sequelize");
const logo = require("../models/logo");

const sequelize = new Sequelize
(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
)

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

const { Játékos, Csapat, Logo, Szurkoló } = require("../models")(sequelize, DataTypes);

db.játékosok = Játékos;

db.csapatok = Csapat;

db.logók = Logo;

db.szurkolók = Szurkoló;

db.sequelize.sync({ force: true })