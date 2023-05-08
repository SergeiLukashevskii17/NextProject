import {memo} from 'react'
import styled from 'styled-components'
import {IPost} from '@/models/IPost'
import {PostCard} from './PostCard'

type Props = {
  items: IPost[] ;
  isPrem?: boolean
};

export const PostCardList = memo(({items , isPrem}: Props) => {
  return (
    <Container data-testid='listContainer'>
      {items.length ? items.map(e=> (
        <PostCard key={e.id} body={e.body} id={e.id} title={e.title} userId={e.userId} isPrem={!!isPrem} />
      )) :<NoData data-testid='noData'>no information with this filter</NoData>}
    </Container>
  )
})

PostCardList.displayName = 'PostCard'

const NoData = styled.div`
  font-size: 22px;
  font-weight: 600;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
