/// <reference types="cypress"/>


describe("This is login test", ()=>{
    beforeEach(() =>{
        cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")
    })
    it('Login Success flow', ()=>{
        cy.get('#txtUsername').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#txtPassword').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#btnLogin').click();
        cy.url().should('include', 'orangehrm/index.php')
        cy.get('#option-menu > li:nth-child(1)').then(($text1) =>{
            const welcometext = $text1.text(); 
            expect(welcometext).to.match(/Welcome .+/)
        })
    })
    it("Login Failure Flow", ()=>{
        cy.get('#txtUsername').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#txtPassword').type("opensourcecms6").should('have.value','opensourcecms6')
        cy.get('#btnLogin').click();
        cy.url().should('include', '/auth/validateCredentials')
        cy.get('#spanMessage').should('be.visible');
    })
})