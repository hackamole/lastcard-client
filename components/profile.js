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

export default () => (
  <Profile>
    <div>
      <img src="" alt=""/>
    </div>
    <h1>Name</h1>
    <h3>title</h3>
    <p>
      <span>email</span>
      <span>phone</span>
    </p>
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
