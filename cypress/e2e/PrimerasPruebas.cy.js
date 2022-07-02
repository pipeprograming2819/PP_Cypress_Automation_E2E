/// <reference types="cypress"/>
//Suite de casos que contiene cada caso
describe('Primer Conjunto de Casos de Prueba', function() {
    //Caso de prueba 1
    it('Contabilizar la cantidad de elemento en la sesion de pagina principal', function() {

        //Ingresamos a la pagina
        cy.visit("http://automationpractice.com/index.php");

        //Verificar la cantidad de elementos disponibles
        cy.get('#homefeatured.produc-container').should('have.', 7)
    });
    //Caso de prueba  2
    //Caso de prueba  3   

});