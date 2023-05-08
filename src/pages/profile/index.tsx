import {useAppSelector} from '@/store.ts/hooks'
import styled from 'styled-components'
import Meta from '@/components/Meta'
import {Spin} from 'antd'
import {useEffect} from 'react'

const Profile = () => {

  const {data: user , error, isLoading} = useAppSelector((state) => state.userReducer)

  useEffect(()=>{
    if(error) alert(JSON.stringify(error))
  },[error ])

  return (
    <Container>
      <Meta title='my profile' content='my profile information' />
      <h1>Profile</h1>
      {isLoading ? <Spin /> :
        <List>
          <div>
            <span> mail:</span>  {user?.email}
          </div>
          <div>
            <span> uid:</span>  {user?.uid}
          </div>
        </List>}
    </Container>
  )
}

export default Profile

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap:15px;
  margin-top:10px
`

const Container = styled.div`
  max-width: 100%;
  overflow: hidden;

  span{
   color:blue;
   font-size: 18px;
   font-weight: 600;
  }
`