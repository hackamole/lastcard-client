import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Wrapper>
    <Link href='/card' as='/card'><a>card page</a></Link>
    <Link href='/profile' as='/profile'><a>profile page</a></Link>
  </Wrapper>
)
