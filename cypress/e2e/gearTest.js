///<reference types="cypress"/>

describe('test the total amount ', () => {
    it('gear-bag', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('a[id="ui-id-6"]').click()
        cy.get(".item").contains("Bags").click()


        cy.get('div[class="product details product-item-details"]').as("allItems")
        cy.get(':nth-child(6) > .field > .control > #limiter').select("36")
        
        cy.get("@allItems").find(".price").invoke("text").as("PriceOfItems")

        cy.get("@PriceOfItems").then((priceText) => {

            let mypricelist = priceText.split("$")

            let total = 0
            for (let i = 0; i < mypricelist.length; i++) {

                total += Number(mypricelist[i])
            }

            cy.log(total)


        })
    });
});