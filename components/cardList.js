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
  justify-content: center;
  align-items: center;
  color: #787878;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

`

export default class CardList extends React.Component {
  renderCard (card) {
    return (
      <Card>
        card #{card.uuid}
      </Card>
    )
  }

  render () {
    const { cards } = this.props;
    return (
      <CardListWrapper>
        {cards.map(card => (
          <div key={card.uuid}>
            {this.renderCard(card)}
          </div>
        ))}
      </CardListWrapper>
    )
  }
}

