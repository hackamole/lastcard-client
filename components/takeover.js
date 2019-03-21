import React, { useState } from 'react'
import styled from 'styled-components'

const Takeover = styled.section`
  height: 64px;
  width: 100%;
  background-color: #E8E8E8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #797979;
  
  button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

const toggleLogin = () => {
  console.log('test');
}

export default () => (
  <Takeover>
    <button onClick={() => toggleLogin()}>
      take over this card
    </button>
  </Takeover>
)
