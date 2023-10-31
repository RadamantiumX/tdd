// Añadimos el comando LOGIN
Cypress.Commands.add('login', ({username, password})=>{
    cy.request('POST', 'http://localhost:1234/login',{ // Hacemos la peticion al servidor para loguear
      username,
      password
     })
     .then(
      response => {
        localStorage.setItem('ACCESS_TOKEN', response.token)
        cy.visit('localhost:5173')
      }
     )
    
})