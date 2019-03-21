import React from 'react'
import styled from 'styled-components'

import Profile from '../components/profile'
import Takeover from '../components/takeover'

const Card = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default () => (
  <Card>
    <Profile />
    <Takeover />
  </Card>
)
