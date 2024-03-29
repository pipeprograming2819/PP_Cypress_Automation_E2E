/// <reference types="cypress"/> 
//Suite de casos que contiene cada caso
describe('Primer Conjunto de Casos de Prueba', function() {

    beforeEach(() => {

        cy.visit("http://automationpractice.com/index.php");
    })

    //Caso de prueba 1
    it('Contabilizar la cantidad de elemento en la sesion de pagina principal', function() {
        //Verificar la cantidad de elementos disponibles
        cy.get('#homefeatured .product-container').should('have.length', 7);
        //Obtenemos el element homefeatured .product-container como un parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares');
        //Verificamos  nuevamente la cantidad de elementos utilizando el parametro
        cy.get('@ProductosPopulares').should('have.length', 7);
    });

    //Caso de prueba  2
    it('Agregar el elemento tipo blouse al carro de compras desde la pagina principal', function() {

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
    it('Agregar el elemento tipo "Printed Dress" al carro de compras desde la pagina principal', function() {

        cy.get('#homefeatured .product-container').as('ProductosPopulares');

        // iteramos para encontrar un producto con un nombre x
        cy.get('@ProductosPopulares')
            .find('.product-name')
            .each(($el, index, $list) => {

                cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1) {
                        let precio = $el1.text()
                        cy.log(precio)

                        if ($el.attr('title') === 'Printed Dress' && precio.includes('26.00')) {
                            cy.log('Se ha encontrado el elemento buscado');
                            cy.log('Se ha encontrado el precio buscado');
                            cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click();
                        }
                    })
                    // Se debe llamar  siempre la clase indicando un punto
            })

    });

    //Caso de prueba  4       
    it('Verificamos que el drop down , tenga los elementos necesarios', function() {

            //Flotamos sobre un elemento  
            cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr', 'style', 'display: block')
            cy.get('a[title="Tops"]').should('be.visible')
            cy.get('a[title="T-shirts"]').should('be.visible')
            cy.get('a[title="Blouses"]').should('be.visible')
            cy.get('a[title="Dresses"]').should('be.visible')
            cy.get('a[title^="Casual"]').should('be.visible')
            cy.get('a[title^="Evening"]').should('be.visible')
            cy.get('a[title^="Summer"]').should('be.visible')

        })
        //Caso de prueba  5 Uso  de Checkbox  
    it('Verificar Checkbox funcional', function() {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')

    })

    //Caso de prueba  6 Seleccionando un elemento del dropdowns
    it('Verificar los dropdown de arreglo esten funcionales', function() {
            cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
            cy.get('#selectProductSort').select('name:asc')

        })
        //Caso de prueba 
    it('Realizar una compra desde cero', function() {
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]).ajax_dd_to_cart_button').click()
        cy.get('.button-medium[title="Proceed to checkout"]').click()



    })

});