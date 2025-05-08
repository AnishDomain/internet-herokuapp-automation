import launch from "../PageObjects/siteLaunch";


describe("alerts", ()=>{

         beforeEach(()=>{
            let la = new launch()
            la.launchSite()
            cy.get("ul>:nth-child(29) > a").click()

         })   

    it("js alert", ()=>{
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert",(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
    })


    it("js confirm alert", ()=>{
        
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm",(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
    })
   
    it("js promted alert", ()=>{
        
        cy.window().then((win) =>{
            cy.stub(win,'prompt').returns('welcome')
           
        })

        cy.get("button[onclick='jsPrompt()']").click()

    })


})