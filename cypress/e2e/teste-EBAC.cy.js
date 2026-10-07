/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    cy.visit('register.html')

  });

  it('Deve fazer cadastro com sucesso - Usando Faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    let telefone = faker.phone.number()

    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(telefone)
    cy.get('#password').type('teste@123')
    cy.get('#confirm-password').type('teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
    cy.get('.user-actions > .btn-outline-danger > .fas').click()

    cy.url().should('include', 'login')
    cy.get('#email').type(email)
    cy.get('#password').type('teste@123')
    cy.get('#login-btn').click()
  })

});