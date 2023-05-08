import Meta from '@/components/Meta'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <Meta title='main page' content='darova.ru - lychsii site v internetah' />
      <h1 data-testid='title'>Main page info ...</h1>
      <SubTitle data-testid='subtitle'>create an account to read and create premium posts</SubTitle>
    </>
  )
}

export default Home

const SubTitle = styled.h2`
margin-top: 15px;
color:brown 
`
