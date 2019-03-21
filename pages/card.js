import React from 'react'
import styled from 'styled-components'

import Profile from '../components/profile'
import Takeover from '../components/takeover'

const user = {
  name: 'João Silva',
  title: 'Project Manager @ GoodCompany',
  company: 'Good Company',
  contacts: {
    phone: '+351 912 345 678',
    email: 'joaosilva@goodcompany.com',
  },
  links: {
    linkedin: '',
    github: '',
    vcard: '',
  },
}

const Card = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default () => (
  <Card>
    <Profile user={user} />
    <Takeover />
  </Card>
)
