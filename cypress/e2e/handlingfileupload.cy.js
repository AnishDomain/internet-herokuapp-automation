/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";
import 'cypress-file-upload';



describe("file upload",()=>{
    it("fileuploadverification",()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(18) > a").click()
        cy.get("#file-upload").attachFile("test.pdf")
        cy.get("#file-submit").click()
        cy.get("#uploaded-files").should("include.text","test")

       
       
        
    
    })
})

