/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("image verfication",()=>{
    it("brokenimageverification",()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(21) > a").click()
        cy.get("#username").type("tomsmith")  //postive scenario
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").click()
        cy.wait(4000)
        cy.get('div#flash').should('contain.text', 'You logged into a secure area!');
        cy.get('.button.secondary.radius').click().should()
        cy.get("h2").should("have.text", "Login Page");
        cy.get("#username").clear().type("tomsm"); //neagative scenario
        cy.get("#password").clear().type("SuperSecretPassword!");
        cy.get(".radius").click();
        cy.wait(3000)
        cy.get('div#flash').should('contain.text', 'Your username is invalid!')


        
    
    })
})