import React from 'react'
import styled from 'styled-components'

const Logo = styled.span`
  font-size: ${props => props.size ? props.size : '3rem'};
  width: 100%;
  height: 100%;
`

export default (props) => <Logo size={props.size}>🦎</Logo>
