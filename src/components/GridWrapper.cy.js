import React from 'react'
import GridWrapper from './GridWrapper'

describe('<GridWrapper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GridWrapper />)
  })
})