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
  
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    a {
      color: white;
      text-decoration: none;
      span {
        font-size: 3rem;
      }
    }
  }
`

export default ({user}) => (
  <Profile>
    <div>
      <img src="/static/images/profile_m.png" alt="profile avatar"/>
    </div>
    <h1 className="name">{user.first_name} {user.last_name}</h1>
    <h2 className="title">{user.title || 'UFO'} @ {user.company || 'Rainbows factory'}</h2>
    <p className="contacts">
      <span>{user.email}</span>
      <span>{user.mobile}</span>
    </p>
    <section>
      <ul>
        <li><a href={user.social_profile}><span className="icon-linkedin"></span></a></li>
        <li><a href={user.social_profile}><span className="icon-github"></span></a></li>
        <li><a href={user.social_profile}><span className="icon-profile"></span></a></li>
      </ul>
    </section>
  </Profile>
)
