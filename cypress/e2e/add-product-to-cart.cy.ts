describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should be able to navigate to the product page and add it to the cart', () => {
    // Search link to /product route
    cy.get('a[href^="/product"]').first().click()

    // After click, url have should include '/product'
    cy.url().should('include', '/product')
    // cy.location('pathname').should('include', '/product')

    // Click on button 'Adicionar ao carrinho'
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
  it('should not count duplicated produto on cart', () => {
    // Search link to /product route
    cy.get('a[href^="/product"]').first().click()

    // After click, url have should include '/product'
    cy.url().should('include', '/product')
    // cy.location('pathname').should('include', '/product')

    // Click on button 'Adicionar ao carrinho'
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
  it('should be able to search a product and add it to cart', () => {
    cy.searchByQuery('moletom')

    cy.url().should('include', '/search?q=moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
