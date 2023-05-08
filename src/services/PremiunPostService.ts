import {IPost} from '@/models/IPost'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

type getByIdProps = {
  id:string
}

export const premiumPostAPI = createApi({
  reducerPath: 'premiumPostAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    fetchAllPosts: build.query<IPost[] , void>({
      query: () => ({
        url: '/posts',
      }),
      providesTags: result => ['Post']
    }),
    fetchPostById: build.query<IPost , getByIdProps>({
      query: ({id}) => ({
        url: `/posts/${id}`,
      }),
      providesTags: result => ['Post']
    }),
    createPost: build.mutation<IPost , IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post']
    })
  }),
})

