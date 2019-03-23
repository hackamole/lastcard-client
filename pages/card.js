import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Cookies from 'universal-cookie';

import Takeover from '../components/takeover'
import Spinner from '../components/spinner'
import Router from 'next/router';


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
const cookies = new Cookies();
export default class Card extends React.Component {
  static async getInitialProps({ query }) {
    const cookies = new Cookies();

    // console.log('DEBUG', query);
    // console.log('DEBUG', cookies);
    // console.log('DEBUG', cookies.get('last-card-auth'));
    //
    // // eslint-disable-next-line no-undef
    // const cardRes = await fetch(`http://lastcard.sytes.net/cards/${query.id}`,
    // {
    //   headers: {
    //     'Authorization': `Token ${cookies.get('last-card-auth')}`,
    //   },
    // });
    // const card = await cardRes.json();
    //
    // return { user: card.current_user }
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

  render () {


    console.log('y');
    return (
      <CardWrapper>
        <DynamicComponentWithLoading user={this.props.cards[0].current_user} />
        <Takeover cardId={this.props.url.query.id} />
      </CardWrapper>
    )
  }
}
