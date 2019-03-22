import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../components/logo'

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  header {
    box-sizing: border-box;
    height: 100%;
    max-height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem;
    
    div.logo {
      max-width: 60px;
    }
    
    nav {
        margin-bottom: 2px;
      a {
        text-decoration: none;
        color: #6A38BB;
      }
      > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
      }
    }
  }
  
  h1 {
    text-align: center;
    color: #6A38BB;
  }
  
  section {
    min-height: 100vh;
    padding: 4rem 2rem;
    
    h2 {
      font-size: 1.6rem;
      width: 100%;
      color: #6A38BB;
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
    font-size: 64px;
    color: white;
  }
`

export default class About extends React.Component {
  render() {
    return (
      <AboutWrapper>
        <header>
          <Link href='/' as='/'><a><Logo /></a></Link>
          <nav>
            <Link href='/login' as='/login'><a>login</a></Link>
          </nav>
        </header>
        <h1>How to use</h1>
        <section className="red">
          <h2>Meet & Share</h2>
          <Card>
            <span className="icon-meet"></span>
            <span className="icon-share"></span>
          </Card>
        </section>
        <section className="green">
          <h2>Scan & Takeover</h2>
          <Card>
            <span className="icon-qrcode"></span>
            <span className="icon-edit"></span>
          </Card>
        </section>
        <section className="orange">
          <h2>Repeat... forever?</h2>
          <Card>
            <span className="icon-repeat"></span>
            <span className="icon-infinite"></span>
          </Card>
        </section>
      </AboutWrapper>
    )
  }
}
