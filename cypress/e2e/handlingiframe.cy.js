/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("handle iframe",()=>{
    it('by using custom command',()=>{
        let la = new launch()
        la.launchSite()
        cy.get("ul>:nth-child(22) > a").click()
        cy.get("li:nth-child(2)").click()
        cy.getiframe("#mce_0_ifr").type('welcome {ctrl+a}');
        cy.get("button[title='Bold']").click()
    })
})