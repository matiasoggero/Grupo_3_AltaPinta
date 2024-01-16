module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        date: {
            type: dataTypes.DATE(),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password:{
            type: dataTypes.TEXT(),
            allowNull: false
        },
        avatar:{
            type: dataTypes.TEXT(),
            allowNull: false
        },
        roles_id:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tablename: "users"
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsTo(models.Rol, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "roles",
            foreignKey: 'roles_id'
        })
    }

    return User;
};