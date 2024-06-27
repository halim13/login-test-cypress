describe('Login Page', () => {
  it('should display login form', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Login')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.get('button').contains('Login').should('exist')
  })

  it('should show error for invalid email', () => {
    cy.visit('http://localhost:5173')
    cy.get('input[type="email"]').type('invalid-email')
    cy.get('input[type="password"]').type('password123')
    cy.get('button').contains('Login').click()
    cy.contains('Please enter a valid email address.')
  })

  it('should show login failed for incorrect credentials', () => {
    cy.visit('http://localhost:5173')
    cy.get('input[type="email"]').type('user@example.com')
    cy.get('input[type="password"]').type('wrongpassword')
    cy.get('button').contains('Login').click()
    cy.contains('Login failed.')
  })

  it('should show login successful for correct credentials', () => {
    cy.visit('http://localhost:5173')
    cy.get('input[type="email"]').type('user@example.com')
    cy.get('input[type="password"]').type('correctpassword')
    cy.get('button').contains('Login').click()
    cy.contains('Login successful!')
  })
})
