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

.then(async () => 
{
    const iskolaRepository = require("../repositories/iskolaRepository");

    const osztályRepository = require("../repositories/osztályRepository");

    const tanárRepository = require("../repositories/tanárRepository");

    const tanulóRepository = require("../repositories/tanulóRepository");

    const count = 1000;

    //#region NEVEK

    const nevek1 = 
    [
        "Csák",
        "Motyovszki",
        "Belkó-Stiller",
        "Roják",
        "Debreczi",
        "Bethlendi",
        "Cristman",
        "Czervoszki",
        "Dengi",
        "Mirkó",
        "Tóth",
        "Szilágyi",
        "Salamon",
        "Farkas",
        "Fekete-Müller",
        "Füle",
        "Gergely",
        "Imre",
        "Lukácsi",
        "Ponert",
        "Kónya",
        "Kovács",
        "Gergencsik",
        "Megyesi",
        "Mihályi",
        "Bártfai",
        "Nagy",
        "Kácsor",
        "Szűrszabó",
        "Pomázi",
        "Sági",
        "Szabó",
        "Szász",
        "Szeker",
        "Palásti",
        "Tótin",
        "Kocsis",
        "Vízi",
        "Bobál",
        "Dömök",
        "Zarándi",
        "Kássa",
        "Kóbor",
    ];

    const nevek2 =
    [
        "Imola",
        "Katalin",
        "Szabolcs",
        "Judit",
        "Mónika",
        "Balázs",
        "Ilona",
        "Judit",
        "Anikó",
        "József",
        "Levente",
        "Barbara",
        "Bernadett",
        "János",
        "Sándor",
        "Ildikó",
        "Ágnes",
        "Zoltán",
        "Irén",
        "Andrea",
        "Tibor",
        "Ádám",
        "Edit",
        "Zsuzsa",
        "Imre",
        "Ferenc",
        "Dániel",
        "Emánuel",
        "Kinga",
        "Zita",
        "Lóránt",
        "Kata",
        "László",
        "Péter",
        "Vivien",
        "Krisztina",
        "Gergő",
        "Ervin",
        "Krisztián",
    ];

    const városok =
    [
        "Budapest",
        "Cegléd",
        "Szeged",
        "Albertirsa",
        "Békéscsaba",
        "Debrecen",
        "Eger",
    ];

    //#endregion

    var kozgaz = 
    {
        név: "Közgáz",
        cím: "Kossuth Ferenc utca 32.",
        létszám: 0,
    }

    var bem = 
    {
        név: "BEM",
        cím: "Jászberényi út 2.",
        létszám: 0,
    }
    
    await iskolaRepository.createIskola(kozgaz);

    await iskolaRepository.createIskola(bem);

    for(let i = 0; i < count; i++)
    {
        const tanár =
        {
            név: `${nevek1[getRandomInt(0, nevek1.length)]} ${nevek2[getRandomInt(0, nevek2.length)]}`,
            születésiDátum: new Date(getRandomInt(-315543600000, 1704142800000)),
            nem: getRandomInt(0, 2) == 0 ? "Férfi" : "Nő",
            fizetés: getRandomInt(100000, 700000),
        }

        await tanárRepository.createTanár(tanár);
    }

    for(let i = 0; i < 3; i++)
    {
        const osztály =
        {
            létszám: getRandomInt(0, 50),
            tanárAzonosító: getRandomInt(1, count)
        }

        await osztályRepository.createOsztály(osztály);
    }

    for(let i = 0; i < count; i++)
    {
        const tanuló =
        {
            név: `${nevek1[getRandomInt(0, nevek1.length)]} ${nevek2[getRandomInt(0, nevek2.length)]}`,
            átlag: getRandomFloat(1, 4),
            születésiDátum: new Date(getRandomInt(-315543600000, 1704142800000)),
            születésiHely: városok[getRandomInt(0, városok.length)],
            nem: getRandomInt(0, 2) == 0 ? "Férfi" : "Nő",
            felvétel: new Date(getRandomInt(-315543600000, 1704142800000)),
            iskolaAzonosító: getRandomInt(1, 2),
            osztályAzonosító: getRandomInt(1, 3),
        }

        await tanulóRepository.createTanuló(tanuló);
    }

    kozgaz_tanulok = await tanulóRepository.getIskolajátékosok(1);

    bem_tanulok = await tanulóRepository.getIskolajátékosok(2);

    kozgaz.létszám = kozgaz_tanulok.length;

    bem.létszám = bem_tanulok.length;

    await iskolaRepository.updateIskola(1, kozgaz);

    await iskolaRepository.updateIskola(2, bem);
})

.then(async () => 
{
    console.log("All operations are done");
});

function getRandomInt(start, max)
{
    return Math.floor(Math.random() * max) + start;
}

function getRandomFloat(start, max)
{
    return Math.round( (Math.random() * max + start) * 100) / 100;
}

module.exports = db;