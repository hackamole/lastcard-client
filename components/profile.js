import React from 'react'
import styled from 'styled-components'

const Profile = styled.section`
  height: calc(100% - 128px);
  width: calc(100% - 128px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px;
  text-align: center;
`

const Name = styled.h1`
  font-size: 3rem;
`

const Title = styled.h2`
  font-size: 1rem;
`

const Contacts = styled.section`
  display: flex;
  justify-content: center;
  font-size: .875rem;
  > span {
    margin: .25rem;
  }
`

const List = styled.section`
  list-style: none;
  display: flex;
  justify-content: space-around;
  > span {
    width: 3rem;
  }
`

const user = {
  name: 'João Silva',
  title: 'Project Manager @ GoodCompany',
  company: ''
}

export default () => (
  <Profile>
    <div>
      <img src="/static/images/profile_m.png" alt="profile avatar"/>
    </div>
    <Name>João Silva</Name>
    <Title>Project Manager @ GoodCompany</Title>
    <Contacts>
      <span>email</span>
      <span>phone</span>
    </Contacts>
    <section>
      <h5>add to:</h5>
      <List>
        <li><span className="icon-profile"></span></li>
        <li><span className="icon-linkedin"></span></li>
        <li><span className="icon-github"></span></li>
      </List>
    </section>
  </Profile>
)
