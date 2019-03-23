import React from 'react'
import styled from 'styled-components'

import Page from '../layouts/main'

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  @media (min-width: 475px) {
    padding: 0 10rem;
  }
  
  > h1 {
    padding: 0 2rem;
    
    @media (min-width: 475px) {
      padding: 0 2rem 0;
    }
  }
  
  > p {
    padding: 0 2rem;
    
    @media (min-width: 475px) {
      padding: 6rem 2rem 0;
    }
  }
  
  > h2 {
    padding: 0 2rem;
    
    @media (min-width: 475px) {
      padding: 0 2rem 0;
    }
  }
  
  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 475px) {
      flex-direction: row;
      display: flex;
      padding: 1rem 2rem 2rem;
    }
    
    &:last-of-type {
      margin-bottom: 8rem;
    }
    
    div:last-of-type {
      align-self: flex-end;
    }
    
    h2 {
      font-size: 1.6rem;
      width: 100%;
      color: #6A38BB;
      @media (min-width: 475px) {
        margin-left: 2rem;
      }
      
      &.mobile {
        display: block;
        @media (min-width: 475px) {
          display: none;
        }
      }
      
      &.laptop {
        display: none;
        @media (min-width: 475px) {
          display: block;
        }
      }
    }
    
    p {
      align-self: flex-end;
      color: #6A38BB;
      @media (min-width: 475px) {
        align-self: flex-end;
        padding-bottom: 4rem;
        margin-left: 2rem;
        max-width: 50%;
      }
    }
  }
`

const Card = styled.article`
  width: calc(350px / 1.25);
  height: calc(200px / 1.25);
  background-color: #6A38BB;
  margin-bottom: 3rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  
  span {
    font-size: 4rem;
    color: white;
    
    &.icon-infinite {
      font-size: 6rem;
    }
  }
`

export default class About extends React.Component {
  render() {
    return (
      <Page showLogo showNav showLogin>
        <AboutWrapper>
          <p>tl:dr</p>
          <h1>Invite only. Get a card!</h1>
          <br/>
          <h2>How to use</h2>
          <section>
            <div>
              <h2 className="mobile">Meet & Share</h2>
              <Card>
                <span className="icon-meet" />
                <span className="icon-share" />
              </Card>
            </div>
            <div>
              <h2 className="laptop">Meet & Share</h2>
              <p>Had a nice talk with someone? Got a new awesome card and now don't know what to do with it?</p>
            </div>
          </section>
          <section>
            <div>
              <h2 className="mobile">Scan & Takeover</h2>
              <Card>
                <span className="icon-qrcode" />
                <span className="icon-cool" />
              </Card>
            </div>
            <div>
              <h2 className="laptop">Scan & Takeover</h2>
              <p>Now that you have access to the profile associated with the card, you can create your own profile and takeover the card, making it yours.</p>
            </div>
          </section>
          <section>
            <div>
              <h2 className="mobile">Repeat... Repeat...</h2>
              <Card>
                <span className="icon-repeat" />
                <span className="icon-infinite" />
            </Card>
            </div>
            <div>
              <h2 className="laptop">Repeat... Repeat...</h2>
              <p>Meet with others and share like they did with you. Reuse that card and save some dolphins and kitties.</p>
            </div>
          </section>
        </AboutWrapper>
      </Page>
    )
  }
}
