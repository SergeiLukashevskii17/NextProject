import {useEffect} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {userSlice} from '@/store.ts/reducers/UserSlice'
import {useAppDispatch} from '@/store.ts/hooks'

export const useAuth = () => {
  const {setUserData, setUserError, setIsUserLoading} = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsUserLoading(true))
    try {
      const auth = getAuth()
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {uid: user.uid, email: user.email}
          dispatch(setUserData(userData))
          dispatch(setIsUserLoading(false))
        } else {
          dispatch(setUserData(null))
          dispatch(setIsUserLoading(false))
        }
      })
      return () => unsubscribe()
    } catch (err) {
      err && setUserError(JSON.stringify(err))
      dispatch(setIsUserLoading(false))
    }
  }, [])
}