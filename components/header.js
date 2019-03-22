import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from './logo';

const Header = styled.header`
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
    justify-content: flex-end;
    align-items: flex-end;
    padding: 2rem;
    
    div.logo {
      max-width: 60px;
    }
    
    nav {
      margin-bottom: 2px;
      a {
        font-weight: 600;
        text-decoration: none;
        color: #6A38BB;
      }
    }
  }
  
`

export default (props) => (
  <Header>
    {props.log && (
      <Link href='/' as='/'><a><Logo /></a></Link>
    )}
    <nav>
      <Link href='/login' as='/login'><a>login</a></Link>
    </nav>
  </Header>
)
