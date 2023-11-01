// "cy" es global, no hace falta q la definamos
// Para evitar los errores de sintaxis en cypress, instalar: "npm install eslint-plugin-cypress --save-dev"


// Todo este codigo trabaja con ASYNCRONIA por debajo
describe('template spec', () => {

  // Aca le indicamos que antes de cada TEST tiene q realizar esta funcion.
  beforeEach(() => {
    cy.visit('http://localhost:5173') // Visita la pagina
/*
    cy.request('POST', 'http://localhost:1234/api/testing/reset')// Limpia la base de datos de test

    const user = {
      username: 'Radamantium',
      password: '1234'
    }
 // Creamos un nuevo usuario
    cy.request('POST', 'http://localhost:1234/user', user)*/
  })


  it('front page can be opened', () => {

    cy.contains('Use Calculator') // Si contiene este texto la pagina
  })
  /* COMENTADO A PARTIR DE ACA

  it('login form can be opened', () => {
    cy.contains('Show login').click() // Si se muestra el login con un click en el boton
  })
  
  it('user can login', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder="username"]').type('Eduardo') // Obtenemos el input con el placeholder "username"
    cy.get('[placeholder="password"]').type('1234') // Pasamos el input con el placeholder "password"
    cy.get('#login-form-button').click() // Obtenemos el boton con esa ID y le hacemos click
    cy.contains('Create a new note')
  })

  // Si el LOGIN falla
  it('login fails with wrong password', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder="username"]').type('Loro') 
    cy.get('[placeholder="password"]').type('asasdc') 
    cy.get('#login-form-button').click() 
    cy.get('.error').should('contain', 'Wrong credentials')// Utilizamos la clase del TAG
  })

  // Hacemos el LOGIN con el comando
  describe('when logged in', () => { // Cuando el usuario ya haya iniciado sesion
    beforeEach(() => { // Primero iniciamos sesion
      cy.login({ username:'Eduardo', password: '1234' }) // Utilizamos el comando que creamos pasandole los parametros que nos pide
    })

    it('a new note can be created', () => {
     const noteContent = 'a note created by cypress'
     cy.contains('Create a new note').click() // Hacemos click para mostrar el formulario
     cy.get('[placeholder="Write your note content"]').type(noteContent) // Escribimos en el formulario
     cy.contains('save').click() // Guardamos la nota
     cy.contains(noteContent) // La nota tiene q aparecer
    })

    // Si una nota existe
    describe('and a note exists', () => {
      // Antes de la nota
      beforeEach(() => {
        cy.request('POST', 'http://localhost:1234/new-note')
      })
    })
  })

  SOLO PARA PRUEBAS EN DESARROLLO - NO INTEGRAR -
   */
   

})