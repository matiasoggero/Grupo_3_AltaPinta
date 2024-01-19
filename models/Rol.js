module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
        let config = {
        timestamps: false,
        tablename: "roles"
    }
    const Rol = sequelize.define(alias, cols, config); 

    Rol.associate = function (models) {
        Rol.hasMany(models.User, {
            as: "users",
            foreignKey: 'roles_id'
        })
    }

    

    return Rol;

}