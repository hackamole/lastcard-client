import React from 'react'
import styled from 'styled-components'

const Profile = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default () => (
  <Profile>
    <div>Avatar</div>
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
