import * as yup from 'yup'
import {emailReg} from './regs/emailReg'

export const emailValidation = yup
  .string()
  .email('invalid')
  .matches(emailReg, 'invalid')
  .required('required')

