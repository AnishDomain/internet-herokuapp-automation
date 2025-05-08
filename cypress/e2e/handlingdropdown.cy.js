/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("image verfication",()=>{
    it("brokenimageverification",()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(11) > a").click()
        cy.get("#dropdown").select("Option 1").should("include.text","Option 1")
        cy.get("#dropdown").select("Option 2").should("include.text","Option 2")
       
        
    
    })
})