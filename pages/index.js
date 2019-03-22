import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from '../components/logo';
import Page from '../layouts/main'

const Wrapper = styled.div`
  div.hero {
    position: relative;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    
    div.logo {
      width: 260px;
      margin-bottom: 3rem;
    }
    
    h2 {
      font-size: 2rem;
      max-width: calc(100% - 4rem);
    }
    
    a {
      text-decoration: none;
      position: absolute;
      bottom: 32px;
      right: 32px;
      width: calc(100vw - 4rem);
      height: 64px;
      font-weight: 500;
      border: 0;
      background-color: transparent;
      color: #6A38BB;
    }
  }
`

export default () => (
  <Page>
    <Wrapper>
      <div className="hero">
        <Logo size="20rem" full />
        <h2>A <u>real</u> professional network</h2>
        <h2>For professionals looking to connect with people that they really know.</h2>
        <Link href='/about' as='/about'><a>Get to know more!</a></Link>
      </div>
    </Wrapper>
  </Page>
)
