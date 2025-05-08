/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("handle infinitescroll",()=>{
    it('infinitescroll',()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(26) > a").click()
        cy.scrollTo('bottom');
        cy.wait(2000);
       

        
    })
})