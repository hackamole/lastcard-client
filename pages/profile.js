import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import Spinner from '../components/spinner'
import Page from '../layouts/main'

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
    return {
      cards: [
        {
          id: 1,
          original_user: 1,
          url: 'url',
          qr_code_url: 'url',
          created_at: 'timestamp',
          modified_at: 'timestamp',
          current_user: {
            id: 1,
            first_name: 'Celso',
            last_name: 'Martinho',
            mobile: '912 345 678',
            email: 'you@example.com',
            address: {
              street: 'string',
              postcode: 'string',
              city: 'string',
              country: 'string',
            },
            birthday: 'date',
            url: 'url',
            social_profile: 'url'
          },
          previousUser: {
            id: 1,
            first_name: 'Celso',
            last_name: 'Martinho',
            mobile: '912 345 678',
            email: 'you@example.com',
            address: {
              street: 'string',
              postcode: 'string',
              city: 'string',
              country: 'string',
            },
            birthday: 'date',
            url: 'url',
            social_profile: 'url'
          },
      },
        {
          id: 2,
          original_user: 2,
          url: 'url',
          qr_code_url: 'url',
          created_at: 'timestamp',
          modified_at: 'timestamp',
          current_user: {
            id: 1,
            first_name: 'Celso',
            last_name: 'Martinho',
            mobile: '912 345 678',
            email: 'you@example.com',
            address: {
              street: 'string',
              postcode: 'string',
              city: 'string',
              country: 'string',
            },
            birthday: 'date',
            url: 'url',
            social_profile: 'url'
          },
          previousUser: {
            id: 2,
            first_name: 'João',
            last_name: 'Sil',
            mobile: '912 345 678',
            email: 'you@example.com',
            address: {
              street: 'string',
              postcode: 'string',
              city: 'string',
              country: 'string',
            },
            birthday: 'date',
            url: 'url',
            social_profile: 'url'
          },
        },
      ]
    };
  }

  render() {
    return (
      <Page showLogo showNav>
        <ProfileWrapper>
           <DynamicProfileWithLoading user={this.props.cards[0].current_user} />
           <DynamicCardsWithLoading cards={this.props.cards} />
        </ProfileWrapper>
      </Page>
    )
  }
}
