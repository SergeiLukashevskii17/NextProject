import {ReactNode} from 'react'
import Header from './Header'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <ChildWrapper>{children}</ChildWrapper>
    </>
  )
}

export default Layout

const ChildWrapper = styled.div`
  padding: 70px;
  padding-top:120px;
`
