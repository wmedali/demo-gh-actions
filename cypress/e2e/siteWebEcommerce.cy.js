///<reference types="cypress" />;

describe("visite d'un site web e-commerce", () => {
  it("premiere sceanrio", () => {
    //visite le site saucedmo
    cy.visit("https://www.saucedemo.com");
    //user name & password
    cy.get('[id="user-name"]').type("standard_user");
    cy.contains("standard_user").should("be.visible");
    cy.get('[id="password"]').type("secret_sauce");
    cy.contains("secret_sauce").should("be.visible");
    //ajoute un produit
    cy.get('[data-test="login-button"]').click();
    cy.get("#item_4_title_link > .inventory_item_name").click();
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click();
    // fin
  });
});
