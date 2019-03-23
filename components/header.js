import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from './logo';

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  //justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem;
  
  div.logo {
    max-width: 60px;
    margin-right: auto;
  }
  
  nav {
    margin-bottom: 2px;
    margin-left: auto;
    a {
      font-weight: 600;
      color: #6A38BB;
    }
  }
`

export default (props) => (
  <Header>
    {props.logo && (
      <Link href='/' as='/'><a><Logo /></a></Link>
    )}
    {props.login && (
      <nav>
        <Link href='/login' as='/login'><a>login</a></Link>
      </nav>
    )}
  </Header>
)
