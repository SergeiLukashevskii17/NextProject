import {memo} from 'react'
import styled from 'styled-components'

type Props = {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string | number;
  isTouched?: boolean;
  error?: string;
  label?: string;
  type?: string;
};

export const TextField = memo(({
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  isTouched,
  error,
  type,
  ...inputProps
}: Props) => {
  return (
    <InputWrapper>
      <InputComponent
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type || 'text'}
        value={value}
        error={Boolean(error && isTouched)}
        onBlur={onBlur}
        {...inputProps}
      />
      {!!error && isTouched && <ErrorMess>{error}</ErrorMess>}
    </InputWrapper>
  )
})

TextField.displayName= 'TextField'

const ErrorMess = styled.p`
  color: #ff0000;
  font-weight: 400;
  font-size: 13px;
  line-height: 26px;
  margin-bottom: -26px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom:25px;
`

const InputComponent = styled.input<{
  error: boolean;
  type?: string;
}>`
  color: #0563e6;
  font-size: 15px;
  ::placeholder {
    color: #808eac;
    opacity: 1;
    ${props => props.error && 'color: red; '}
  }
  :hover {
    border: 2px solid #0563e6;
    color: #808eac;
    ${props => props.error && 'border: 2px solid red;'};
  }
  width: 100%;
  height: 45px;
  border: 2px solid #d0d7e5;
  border-radius: 8px;
  padding-left: 16px;

  :focus-visible {
    border-color: #0563e6;
    outline: none;
    color: #0563e6;
    ${props => props.error && 'color: red; border: 2px solid red;'}
  }

  ${props => props.error && 'color: red; border: 2px solid red;'}
  transition: all 0.5s ease-out;
`
