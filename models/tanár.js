const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Tanár extends Model {};

    Tanár.init
    (
        {
            szigSzám:
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


            születésiDátum:
            {
                type: DataTypes.DATE,
            },

            nem:
            {
                type: DataTypes.ENUM("Férfi", "Nő")
            },

            fizetés:
            {
                type: DataTypes.INTEGER,
            },
        },

        {
            sequelize,
            modelName: "Tanár",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Tanár;
}