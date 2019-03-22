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
      margin-left: 3rem;
    }
  }
  
  div.copy {
    margin-left: auto;
  }
`

export default (props) => (
  <Footer>
    {props.showNav && (
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
