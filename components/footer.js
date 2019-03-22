import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = styled.footer`

`

export default () => (
  <Footer>
    <nav>
      <Link href='/' as='/'><a>home</a></Link>
      <Link href='/login' as='/login'><a>login</a></Link>
      <Link href='/about' as='/about'><a>about</a></Link>
    </nav>
    <div className="copy">
      <p>by Hackamole</p>
    </div>
  </Footer>
)
