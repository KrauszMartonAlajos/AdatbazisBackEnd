const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Logó extends Model {};

    Logó.init
    (
        {
            figura:
            {
                type: DataTypes.STRING(30),
                primaryKey: true,
            },
            főSzín:
            {
                type: DataTypes.STRING(30),
                primaryKey: true,
            },
            készítőNeve:
            {
                type: DataTypes.STRING(30),
            },
            elkészülésDátum:
            {
                type: DataTypes.DATE
            }
        },

        {
            sequelize,
            modelName: "Logó",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Logó;
}