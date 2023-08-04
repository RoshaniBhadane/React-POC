import React from 'react'
import PieChartComp from './RadarChartComp'

describe('<PieChartComp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PieChartComp />)
  })
})