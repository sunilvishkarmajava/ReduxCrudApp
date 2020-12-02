/// <reference types="cypress"/>

context('AutomationCrudTest', function(){
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })
    it('add test',function(){
        const currentLenOfTable = 3;
        const valueLenTable = cy.get('#tableUserList>tbody>tr');
        cy.log(valueLenTable.its('length'))
        cy.get('#username').type('Test2').should('have.value','Test2')
        cy.get('#userage').type('78').should('have.value','78')
        cy.get('#SubmitUser').click()
        cy.get('#tableUserList>tbody>tr').should('have.length', currentLenOfTable+1);
    })
})
