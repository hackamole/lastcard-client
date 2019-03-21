import React from 'react'
import styled from 'styled-components'
import 'isomorphic-unfetch'

import Profile from '../components/profile'
import Takeover from '../components/takeover'

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Card extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    // return { user: json.stargazers_count }
    return { user: {
        name: 'João Silva',
        title: 'Project Manager',
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
      } }
  }

  render () {
    return (
      <CardWrapper>
        <Profile user={this.props.user} />
        <Takeover />
      </CardWrapper>
    )
  }
}
