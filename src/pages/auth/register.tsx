import {TextField} from '@/controls/Input'
import {loginValidation} from '@/validation/auth/loginValidation'
import {useFormik} from 'formik'
import styled from 'styled-components'
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import Meta from '@/components/Meta'
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'

const Register = () => {
  const router = useRouter()

  const {values , errors , handleSubmit , handleBlur , touched , handleChange} = useFormik({
    initialValues: {
      email: '',
      pass: ''
    },
    validationSchema: loginValidation,
    onSubmit: values=>{
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, values.email , values.pass)
        .then(userResponce => {
          const {uid} = userResponce.user
          Cookies.set('token', uid)
          router.push('/')
        })
        .catch(err=>alert(err))
    }
  })

  return (
    <>
      <Meta title='register' content='register page' />
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <TextField
          name='email'
          onBlur={handleBlur}
          isTouched={touched.email}
          onChange={handleChange}
          placeholder='email'
          value={values.email}
          error={errors.email}
        />
        <TextField
          name='pass'
          onBlur={handleBlur}
          isTouched={touched.pass}
          onChange={handleChange}
          placeholder='pass'
          value={values.pass}
          error={errors.pass}
        />
        <Button type='submit'>submit</Button>
      </Form>
    </>
  )
}

export default Register

const Button = styled.button`
font-size: 16px;
height:35px;
width:150px;
border-radius: 6px;
color:blue;
background-color: aliceblue;
cursor: pointer;
`

const Form = styled.form`
margin-top:20px;
display:flex;
flex-direction: column;
align-items: center;
width:100%;

> div:has(input){
    width:500px;
}
`
