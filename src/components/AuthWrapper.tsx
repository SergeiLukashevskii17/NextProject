import {useAuth} from '@/hooks/useAuth'
import {ReactNode} from 'react'

type Props = {
    children: ReactNode;
}

export const AuthWrapper = ({children}:Props)=>{
  useAuth()
  return(<>{children}</>)
}