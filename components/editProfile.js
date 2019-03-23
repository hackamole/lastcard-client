import React from 'react'
import styled from 'styled-components'

const EditProfileWrapper = styled.section`
  //position: fixed;
  z-index: 1;
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  
  div.edit-panel {
    position: fixed;
    width: 32px;
    height: 32px;
    padding: 0;
    right: 48px;
    top: 40px;
    opacity: 0;
    border-radius: 50%;
    padding-top: 10rem;
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &.isExpanded {
      height: 100%;
      width: 100%;
      right: 0;
      top: 0;
      background: linear-gradient(60.15deg, #851299 0%, #7471FA 100%);
      opacity: 1;
      border-radius: 0;
    }
    
    > div {
      width: calc(100% - 4rem);
      display: flex;
      flex-direction: column;
      padding: 10rem 2rem 2rem;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      &.isExpanded {
        opacity: 1;
        visibility: visible;
        transition: 250ms all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      
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
        margin-bottom: 4rem;
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
            color: #787878;
          }
        }
      }
      
      div.actions {
        position: fixed;
        bottom: 2rem;
        width: calc(100% - 4rem);
        display: flex;
        justify-content: space-between;
        opacity: 0;
        visibility: hidden;
        &.hasChanges {
          opacity: 1;
          visibility: visible;
          transition: all 100ms ease-in;
        }
        button.primary,
        button.secundary {
          width: 45%;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #787878;
          color: white;
          font-size: .875rem;
          margin-bottom: 1rem;
          span {
            margin-left: .4rem;
          }
        }
        button.secundary {
          border: 1px solid #787878;
          background-color: #E8E8E8;
          color: #787878;
        }
      }
    }
    
    button.close {
      z-index: 1;
      position: fixed;
      top: 2.25rem;
      right: 2.25rem;
      margin: 0;
      padding: 0;
      outline: none;
      opacity: 0;
      display: block;
      visibility: hidden;
      transition: 500ms all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
      &.isExpanded {
        opacity: 1;
        visibility: visible;
      }
      span {
        font-size: 1.5rem;
        color: white;
      }
    }
  }
  
  button {
    border: none;
    background-color: transparent;
  }
  
  button.open {
    z-index: 1;
    position: fixed;
    top: 1.5rem;
    left: calc(100% - 4rem);
    margin: 0;
    padding: 0;
    outline: none;
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &.isExpanded {
      top: 10rem;
      left: 2rem;
      img {
        width: 6rem;
      }
    }
    img {
      width: 2rem;
      transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
    hasChanges: false,
    isExpanded: false,
    linkedin: '',
    github: '',
  }

  onChange = (e, name) => {
    this.setState({[name]: e.currentTarget.value, hasChanges: true})
  }

  togglePanel = () => {
    this.setState(prevState => ({isExpanded: !prevState.isExpanded}))
  }

  reset = () => {
    const { linkedin, github } = this.props.user.links;
    this.setState({linkedin: linkedin, github: github, hasChanges: false})
  }

  submit = () => {
    console.log(this.state);
    //submit();
  }

  render () {
    const { hasChanges, isExpanded, linkedin, github } = this.state;
    const { user } = this.props;
    return (
      <EditProfileWrapper>
        <button
          onClick={this.togglePanel}
          className={isExpanded ? 'open isExpanded' : 'open'}
        >
          <img src="/static/images/profile_f.png" alt="profile avatar"/>
        </button>

        <div className={isExpanded ? 'edit-panel isExpanded' : 'edit-panel'}>
          <button
            className={isExpanded ? 'close isExpanded' : 'close'}
            onClick={this.togglePanel}
          >
            <span className="icon-cross" />
          </button>
          <div className={isExpanded ? 'isExpanded' : ''}>
            <h1 className="name">{user && user.first_name} {user && user.last_name}</h1>
            {/*<h2 className="title">{user && user.title} @ {user && user.company}</h2>*/}
            <p className="contacts">
              <span>{user && user.email}</span>
              <span>{user && user.mobile}</span>
            </p>
            <section>
              <ul>
                <li><div>
                  <span className="icon-linkedin"></span>
                  <input
                    onChange={(e) => this.onChange(e, 'linkedin')}
                    type="text"
                    name="linkedin"
                    value={linkedin} />
                </div></li>
                <li><div>
                  <span className="icon-github"></span>
                  <input
                    onChange={(e) => this.onChange(e, 'github')}
                    type="text"
                    name="github"
                    value={github} />
                </div></li>
              </ul>

              <div className={hasChanges ? 'actions hasChanges' : 'actions'}>
                <button className="secundary" onClick={this.reset}>
                  discard
                </button>
                <button className="primary" onClick={this.submit}>
                  save
                </button>
              </div>

            </section>
          </div>
        </div>
      </EditProfileWrapper>
    )
  }
}

