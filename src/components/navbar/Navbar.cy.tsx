import React from 'react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  it('El componente se renderiza para pantallas grandes', () => {
    cy.viewport(1000, 800)
    cy.mount(<Navbar />)
    cy.contains("Vender")



  })

  it('El componente se renderiza para pantallas pequeñas', () => {
    cy.viewport(500, 500)
    cy.mount(<Navbar />)
    cy.get("Vender").should("not.exist");


    
  })
})