import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 75rem;
  padding: 0 2rem;
  
  nav {
    a {
      margin-left: .5rem;
      font-size: 12px;
      
      @media (min-width: 475px) {
        margin-left: 3rem;
        font-size: 16px;
      }
    }
  }
  
  div.copy {
    margin-left: auto;
    font-size: 12px;
      
    @media (min-width: 475px) {
      font-size: 16px;
    }
  }
`

export default (props) => (
  <Footer>
    {props.nav && (
      <nav>
        <Link href='/' as='/'><a>home</a></Link>
        <Link href='/login' as='/login'><a>login</a></Link>
        <Link href='/about' as='/about'><a>about</a></Link>
      </nav>
    )}
    <div className="copy">
      {/*<p>by <a href="https://github.com/hackamole">Hackamole</a></p>*/}
      <p>by Hackamole</p>
    </div>
  </Footer>
)
