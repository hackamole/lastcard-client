import React from 'react'
import styled from 'styled-components'

const CardListWrapper = styled.section`
`

const Card = styled.article`
  width: 350px;
  height: 200px;
  background-color: white;
`

export default class CardList extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch(api.cards)
    // const json = await res.json()
    // return { cards: json.stargazers_count }
    return { cards: [
        {
          uuid: 1,
        },
    ]}
  }

  renderCard (card) {
    console.log(card);
    return (
      <Card>

      </Card>
    )
  }

  render () {
    const { cards } = this.props;
    return (
      <CardListWrapper>
        {cards.map(card => (
          <div key={card.uuid}>
            {() => this.renderCard(card)}
          </div>
        ))}
      </CardListWrapper>
    )
  }
}

