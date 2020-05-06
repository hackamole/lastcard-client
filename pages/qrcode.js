import React from 'react'
import styled from 'styled-components'

const QrcodeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.article`
  width: calc(700px);
  height: calc(400px);
  background-color: white;
  margin-bottom: 3rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #787878;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  
  img {
    width: 50%;
  }
`

export default class Qrcode extends React.Component {
  render () {
    return (
      <QrcodeWrapper>
        <Card>
          <img src="http://lastcard.sytes.net/qrcodes/90695cbb-cf43-4fbc-bf12-74c8cec2b4ab.svg" alt=""/>
        </Card>
      </QrcodeWrapper>
    )
  }
}
