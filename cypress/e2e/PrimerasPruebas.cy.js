/// <reference types="cypress"/>
//Suite de casos que contiene cada caso
describe('Primer Conjunto de Casos de Prueba', function() {
    //Caso de prueba 1
    it('Contabilizar la cantidad de elemento en la sesion de pagina principal', function() {

        //Ingresamos a la pagina
        cy.visit("http://automationpractice.com/index.php");

        //Verificar la cantidad de elementos disponibles
        cy.get('#homefeatured .product-container').should('have.length', 7);

        //Obtenemos el element homefeatured .product-container como un parametro

        cy.get('#homefeatured .product-container').as('ProductosPopulares');

        //Verificamos  nuevamente la cantidad de elementos utilizando el parametro
        cy.get('@ProductosPopulares').should('have.length', 7);
    });

    //Caso de prueba  2
    it('Agregar el elemento tipo blouse al carro de compras desde la pagina principal', function() {

        //Ingresamos a la pagina
        cy.visit("http://automationpractice.com/index.php");

        cy.get('#homefeatured .product-container').as('ProductosPopulares');

        // iteramos para encontrar un producto con un nombre x
        cy.get('@ProductosPopulares')
            .find('.product-name')
            .each(($el, index, $list) => {

                if ($el.attr('title') === 'Blouse') {
                    cy.log('Se ha encontrado el elemento buscado')
                    cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                }

            })


    });
    //Caso de prueba  3   

});