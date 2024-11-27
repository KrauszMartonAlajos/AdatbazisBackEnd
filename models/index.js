module.exports = (sequelize, DataTypes) =>
{
    const Játékos = require("../models/jatekos")(sequelize, DataTypes);

    const Csapat = require("../models/csapat")(sequelize, DataTypes);

    const Szurkoló = require("../models/szurkolo")(sequelize, DataTypes);

    const Logo = require("../models/logo")(sequelize, DataTypes);

    Csapat.hasMany(Játékos, 
    {
        foreignKey: "csapatAzonosító",
    });

    Csapat.hasOne(Logo, 
    {
        foreignKey: "csapatAzonosító",
    });

    Csapat.belongsToMany(Szurkoló,
    {
        foreignKey: "csapatAzonosító",
        through: "Szurkol",
    });

    return { Játékos, Csapat, Szurkoló, Logo };
}