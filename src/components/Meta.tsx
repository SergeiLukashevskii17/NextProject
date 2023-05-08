import Head from 'next/head'
import {meta_title_prefix} from './consts'
import {memo} from 'react'

type Props = {
  title: string
  content: string
}

const Meta = memo(({title, content}: Props) => {
  return (
    <Head>
      <title>
        {meta_title_prefix}
        {title}
      </title>
      <meta name='description' content={content} />
    </Head>
  )
})

Meta.displayName = 'Meta'

export default Meta
