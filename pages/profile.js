import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import 'isomorphic-unfetch'

import Spinner from '../components/spinner'

const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DynamicProfileWithLoading = dynamic(() => import('../components/editProfile'), {
  loading: () => <Spinner />
})

const DynamicCardsWithLoading = dynamic(() => import('../components/cardList'), {
  loading: () => <Spinner />
})

export default class Profile extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    // const cardsRes = await fetch('http://localhost:8000/cards/');
    // const cards = await cardsRes.json();

    // const usersRes = await fetch('http://localhost:8000/users/');
    // const users = await usersRes.json();
    // return { cards, users };
    return {};
  }

  render() {
    return (
      <ProfileWrapper>
        {/* <DynamicProfileWithLoading user={this.props.user} /> */}
        {/* <DynamicCardsWithLoading cards={this.props.cards} /> */}
      </ProfileWrapper>
    )
  }
}
