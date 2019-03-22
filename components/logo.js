import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  width: ${props => props.size ? props.size : '3rem'};
  height: auto;
  display: flex;
  align-items: center; 
  
  img {
    width: 100%;
  }
`

export default (props) => (
  <Logo size={props.size} className="logo">
    {props.full ? (
      <img src="/static/images/logo_full_no-bg.png" alt=""/>
    ) : (
      <img src="/static/images/logo.png" alt="" />
    )}
  </Logo>
)
