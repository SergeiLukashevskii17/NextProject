import Meta from '@/components/Meta'
import {PostCardList} from '@/components/postPageComponents/PostCardList'
import {postAPI} from '@/services/PostService'
import {useState , useCallback , useEffect} from 'react'
import {GetStaticProps} from 'next'
import {getPosts} from '@/services/axiosReqests/getPosts'
import {IPost} from '@/models/IPost'
import {TextField} from '@/controls/Input'
import {useFormik} from 'formik'
import styled from 'styled-components'

export const getStaticProps: GetStaticProps = async()=>{
  const revalidate = 60

  try{
    const {data: postData} = await getPosts()

    if (!postData)
      return {
        notFound: true,
        revalidate
      }

    return {props: {
      postData
    }}
  }

  catch{
    return {
      notFound: true,
      revalidate
    }}
}

type Props = {
  postData: IPost[]
}

const Posts = ({postData}:Props) => {
  const [posts,setPosts] = useState(postData)
  const {useLazyFetchAllPostsQuery} = postAPI
  const [trigger , {data , error}] = useLazyFetchAllPostsQuery()

  useEffect(()=>{
    error && alert(JSON.stringify(error))
  },[error])

  const
    {handleBlur ,
      handleChange ,
      handleSubmit ,
      errors ,
      values ,
      touched
    } = useFormik({
      initialValues: {
        userId: 0,
      },
      onSubmit: values=>{
        if(values.userId) trigger({userId: values.userId}).then(data=> data?.data && setPosts(data.data))
      }
    })

  const handleRemoveFilter = useCallback(()=>{
    trigger({}).then(data=> data?.data && setPosts(data.data))
  },[])

  return (
    <>
      <Meta title='posts' content='page that contain all posts' />
      <h1>Posts</h1>
      <Form onSubmit={handleSubmit}>
        <TextField
          name='userId'
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='введите id пользователя'
          value={values.userId}
          error={errors.userId}
          isTouched={touched.userId}
          type='number'
        />
        <Button
          type='submit'
          disabled={values.userId < 1}>
              get post by user id
        </Button>
        <Button
          disabled={!data?.length}
          type='button'
          style={{marginTop: 0}}
          onClick={handleRemoveFilter}
        >
               remove filter
        </Button>
      </Form>
      <PostCardList items={posts} />
    </>
  )
}

export default Posts

const Form = styled.form`
display:flex;
flex-direction:column;
align-items: center;

>div>input{
  width:250px
}
`
const Button = styled.button`
height:35px;
background: #DDA0DD ;
color: #F0E68C;
margin: 25px 0px;
border-radius: 10px;
padding: 0 10px;
font-size: 16px;
cursor: pointer;
:hover:not(:disabled){
  color:blue;
}
:disabled{
  opacity: 0.5;
}
`
