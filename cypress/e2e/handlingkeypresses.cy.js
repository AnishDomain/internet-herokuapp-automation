/// <reference types="cypress" />
import '@4tw/cypress-drag-drop'

import launch from "../PageObjects/siteLaunch";



describe("different keypresse",()=>{
    it("handling key presses",()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(31) > a").click()
       
        cy.get('#target').type('{enter}');
        cy.get('#result').should("have.text","You entered: ENTER")
        cy.get('#target').type('{esc}');
        cy.get('#result').should("have.text","You entered: ESCAPE")
        cy.get('#target').type('{backspace}');
        cy.get('#result').should("have.text","You entered: BACK_SPACE")
        cy.get('#target').type('{alt}');
        cy.get('#result').should("have.text","You entered: ALT")
        cy.get('#target').type('{ctrl}a');
        cy.get('#result').should("have.text","You entered: A")
 
        
        
    
    })
})