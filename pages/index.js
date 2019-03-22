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
      margin-top: 6rem;
    }
    
    h2 {
      font-size: 2rem;
      line-height: .8;
      margin-left: 22px;
      margin-bottom: 4rem;
      max-width: 66%;
      
      span {
        font-size: 3rem;
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
  <Page>
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
