import React from 'react'
import LoginPage from './LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

describe('<LoginPage />', () => {
it('render navigation', () => {
    cy.mount(
      <BrowserRouter>
      <Routes>   
          <Route path="/" element= {<LoginPage  />}/>
      </Routes>
  </BrowserRouter>
    )
  })
})
