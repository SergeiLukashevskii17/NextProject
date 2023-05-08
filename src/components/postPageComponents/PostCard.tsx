import {memo} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/dist/client/router'
import {IPost} from '@/models/IPost'

interface Props extends IPost {
 isPrem:boolean;
}

export const PostCard = memo(({body, id, title , userId, isPrem}: Props) => {
  const router = useRouter()
  const navigate = router.push
  return (
    <Container data-testid='container' onClick={() => navigate(`/${isPrem ? 'private' :'posts'}/${id}`)}>
      <h1 data-testid='title'>{title}</h1>
      <SubTitle data-testid='subtitle'>by user #{userId}</SubTitle>
      <div data-testid='bodyWrapper'>
        {body}
      </div>
    </Container>
  )
})

PostCard.displayName = 'PostCard'

const SubTitle = styled.h2`
  color:green;
`

const Container = styled.div`
width: 100%;
padding:20px;
background: #F0E68C;
color:#DDA0DD;
flex-direction: column;
display: flex;
gap: 5px;
font-size: 18px;
cursor: pointer;

:hover{
    transition: all 0.5s;
    transform: scale(1.02)	 
}
`