import React from 'react'
import styled from 'styled-components'

const CardListWrapper = styled.section`
  padding: 8rem 2rem 2rem;
`

const Card = styled.article`
  width: calc(350px / 1.25);
  height: calc(200px / 1.25);
  background-color: white;
  margin-bottom: 3rem;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  color: #787878;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  header {
    width: 100%;
    padding: 1rem;
    text-align: right;
    font-size: .875rem;
  }
  div {
    width: 100%;
    padding: 1rem;
    h3 {
      font-weight: 600;
    }
  }
`

export default class CardList extends React.Component {
  static async getInitialProps () {
    // for each card get userdetails
    const { cards } = this.props;

    // eslint-disable-next-line no-undef
    // const res = await fetch(api.cards)
    // const json = await res.json()
    // return { user: json.stargazers_count }
    return { cards: cards, users: {
        [cards[0].id]: {

        }
      }}
  }

  state = {
    cards: {},
  }

  renderCard (card) {
      // id: 1234,
      // original_user: 1,
      // card_url: 'url',
      // qr_code_url: 'url',
      // created_at: 'timestamp',
      // modified_at: 'timestamp',
      // current_user: null
    return (
      <Card>
        <header>{card.id}</header>
        <div>
          <h3>{card.original_user}</h3>
        </div>
      </Card>
    )
  }

  render () {
    const { cards } = this.props;
    return (
      <CardListWrapper>
        {cards.map(card => (
          <div key={card.id}>
            {this.renderCard(card)}
          </div>
        ))}
      </CardListWrapper>
    )
  }
}

