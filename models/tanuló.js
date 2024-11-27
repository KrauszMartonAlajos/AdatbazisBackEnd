const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Tanuló extends Model {};

    Tanuló.init
    (
        {
            azonosító:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            név:
            {
                type: DataTypes.STRING(30),
            },

            átlag:
            {
                type: DataTypes.FLOAT
            },

            születésiDátum:
            {
                type: DataTypes.DATE,
            },

            születésiHely:
            {
                type: DataTypes.STRING(100),
            },

            nem:
            {
                type: DataTypes.ENUM("Férfi", "Nő")
            },

            felvétel:
            {
                type: DataTypes.DATE,
            }
        },

        {
            sequelize,
            modelName: "Tanuló",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Tanuló;
}