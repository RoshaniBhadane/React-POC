import React from 'react'
import LineChartComp from './LineChartComp'

describe('<LineChartComp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LineChartComp />)
  })
})