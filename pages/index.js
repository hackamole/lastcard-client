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
    padding: 4rem 2rem 2rem;
    flex-wrap: wrap;
    
    div.logo {
      width: 200px;
      margin-bottom: 3rem;
    }
    
    h1 {
      position: relative;
      font-size: 2.2rem;
      line-height: 2.6rem;
      max-width: calc(100% - 4rem);
      display: block;
      color: #6A38BB;
      
      span {
        text-decoration: underline;
      }
    }
    h2 {
      line-height: 1.5rem;
      max-width: calc(100% - 4rem);
      color: #6A38BB;
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
        <h1>
          A <span>real</span> professional network
        </h1>
        <h2>For professionals looking to connect with people that they really know.</h2>
        <Link href='/about' as='/about'><a>Get to know more!</a></Link>
      </div>
    </Wrapper>
  </Page>
)
