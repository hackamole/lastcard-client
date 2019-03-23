import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
`

export default (props) => (
  <Main>
    <Header logo={props.showLogo} login={props.showLogin} />
      {props.children}
    <Footer nav={props.showNav}/>
  </Main>
)
