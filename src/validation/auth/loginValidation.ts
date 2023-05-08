import * as yup from 'yup'
import {emailValidation} from '../common/emailValidation'
import {requiredValidation} from '../common/requiredValidation'

export const loginValidation = yup.object({
  email: emailValidation,
  pass: requiredValidation,
})

