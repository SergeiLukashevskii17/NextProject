import * as yup from 'yup'
import {emailValidation} from '../common/emailValidation'
import {requiredValidation} from '../common/requiredValidation'

export const privatePostsValidation = yup.object({
  title: requiredValidation,
  body: requiredValidation,
})

