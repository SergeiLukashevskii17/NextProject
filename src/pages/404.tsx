import Meta from '@/components/Meta'
import {pageFullHeight} from '@/components/consts'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

const notFound = () => {
  const [seconds, setSeconds] = useState(5)
  const router = useRouter()
  const replace = router.replace

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    !seconds && replace('/')
    return () => clearTimeout(timeoutId)
  }, [seconds, replace])

  return (
    <Container>
      <Meta title='not found' content='this is page is not found ' />
      <h1> this is page is not exist</h1>
      <h2>you will be redirected to main page in {seconds} seconds</h2>
    </Container>
  )
}

export default notFound

const Container = styled.div`
  height: ${pageFullHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
