/// <reference types="cypress"/>

context('CRUD API test', () =>{
    it('Get API Test', ()=>{
        cy.request('GET', 'https://httpbin.org/get').then((response) =>{
            expect(response.body).to.have.property('url','https://httpbin.org/get')
        })
    })

    it('Post API test', ()=>{
        cy.request({
            method: "POST",
            url: 'https://httpbin.org/post',
            headers: {
                'content-type': 'application/json',
            },
            body: {
                "name":"Pramod",
            }
        }).then((response) =>{
            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal({'name':'Pramod'})
        });
    });

    it('Put API Test', ()=>{
        cy.request('PUT','https://httpbin.org/put', {'name':'Pramod'}).then((response) =>{
            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal({'name':'Pramod'});
        });
    });
    it('Patch API Test',()=>{
        cy.request('PATCH', 'https://httpbin.org/patch', {'name':'Pramod'}).then((response) =>{
            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal({'name':'Pramod'})
        });
    });
    it('Delete API Test',()=>{
        cy.request('DELETE', 'https://httpbin.org/delete').then((response) =>{
            expect(response.body).to.have.property('url','https://httpbin.org/delete')
        });
    });
});

