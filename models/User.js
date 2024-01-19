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
        User.belongsTo(models.Rol, {
            as: "roles",
            foreignKey: 'roles_id'
        }),
        User.belongsToMany(models.Product,{
            as: "usuarios",
            through: "user_product",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false
        })
    }

    return User;
};