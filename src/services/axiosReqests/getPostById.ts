
import {IPost} from '@/models/IPost'
import axios from 'axios'

type Props ={
    id:string
}

export const getPostById = async({id}:Props)=>{
  const data = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return data
}