const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Szurkoló extends Model {};

    Szurkoló.init
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

            kor:
            {
                type: DataTypes.INTEGER
            },

            születésiDátum:
            {
                type: DataTypes.DATE,
            },

            nem:
            {
                type: DataTypes.ENUM("Férfi", "Nő")
            },

        },

        {
            sequelize,
            modelName: "Szurkoló",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Szurkoló;
}