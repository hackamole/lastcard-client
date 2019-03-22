import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from '../components/logo';

const Wrapper = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  header {
    box-sizing: border-box;
    height: 100%;
    max-height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem;
    
    div.logo {
      max-width: 60px;
    }
    
    nav {
        margin-bottom: 2px;
      a {
        text-decoration: none;
        color: #6A38BB;
      }
      > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
      }
    }
  }
  
  div.hero {
    position: relative;
    width: 100%;
    height: calc(100% - 4rem);
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
    button {
      position: absolute;
      bottom: 32px;
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
      <Logo size="20rem" full />
      <h1>
        The <span>real</span> professional network
      </h1>
      <h2>For professional looking to connect to real people that they really know.</h2>
      <button>Get to know more!</button>
    </div>
  </Wrapper>
)
