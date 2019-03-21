import React from 'react'
import styled from 'styled-components'

const Profile = styled.section`
  height: calc(100% - 8rem);
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  
  h1.name {
    margin-bottom: .25rem;
  }
  
  h2.title {
    margin-bottom: 1.5rem;
  }
  
  > p.contacts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: .875rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  
    > span {
      margin: .25rem;
    }
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  a {
    color: white;
    text-decoration: none;
    span {
      font-size: 3rem;
    }
  }
`

export default ({user}) => (
  <Profile>
    <div>
      <img src="/static/images/profile_m.png" alt="profile avatar"/>
    </div>
    <h1 className="name">{user.name}</h1>
    <h2 className="title">{user.title} @ {user.company}</h2>
    <p className="contacts">
      <span>{user.contacts.email}</span>
      <span>{user.contacts.phone}</span>
    </p>
    <section>
      <h5>add to:</h5>
      <List>
        <li>
          <a href={user.links.linkedin}>
            <span className="icon-linkedin"></span>
          </a>
        </li>
        <li>
          <a href={user.links.github}>
            <span className="icon-github"></span>
          </a>
        </li>
        <li>
          <a href={user.links.vcard}>
            <span className="icon-profile"></span>
          </a>
        </li>
      </List>
    </section>
  </Profile>
)
