import React from 'react'
import styled from 'styled-components'

const Login = styled.section`
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

const Input = styled.input`
  line-height: 3rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.75rem;
  margin-bottom: 2rem;
`

export default ({user}) => (
  <Login>
    <div>
      <img src="/static/images/profile_m.png" alt="profile avatar"/>
    </div>
    <h1 className="name">Login</h1>
    <p className="contacts">
      <Input placeholder="login" />
      <Input placeholder="password" />
    </p>
  </Login>
)
