module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        price: {
            type: dataTypes.DECIMA(5,2),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT(255),
            allowNull: false
        },
        categories_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tablename: "products"
    }
    const Product = sequelize.define(alias, cols, config); 

    

    return Product;
};