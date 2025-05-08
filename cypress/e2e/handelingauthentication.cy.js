/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("image verfication",()=>{
    it("brokenimageverification",()=>{
        let la = new launch()
        la.launchSite()
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
        cy.get('p').should('include.text', 'Congratulations');
        
    
    })
})