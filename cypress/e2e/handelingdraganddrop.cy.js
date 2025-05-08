/// <reference types="cypress" />
import '@4tw/cypress-drag-drop'

import launch from "../PageObjects/siteLaunch";



describe("drag and verfication",()=>{
    it("drag and verfication",()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(10) > a").click()
        cy.get('#column-a').drag("#column-b",{force:true})
        cy.get('#column-b').drag("#column-a",{force:true})


        
        
    
    })
})