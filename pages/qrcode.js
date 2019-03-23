import React from 'react'
import styled from 'styled-components'

const QrcodeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Qrcode extends React.Component {
  render () {
    return (
      <QrcodeWrapper>
        qrcode
      </QrcodeWrapper>
    )
  }
}
