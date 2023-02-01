import React from "react";
import Steps from "./Steps";

describe("<Steps />", () => {
  it("El componente se renderiza para pantallas grandes", () => {
    cy.viewport(1000, 800);
    cy.mount(<Steps />);
    cy.get('[data-cy="bigImg"]').should("be.visible")
  });

  it("El componente se renderiza para pantallas pequeñas", () => {
    cy.viewport(500, 500);
    cy.mount(<Steps />);
    cy.get('[data-cy="bigImg"]').should("not.be.visible")
  });
});
