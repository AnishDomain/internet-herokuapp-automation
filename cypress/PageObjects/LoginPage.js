
export default class login{

     setUserName(username){
        cy.get("input[placeholder='Username']").type(username)

     }

     setPassword(password){
        cy.get("input[placeholder='Password']").type(password)

     }

     clickLogin(){
        cy.get("button[type='submit']").click()

     }

     verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard")
     }
}

