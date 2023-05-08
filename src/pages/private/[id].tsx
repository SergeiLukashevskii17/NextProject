import Meta from '@/components/Meta'
import {premiumPostAPI} from '@/services/PremiunPostService'
import {Spin} from 'antd'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import styled from 'styled-components'

const PremiumPost = () => {
  const router = useRouter()
  const {id} = router.query

  const {useFetchPostByIdQuery} = premiumPostAPI
  const {data , error ,isLoading}= useFetchPostByIdQuery(
    {id: typeof id === 'string' ? id : ''},
    {skip: !id}
  )

  useEffect(()=>{
    error && alert(JSON.stringify(error))
    //@ts-ignore
    if((error?.status) === 404) router.push('/404')
  },[error])

  return (
    <Container>
      {isLoading ? <Spin />:(
        <>
          {data &&
            (<>
              <Meta title={data?.title} content={`information about user number ${id}`} />
              <h1>post#{id}: {data?.title}</h1>
              <Text>
                {data?.body}
              </Text>
            </>
            )}
        </>
      )}
    </Container>
  )
}

export default PremiumPost

const Text = styled.div`
  padding: 10px;
  margin-top:15px;
`
const Container = styled.div`
`