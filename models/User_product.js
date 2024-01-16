module.exports = (sequelize, dataTypes) => {
    let alias = 'User_product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        }
    };
        let config = {
        timestamps: false,
        tablename: "user_products"
    }
    const User_product = sequelize.define(alias, cols, config); 


    return User_product;

}