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

export default class Card extends React.Component {
  static async getInitialProps({ query }) {
    const cookies = new Cookies();

    console.log('DEBUG', query);
    console.log('DEBUG', cookies);
    // console.log('DEBUG', cookies.get('last-card-auth'));

    // eslint-disable-next-line no-undef
    // const cardRes = await fetch(`http://lastcard.sytes.net/cards/${query.id}`,
    // {
    //   headers: {
    //     'Authorization': `Token ${cookies.get('last-card-auth')}`,
    //   },
    // });
    // const card = await cardRes.json();
    //
    // return { user: card.current_user }
  }

  render () {


    console.log('y');
    return (
      <CardWrapper>
        <DynamicComponentWithLoading user={this.props.user} />
        <Takeover />
      </CardWrapper>
    )
  }
}
