import {IPost} from '@/models/IPost'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

type Props = {
  userId?:number
}

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: build => ({
    fetchAllPosts: build.query<IPost[], Props>({
      query: ({userId}) => ({
        url: '/posts',
        params: {
          userId: userId,
        },
      }),
    }),
  }),
})

