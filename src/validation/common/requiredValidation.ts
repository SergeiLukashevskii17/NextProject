import * as yup from 'yup'

export const requiredValidation = yup
  .string()
  .required('required')

