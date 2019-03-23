import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Cookies from 'universal-cookie';

import Takeover from '../components/takeover'
import Spinner from '../components/spinner'
import Router from 'next/router';


const ScanWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Card extends React.Component {
  render () {
    return (
      <ScanWrapper>
        <img src="/static/images/qr1.png" alt=""/>
      </ScanWrapper>
    )
  }
}
