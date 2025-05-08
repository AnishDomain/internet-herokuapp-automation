/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("handle infinitescroll",()=>{
    it('infinitescroll',()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(25) > a").click()
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > img:nth-child(1)").trigger("mouseover")
        cy.get(".figcaption>h5").contains("name: user1").should("contain.text","name: user1")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > img:nth-child(1)").trigger("mouseover")
        cy.get(".figcaption>h5").contains("name: user2").should("contain.text","name: user2")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > img:nth-child(1)").trigger("mouseover")
        cy.get(".figcaption>h5").contains("name: user3").should("contain.text","name: user3")
       
       

        
    })
})