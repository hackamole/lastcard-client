import React from 'react'
import styled from 'styled-components'

const TakeoverWrapper = styled.section`
  position: fixed;
  bottom: 0;
  height: 64px;
  width: 100%;
  background-color: #E8E8E8;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #797979;
  transition: height 500ms cubic-bezier(1, 0, 0, 1);
  
  &.isExpanded {
    height: 100%;
  }
  
  button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export default class Takeover extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch(api.cards)
    // const json = await res.json()
    // return { user: json.stargazers_count }
  }

  state = {
    isExpanded: false,
  }

  togglePanel = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        isExpanded: !prevState.isExpanded,
      }
    })
  }

  render () {
    console.log(this.state.isExpanded);
    return (
      <TakeoverWrapper className={this.state.isExpanded ? 'isExpanded' : ''}>
        <button onClick={() => this.togglePanel()}>
          take over this card
        </button>
      </TakeoverWrapper>
    )
  }
}

