'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('products', [
      {

        name: "Hamburguesa de carne",
        price: 1000,
        description: "Nuestro medallón de carne es la estrella de la hamburguesa. Elaborado con carne de res de la más alta calidad y sazonado a la perfección, este jugoso medallón es la base de una experiencia culinaria inigualable.",
        image: "hcarne.png",
        categories_id: 1
      },
      {
        name: "Hamburguesa de pollo",
        price: 1000,
        description: "Elaborado con pechuga de pollo tierna y sazonado con especias cuidadosamente seleccionadas, este medallón ofrece una experiencia gustativa única",
        image: "hpollo.png",
        categories_id: 1
      },
      {
        name: "Hamburguesa de lenteja",
        price: 700,
        description: "Nuestro medallón de lentejas es una opción deliciosa y saludable para aquellos que buscan una alternativa vegetariana. Elaborado con lentejas nutritivas y sazonado con una mezcla de especias aromáticas",
        image: "hlenteja.png",
        categories_id: 1
      },
      {
        name: "Pan clásico",
        price: 500,
        description: "Nuestro pan de hamburguesa clásico es la elección perfecta para encerrar la deliciosa creación que te espera. Con una textura suave y esponjosa",
        image: "pan-clasico.jpg",
        categories_id: 2
      },
      {
        name: "Pan con Sésamo",
        price: "500",
        description: "tien sesamo",
        image: "pan-sesamo.jpg",
        categories_id: 2
      },
      {
        name: "Pan de queso",
        price: 700,
        description: "Nuestro pan de queso es la elección perfecta para aquellos que buscan un toque extra de sabor. Este pan, enriquecido con auténtico queso, ofrece una experiencia única desde el primer bocado",
        image: "pan-queso.jpg",
        categories_id: 2
      },
      {
        name: "Mayonesa",
        price: 400,
        description: "Cada cucharada de nuestra mayonesa transformará tus comidas en una experiencia culinaria inolvidable",
        image: "mayonesa.jpg",
        categories_id: 3
      },
      {
        name: "Mostaza",
        price: 400,
        description: "Nuestra mostaza tradicional es el condimento perfecto para agregar un toque de sabor audaz y picante a tus hamburguesas favoritos",
        image: "salsa-mostaza.jpg",
        categories_id: 3
      },
      {
        name: "Ketchup",
        price: 400,
        description: "Nuestro ketchup clásico es el condimento perfecto para añadir un toque de dulzura y acidez a tus hamburguesas",
        image: "ketchup.jpg",
        categories_id: 3
      },
      {
        name: "Barbacoa",
        price: 400,
        description: "Nuestra Barbacoa ahumada con su irresistible mezcla de tomates, vinagre, especias y ese toque ahumado distintivo",
        image: "salsa-barbacoa.jpg",
        categories_id: 3
      },
      {
        name: "Jamon cocido",
        price: 500,
        description: "Nuestro jamón cocido premium es una opción de alta calidad que ofrece una experiencia de sabor excepcional",
        image: "cocido.jpg",
        categories_id: 4
      },
      {
        name: "Jamon crudo",
        price: 500,
        description: "Nuestro jamón crudo de calidad es una exquisitez que resalta la tradición y el sabor auténtico. Elaborado a partir de las mejores piezas de cerdo y curado con esmero",
        image: "jamon-crudo.jpg",
        categories_id: 4
      },
      {
        name: "Lomito",
        price: 500,
        description: "Nuestro lomito  premium es una elección excepcional ",
        image: "lomito.jpg",
        categories_id: 4
      },
      {
        name: "Bacon",
        price: 500,
        description: "Nuestro Bacon crujiente ,cada pieza se cura y ahuma cuidadosamente para lograr ese equilibrio único entre lo salado y lo ahumado",
        image: "bacon.jpg",
        categories_id: 4
      },
      {
        name: "Tybo",
        price: 500,
        description: "Nuestro queso Tybo es una opción deliciosa y versátil que se destaca por su sabor suave y textura cremosa",
        image: "tybo.jpg",
        categories_id: 5
      },
      {
        name: "Provolone",
        price: 500,
        description: "Nuestro queso Provolone es una elección robusta y llena de sabor para los amantes del queso con carácter",
        image: "provolone.jpg",
        categories_id: 5
      },
      {
        name: "Cheddar",
        price: 500,
        description: "Nuestro chedar ,elaborado con leche de alta calidad, este queso británico se caracteriza por su tonalidad amarilla distintiva",
        image: "cheddar.jpg",
        categories_id: 5
      },
      {
        name: "Azul",
        price: 500,
        description: "este queso de pasta veteada presenta un sabor fuerte y complejo, con vetas de moho azul que añaden un toque picante",
        image: "queso-azul.jpg",
        categories_id: 5
      },
      {
        name: "Lechuga",
        price: 300,
        description: "Cultivada con cuidado, esta lechuga de hojas verdes presenta una textura tierna y un sabor suave",
        image: "lechuga (1).png",
        categories_id: 6
      },
      {
        name: "Rucula",
        price: 300,
        description: "la rúcula agrega una dimensión única a las hamburguesas",
        image: "rucula.jpg",
        categories_id: 6
      },
      {
        name: "Repollo",
        price: 300,
        description: "Nuestro repollo orgánico es una excelente fuente de fibra y nutrientes esenciales",
        image: "repollo.jpg",
        categories_id: 6
      },
      {
        name: "Tomate",
        price: 300,
        description: "Cultivados con esmero, estos tomates rojos y maduros aportan una explosión de frescura a tus hamburguesas",
        image: "tomate.png",
        categories_id: 7
      },
      {
        name: "Zanahoria",
        price: 300,
        description: "Estas zanahorias de tonalidad naranja brillante ofrecen una textura crujiente y un sabor jugoso",
        image: "zanahoria.jpg",
        categories_id: 7
      },
      {
        name: "Pepino",
        price: 300,
        description: "Estos pepinos de piel verde clara ofrecen una textura crujiente y un sabor hidratante",
        image: "pepino.jpg",
        categories_id: 7
      },
      {
        name: "Cebolla",
        price: 300,
        description: "Descubre la calidad y la riqueza de nuestras cebollas frescas",
        image: "cebolla.png",
        categories_id: 7
      },
      {
        name: "Cebolla caramelizada",
        price: 300,
        description: "Nuestra cebolla caramelizada es una deliciosa obra maestra de sabor dulce y textura suave",
        image: "cebolla-caramel.jpg",
        categories_id: 8
      },
      {
        name: "Berenjena en escabeche",
        price: 300,
        description: "Cada rodaja de berenjena absorbe los aromas y sabores de hierbas",
        image: "berenjena-esca.jpg",
        categories_id: 8
      },
      {
        name: "Tomate confitado",
        price: 300,
        description: "Preparados lentamente en aceite de oliva, los tomates se caramelizan hasta obtener una textura tierna y un sabor concentrado y dulce",
        image: "tomates-confitados.jpg",
        categories_id: 8
      },
      {
        name: "Zanahoria caramelizada",
        price: 300,
        description: "Cuidadosamente cocinadas hasta lograr un caramelizado dorado, estas zanahorias ofrecen un sabor indulgente y una textura tierna",
        image: "zanahorias-confi.jpg",
        categories_id: 8
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
