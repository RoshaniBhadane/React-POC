import React from 'react'
import BarChartComp from './BarChartComp'

describe('<BarChartComp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BarChartComp />)
  })
})