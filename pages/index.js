import React from 'react'
import Link from 'next/link'
// import styled from 'styled-components'

export default () => (
  <div>
    <Link href='/card' as='/card'><a>card page</a></Link>
    <Link href='/profile' as='/profile'><a>profile page</a></Link>
  </div>
)
