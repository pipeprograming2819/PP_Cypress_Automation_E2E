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
    //Caso de prueba  3   

});