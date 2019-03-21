import React  from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: spin 1s ease-in-out infinite;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -(40 / 2) * 1px;
    top: -(40 / 2) * 1px;
    width: 40 * 1px;
    height: 40 * 1px;
    -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%, 0 0);
    clip-path: polygon(100% 0, 0 100%, 100% 100%, 0 0);
  }
  &:before {
    background: linear-gradient(90deg, #FFFFFF, #E2E2E2);
    animation: fan1 1s infinite alternate;
  }
  &:after {
    background: linear-gradient(360deg, #FFFFFF, #E2E2E2);
    animation: fan2 1s infinite alternate;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(270deg) }
  }
  @keyframes fan1 {
    0% { transform: skewx(0deg) }
    100% { transform: skew(45deg, -5deg) }
  }
  @keyframes fan2 {
    0% { transform: rotate(90deg) skewx(0deg) }
    100% { transform: rotate(90deg) skew(45deg, -5deg) }
  }
`

export default () => <Spinner />

