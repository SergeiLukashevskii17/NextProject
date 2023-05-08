import Meta from '@/components/Meta'
import {Modal} from '@/components/Modal'
import {PostCardList} from '@/components/postPageComponents/PostCardList'
import {TextField} from '@/controls/Input'
import {IPost} from '@/models/IPost'
import {premiumPostAPI} from '@/services/PremiunPostService'
import {useAppSelector} from '@/store.ts/hooks'
import {privatePostsValidation} from '@/validation/private/privatePostsValidation'
import {Spin} from 'antd'
import {useFormik} from 'formik'
import {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'

export const Private = () => {

  const {useFetchAllPostsQuery , useCreatePostMutation} = premiumPostAPI
  const {data: posts, error , isLoading} = useFetchAllPostsQuery()
  const [createPost , {error: createError , isLoading: isCreateLoading}] = useCreatePostMutation()
  const {data: user , error: userError} = useAppSelector(state => state.userReducer)

  const [isModalOpen , setIsModalOpen] = useState(false)
  const onCloseModal = useCallback(() => setIsModalOpen(false),[])
  const onOpenModal = useCallback(()=> setIsModalOpen(true),[])
  const onDismiss = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target)
      onCloseModal()
  },[])

  useEffect(()=>{
    if(error) alert(JSON.stringify(error))
    if(createError) alert(JSON.stringify(createError))
    if(userError) alert(JSON.stringify(userError))
  },[error ,createError,userError])

  const {values, errors , handleBlur , handleChange ,handleSubmit , touched} = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    validationSchema: privatePostsValidation ,
    onSubmit: value=>{
      createPost({...value , userId: user?.uid} as IPost)
      onCloseModal()
    }
  })

  return(
    <Container>
      {isModalOpen &&
      <Modal onCloseModal={onCloseModal} onDismiss={onDismiss}>
        <Form onSubmit={handleSubmit}>
          <TextField
            name='title'
            value={values.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='add title'
            error={errors.title}
            isTouched={touched.title}
          />
          <TextField
            name='body'
            value={values.body}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='add text'
            error={errors.body}
            isTouched={touched.body}
          />
          <Button>
            Create
          </Button>
        </Form>
      </Modal>}
      <Meta title='premium posts' content='premium posts for logged in users' />
      <Title>Premium posts (for logged in users) </Title>
      <h2>Create your own post</h2>
      <Button onClick={onOpenModal}>Create</Button>
      <PostsContainer>
        {(isLoading || isCreateLoading) ?
          <Spin /> :
          posts && <PostCardList items={posts} isPrem />
        }
      </PostsContainer>
    </Container>
  )}

export default Private

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  >div{
    width: 100%;
  }
`

const PostsContainer = styled.div`
  padding:20px 0px;
  width:100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  height:50px;
  padding: 0 20px;
  font-size: 20px;
  margin:15px 0px;
  background: green;
  color:white;
  cursor: pointer;
  :hover{
    color:blue;
  }
`

const Title = styled.h1`
margin-bottom:20px
`