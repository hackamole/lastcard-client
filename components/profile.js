import React from 'react'
import styled from 'styled-components'

const Profile = styled.section`
  height: calc(100% - 128px);
  width: calc(100% - 128px);
  display: flex;
  flex-direction: column;
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

const Contacts2 = styled.section`
display: flex;
justify-content: center;
font-size: .875rem;
> span {
  margin: .25rem;
}
`

export default () => (
  <Profile>
    <div>
      <img src="/static/profile_m.png" alt="profile avatar"/>
    </div>
    <Name>João Silva</Name>
    <Title>Project Manager @ GoodCompany</Title>
    <Contacts>
      <span>email</span>
      <span>phone</span>
    </Contacts>
    <section>
      <h5>add to:</h5>
      <ul>
        <li>v-card</li>
        <li>linkedin</li>
        <li>github</li>
      </ul>
    </section>
  </Profile>
)
