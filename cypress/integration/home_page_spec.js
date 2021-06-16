describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.get('.btn').click() //click "Create a new todo" button
      cy.get('.modal')
        .get('form')
        .get('input:first').type('aaa')
        .get('select').select('css')
        .get('textarea').type('just for test')
        .get('input:last').click().clock(new Date())
        .get('form').submit()
    })
    
  })