import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import 'isomorphic-unfetch'

import Takeover from '../components/takeover'
import Spinner from '../components/spinner'

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DynamicComponentWithLoading = dynamic(() => import('../components/profile'), {
  loading: () => <Spinner />
})

export default class Card extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch(api.cards)
    // const json = await res.json()
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
          linkedin: 'url',
          github: 'url',
          vcard: ':)',
        },
      } }
  }

  render () {
    return (
      <CardWrapper>
        <DynamicComponentWithLoading user={this.props.user} />
        <Takeover />
      </CardWrapper>
    )
  }
}
