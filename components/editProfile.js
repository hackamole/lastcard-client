import React from 'react'
import styled from 'styled-components'

const EditProfileWrapper = styled.section`
  position: fixed;
  bottom: 0;
  height: 64px;
  width: 100%;
  background-color: #E8E8E8;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #797979;
  transition: height 500ms cubic-bezier(0.19, 1, 0.22, 1);
  
  &.isExpanded {
    height: 100%;
  }
  
  button.toggle {
    z-index: 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 64px;
    margin: 0;
    padding: 0;
    background-color: #E8E8E8;
    color: #797979;
    outline: none;
  }
  
  > div {
    width: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    
    h1.name {
      margin-bottom: .25rem;
      font-size: 2rem;
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
      flex-direction: column;
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 1rem;
      }
      div {
        width: 100%;
        display: flex;
        align-items: center;
        span {
          font-size: 1.4rem;
          margin-right: 1rem;
        }
        input {
          flex: 1;
          color: #797979;
        }
      }
    }
  }
`

export default class EditProfile extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch(api.cards)
    // const json = await res.json()
    // return { user: json.stargazers_count }
  }

  state = {
    isExpanded: true,
  }

  togglePanel = () => {
    this.setState(prevState => ({isExpanded: !prevState.isExpanded}))
  }

  render () {
    const { isExpanded } = this.state;
    const { user } = this.props;
    return (
      <EditProfileWrapper className={isExpanded ? 'isExpanded' : ''}>
        <button className="toggle" onClick={this.togglePanel}>
          {isExpanded ? 'your cards' : 'edit profile'}
        </button>

        <div>
          <div>
            <img src="/static/images/profile_f.png" alt="profile avatar"/>
          </div>
          <h1 className="name">{user.name}</h1>
          <h2 className="title">{user.title} @ {user.company}</h2>
          <p className="contacts">
            <span>{user.contacts.email}</span>
            <span>{user.contacts.phone}</span>
          </p>
          <section>
            <ul>
              <li><div>
                <span className="icon-linkedin"></span>
                <input type="text" name="linkedin" value={user.links.linkedin} />
              </div></li>
              <li><div>
                <span className="icon-github"></span>
                <input type="text" name="github" value={user.links.github} />
              </div></li>
              <li><div>
                <span className="icon-profile"></span>
                <input type="text" name="vcard" value={user.links.vcard} />
              </div></li>
            </ul>
          </section>
        </div>
      </EditProfileWrapper>
    )
  }
}

