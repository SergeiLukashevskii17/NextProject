import Link from 'next/link'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {NavElems, guestNavRightElems, navLeftElems, userNavRightElems} from './consts'
import {useRouter} from 'next/router'
import Cookies from 'js-cookie'

const Header = () => {
  const router = useRouter()
  const [navRightElems , setNavRightElems] = useState<NavElems>()
  const token = Cookies.get('token')

  useEffect(()=>{
    if(token) setNavRightElems(userNavRightElems)
    else setNavRightElems(guestNavRightElems)
  },[token])

  return (
    <Container>
      <Section>
        {navLeftElems.map((e) => (
          <NavElemWrapper key={e.link}>
            <Link href={e.link}>{e.title}</Link>
          </NavElemWrapper>
        ))}
      </Section>
      {navRightElems && <Section>
        {navRightElems.map((e) => (
          <NavElemWrapper key={e.link}>
            <Link
              href={e.link}
              onClick={event=>{
                if(e.link === '/auth/logout'){
                  Cookies.remove('token')
                  event.preventDefault()
                  router.push('/')
                }
              }}
            >
              {e.title}
            </Link>
          </NavElemWrapper>
        ))}
      </Section>}
    </Container>
  )
}

export default Header

const NavElemWrapper = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #ff8c00;
`

const Container = styled.div`
  position: fixed;
  width: 100%;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #f0fff0;
  gap: 30px;
`

const Section = styled.div`
  display: flex;
  gap:20px;
`
