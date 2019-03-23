import React from 'react'
import styled from 'styled-components'
import Router from "next/router";

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
  transition: height 500ms cubic-bezier(0.19, 1, 0.22, 1);
  
  &.isExpanded {
    height: 100%;
  }
  
  button.toggle {
    z-index: 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 64px;
    margin: 0;
    padding: 0;
    background-color: #E8E8E8;
    color: #797979;
    outline: none;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 4rem 4rem;
    
    p {
      font-size: 1.5rem;
      padding: 4rem 0;
    }
    section {
      width: 100%;
      
      button.primary {
        width: 100%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #797979;
        color: white;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        
        span {
          margin-left: .4rem;
        }
      }
    }
    
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
    this.setState(prevState => ({isExpanded: !prevState.isExpanded}))
  }

  render () {
    const { isExpanded } = this.state;
    return (
      <TakeoverWrapper className={isExpanded ? 'isExpanded' : ''}>
        <button className="toggle" onClick={this.togglePanel}>
          {isExpanded ? 'back to profile' : 'take over this card'}
        </button>

        <div>
          <p>Please login to see card history and to be able to reset the card and enable super powers!!</p>
          <section>
            <button className="primary">
              takeover
              {/* login with <span className="icon-github"></span> */}
            </button>
            {/* <button className="primary">
              login with <span className="icon-linkedin"></span>
            </button> */}
          </section>
        </div>
      </TakeoverWrapper>
    )
  }
}

