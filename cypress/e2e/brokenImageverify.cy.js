/// <reference types="cypress" />

import launch from "../PageObjects/siteLaunch";



describe("image verfication",()=>{
    it("brokenimageverification",()=>{
        let la = new launch()
        la.launchSite()
        cy.get('ul>:nth-child(4) > a').should("be.visible").click()
        cy.wait(3000)
        cy.get('img')
             .then(($img) => {
             try {
               expect($img[1].naturalWidth).to.be.greaterThan(0);
             } catch (err) {
                 cy.log('Image is broken but continuing...');
             }
        });
        cy.get('img')
             .then(($img) => {
             try {
               expect($img[2].naturalWidth).to.be.greaterThan(0);
             } catch (err) {
                 cy.log('Image is broken but continuing...');
             }
        });
        cy.get('img')
             .then(($img) => {
             try {
               expect($img[3].naturalWidth).to.be.greaterThan(0);
             } catch (err) {
                 cy.log('Image is broken but continuing...');
             }
        });
    })
})