import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Header from '../components/header'

const Main = styled.div`

`

export default () => (
  <Main>
    <Header />
      {children}
    <footer />
  </Main>
)
