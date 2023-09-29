/// <reference types="cypress" />

describe('Categories', () => {
  beforeEach(() => {
    cy.visit('https://hyf-react-w2-example.netlify.app/');
  });

  it('Starts with no categories selected', () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-testid="category-item"]').should('have.length', 4);
      cy.get('[data-selected="false"]').should('have.length', 4);
    });
  });

  it('Selecting a category should filter the list', () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-selected="false"]').should('have.length', 4);
    });

    cy.get('[data-testid="product-link"]').should('have.length', 20);

    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-elementid="15"]').click(); // Replace CATEGORY_ID with the actual ID of the category you want to select.
      cy.get('[data-selected="true"]').should('have.length', 1);
      cy.get('[data-selected="false"]').should('have.length', 3);
    });

    // Adjust the number (e.g., 6) based on how many products are expected after filtering.
    cy.get('[data-testid="product-link"]').should('have.length', 6);
  });

  it('Selecting a new category should deselect the old one', () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-selected="false"]').should('have.length', 4);
      cy.get('[data-elementid="CATEGORY_ID_1"]').click(); // Replace CATEGORY_ID_1 with the actual ID of the first category.
      cy.get('[data-selected="true"]').should('have.length', 1);
      cy.get('[data-selected="false"]').should('have.length', 3);
      cy.get('[data-elementid="CATEGORY_ID_2"]').click(); // Replace CATEGORY_ID_2 with the actual ID of the second category.
      cy.get('[data-selected="true"]').should('have.length', 1);
      cy.get('[data-selected="false"]').should('have.length', 3);
    });
  });
});
