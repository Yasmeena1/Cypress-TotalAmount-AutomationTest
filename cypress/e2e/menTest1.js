describe('test the total ammount', () => {
    it('mens-top -Hoodies & Sweatshirts', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('a[href="https://magento.softwaretestingboard.com/men.html"]').click()
        //cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click()
        cy.get(".item").contains("Hoodies & Sweatshirts").click()
        
        cy.get(':nth-child(6) > .field > .control > #limiter').select("24").should("have.value", "24")
        cy.get(".product-item-info").as("items")
        cy.get("@items").find(".price").invoke("text").as("itemPrice")
        cy.get("@itemPrice").then((priceText) => {
            let myPiceList = priceText.split("$")

            let total = 0;

            for (let i = 0; i < myPiceList.length; i++) {
                total += Number(myPiceList[i])

            }
            
            cy.log(total)
        })
       
    });
});