/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("image verfication",()=>{
    it("brokenimageverification",()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(6) > a").click()
        cy.get('#checkboxes > :nth-child(1)').check().should("be.checked")
        cy.get('#checkboxes > :nth-child(1)').uncheck().should("not.be.checked")
        cy.get('#checkboxes > :nth-child(3)').check().should("be.checked")
        cy.get('#checkboxes > :nth-child(3)').uncheck().should("not.be.checked")
        
    
    })
})