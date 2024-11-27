const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Játékos extends Model {};

    Játékos.init
    (
        {
            szigSzám:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },            

            gólokSzáma:
            {
                type: DataTypes.INTEGER
            },

            név:
            {
                type: DataTypes.STRING(30),
            },

            nem:
            {
                type: DataTypes.ENUM,
                values: ['férfi', 'nő', 'berceli'],
            },

            születésiDátum:
            {
                type: DataTypes.DATE,
            },

            magasság:
            {
                type: DataTypes.FLOAT,
            },
            súly:
            {
                type: DataTypes.FLOAT,
            },
            kor:
            {
                type: DataTypes.INTEGER,
            },
        },

        {
            sequelize,
            modelName: "Játékos",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Játékos;
}