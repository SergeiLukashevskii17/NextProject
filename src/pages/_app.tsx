import Layout from '@/components/Layout'
import {setupStore} from '@/store.ts/store'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import '@/components/firebase/firebase'
import withAuth from '@/components/privateRoute/withAuth'
import {AuthWrapper} from '@/components/AuthWrapper'
import ErrorBoundary from '@/components/ErrorBoundary'

const store = setupStore()

export default function App({Component, pageProps}: AppProps) {

  const ProtectedComponent= withAuth(Component)

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthWrapper>
          <Layout>
            <ProtectedComponent {...pageProps} />
          </Layout>
        </AuthWrapper>
      </Provider>
    </ErrorBoundary>
  )
}
