import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from '../components/logo';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  header {
    box-sizing: border-box;
    height: 100%;
    max-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    nav {
      a {
        text-decoration: none;
        color: white;
      }
      > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
      }
    }
  }
  
  div.hero {
    width: 100%;
    height: calc(100% - 4rem);
    display: flex;
    padding: 6rem 1rem;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    
    span {
      top: 12rem;
      left: -2rem;
      position: absolute;
      width: 25%;
    }
    
    h1 {
      max-width: 90%;
      text-align: right;
    }
    
    button {
      width: 60%;
      height: 64px;
      border: 4px solid #787878;
      background-color: transparent;
      color: #787878;
      font-weight: bold;
    }
  }
`

export default () => (
  <Wrapper>
    <header>
      <Logo />
      <nav>
        <Link href='/login' as='/login'><a>login</a></Link>
        {/*<ul>*/}
          {/*<li><Link href='/card' as='/card'><a>card page</a></Link></li>*/}
          {/*<li><Link href='/profile' as='/profile'><a>profile page</a></Link></li>*/}
        {/*</ul>*/}
      </nav>
    </header>

    <div className="hero">
      <Logo size="8rem" />
      <h1>Share, reuse and track your visit cards and connections.</h1>
      <button>Get to know more!</button>
    </div>
  </Wrapper>
)
