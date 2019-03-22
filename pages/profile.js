import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import 'isomorphic-unfetch'

import Takeover from '../components/takeover'
import Spinner from '../components/spinner'

const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DynamicComponentWithLoading = dynamic(() => import('../components/editProfile'), {
  loading: () => <Spinner />
})

export default class Profile extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch(api.cards)
    // const json = await res.json()
    // return { user: json.stargazers_count }
    return { user: {
        name: 'Joana Santos',
        title: 'CTO',
        company: 'Boogle',
        contacts: {
          phone: '+351 912 345 678',
          email: 'joanasantos@boogle.com',
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
      <ProfileWrapper>
        <DynamicComponentWithLoading user={this.props.user} />
      </ProfileWrapper>
    )
  }
}