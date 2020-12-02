/// <reference types="cypress"/>

context('AutomationCrudTest', function(){
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    });
    it('delete test',function(){
        const currentLenOfTable = 3;
        const userObj = {
            name: 'User 3'            
        }
        cy.get('#tableUserList>tbody>tr').should('have.length', currentLenOfTable);
        cy.get('#tableUserList>tbody>tr').each(($row,index,$rows) => {
            cy.wrap($row).within(() =>{
                cy.get('td').eq(0).then(($tex333) => {
                    if($tex333.text() == userObj.name){
                        cy.get('td').eq(2).then($button => {
                            cy.get('#editdelete').click();
                        });      
                    }
                });
            });
        });
        cy.get('#tableUserList>tbody>tr').should('have.length', currentLenOfTable-1);

    });
});
