import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`

export default (props) => (
  <Main>
    <Header logo={props.showLogo} />
      {props.children}
    <Footer />
  </Main>
)
