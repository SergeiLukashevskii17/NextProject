import {useRouter} from 'next/router'
import {ReactPropTypes, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {publicRoutes} from '../consts'
import {NextComponentType, NextPageContext} from 'next'

const withAuth = (WrappedComponent: NextComponentType<NextPageContext, any, any> ) => {
  const Wrapper = (props: ReactPropTypes) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const path = router.pathname
    const token = Cookies.get('token')

    useEffect(() => {
      if (token || publicRoutes.includes(path) )
        setIsAuthenticated(true)
      else
        router.replace('/auth/login')
    }, [token])

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }
  return Wrapper
}

export default withAuth