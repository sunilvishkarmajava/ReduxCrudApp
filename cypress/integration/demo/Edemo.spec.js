/// <reference types="cypress"/>


describe("This is login test", ()=>{
    beforeEach(() =>{
        cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")
    })
    it('Logout flow Test', ()=>{
        // cy.visit('https://s2.demo.opensourcecms.com/orangehrm/index.php');
        cy.get('#txtUsername').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#txtPassword').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#btnLogin').click();
        cy.url().should('include', 'orangehrm/index.php')
        cy.get('#option-menu > li:nth-child(1)').then(($text1) =>{
            const welcometext = $text1.text(); 
            expect(welcometext).to.match(/Welcome .+/)
        })
        cy.get('#option-menu > li:nth-child(3) > a').click();
    })
})