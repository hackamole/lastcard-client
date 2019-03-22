import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import 'isomorphic-unfetch'

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
    console.log('DEBUG', query);
    
    // eslint-disable-next-line no-undef
    const cardRes = await fetch(`http://localhost:8000/cards/${query.id}`);
    const card = await cardRes.json();

    return { user: card.current_user }
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
