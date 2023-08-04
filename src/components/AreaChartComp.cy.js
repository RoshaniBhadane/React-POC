import React from 'react'
import AreaChartComp from './AreaChartComp'

describe('<AreaChartComp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AreaChartComp />)
  })
})