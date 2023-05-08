
import {IPost} from '@/models/IPost'
import axios from 'axios'

export const getPosts = async()=>{
  const data = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  return data
}