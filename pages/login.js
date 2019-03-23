import React from 'react'
import styled from 'styled-components'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'
import Cookies from 'universal-cookie';

import Page from '../layouts/main'
const cookies = new Cookies();
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
  p.contacts {
    width: 90%;
    margin: 4rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: .875rem;
    font-weight: 400;
    @media (min-width: 475px) {
      width: 45%;
    }
  
    > span {
      margin: .25rem;
    }
    input.primary,
    input.secundary {
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
  }  
  input {
    line-height: 2rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 0.75rem;
    margin-bottom: 2rem;
  }
`

class LoginForm extends React.Component {
    constructor() {
    super();
    this.state = {
        firstName: '',
    };
}

handleChange = evt => {
// This triggers everytime the input is changed
    this.setState({
        [evt.target.name]: evt.target.value,
    });
};

handleSubmit = evt => {
  evt.preventDefault();
  //making a post request with the fetch API
  // eslint-disable-next-line no-undef
    const cardRes = fetch('http://localhost:8000/login',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
          username:this.state.username,
          password:this.state.password,
      })
    })
    .then(response => response.json())
    .then(data => cookies.set('last-card-auth', data.token))  
    .catch(error => console.log(error))
  }

render(){
  return(
    <form onSubmit={this.handleSubmit} >
        <input 
            name="username" 
            type="text" 
            id="username" 
            placeholder="username"
            value={this.state.username} 
            onChange={this.handleChange}>
        </input>
        <input 
            name="password" 
            type="password" 
            id="password" 
            placeholder="password"
            value={this.state.password} 
            onChange={this.handleChange}>
        </input>
        <input type="submit" className="primary" />
    </form>
    );
  }
}

export default ({user}) => (
  <Page showNav showLogo>
    <Login>
      <div>
        <img src="/static/images/profile_m.png" alt="profile avatar"/>
      </div>
      <h1 className="name">Login</h1>
      <p className="contacts">
        <LoginForm />
      </p>
    </Login>
  </Page>
)
