import Meta from '@/components/Meta'
import {IPost} from '@/models/IPost'
import {getPostById} from '@/services/axiosReqests/getPostById'
import {getPosts} from '@/services/axiosReqests/getPosts'
import {GetStaticProps , GetStaticPaths} from 'next'
import React from 'react'
import styled from 'styled-components'

export const getStaticPaths:GetStaticPaths = async()=>{
  const {data: posts} = await getPosts()
  const paths = posts.map(e=>({params: {id: String(e.id)}}))

  return {
    paths ,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const revalidate = 60

  try {
    const {params} = context
    const id = Array.isArray(params?.id) ? (params?.id[0] || '0') : (params?.id || '0')
    const {data: post} = await getPostById({id})

    if (!post)
      return {
        notFound: true,
        revalidate
      }

    return {
      props: {post},
      revalidate
    }
  }
  catch {
    return {
      notFound: true,
      revalidate
    }
  }
}

type Props = {
  post:IPost
}

const Post = ({post}: Props) => {
  const {body , id ,title} = post

  return (
    <Container>
      <Meta title={title} content={`information about user number ${id}`} />
      <h1>post#{id}: {title}</h1>
      <Text>
        {body}
      </Text>
    </Container>
  )
}

export default Post

const Text = styled.div`
  padding: 10px;
  margin-top:15px;
`
const Container = styled.div`
`
