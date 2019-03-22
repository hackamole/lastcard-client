import React from 'react'
import styled from 'styled-components'
import Router from 'next/router';

const Login = styled.section`
button.primary,
  button.secundary {
    width: 45%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6A38BB;
    color: white;
    font-size: .875rem;
    margin-bottom: 1rem;
    span {
      margin-left: .4rem;
    }
  }
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
  input {
    line-height: 2rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 0.75rem;
    margin-bottom: 2rem;
  }
`


export default ({user}) => (
  <Login>
    <div>
      <img src="/static/images/profile_m.png" alt="profile avatar"/>
    </div>
    <h1 className="name">Login</h1>
    <p className="contacts">
      <input placeholder="login" />
      <input placeholder="password" />
      <button className="primary" onClick={() => {Router.push('/profile')}}>
        Login
      </button>
    </p>
  </Login>
)
