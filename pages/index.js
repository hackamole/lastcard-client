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
      margin-bottom: 2rem;
      @media (min-width: 475px) {
        margin-bottom: 3rem;
      }
      
      h1 {
        max-width: 260px;
        margin-top: 3rem;
        
        @media (min-width: 475px) {
          margin-top: 6rem;
        }
      }
    }
    
    h2 {
      font-size: 1.2rem;
      line-height: .8;
      margin-left: 22px;
      margin-bottom: 3rem;
      max-width: 66%;
      
      @media (min-width: 475px) {
        margin-bottom: 4rem;
        font-size: 2rem;
      }
      
      span {
        font-size: 2rem;
        @media (min-width: 475px) {
          font-size: 3rem;
        }
      }
    }
    
    .action {
      text-decoration: none;
      border: 1px solid #6A38BB;
      margin-left: 22px;
      padding: 1rem 3rem;
      font-weight: 500;
    }
  }
`

export default () => (
  <Page showLogin>
    <Wrapper>
      <div className="hero">
        <Logo size="20rem" full />
        <h2>
          A <u>real</u> professional network<span>.</span><br/><br/>
          For professionals looking to connect with people that they really know<span>.</span>
        </h2>
        <Link href='/about' as='/about'><a className="action">Get to know more!</a></Link>
      </div>
    </Wrapper>
  </Page>
)
