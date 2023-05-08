import {render , screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {RouterContext} from 'next/dist/shared/lib/router-context'
import {createMockRouter} from '../utils/createMockRouter'
import {PostCardList} from '@/components/postPageComponents/PostCardList'

const body = 'qwe dasjio dsaoi'
const id = '1'
const userId = '1'
const title = 'meow'
const isPrem = true

const items = [
  {
    body,
    id,
    userId,
    title
  }
]

describe('Post card list',()=>{
  test('should render post card list', ()=>{

    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <PostCardList items={items} isPrem={isPrem} />
      </RouterContext.Provider>
    )

    const listContainer = screen.getByTestId('listContainer')
    const container = screen.getByTestId('container')
    const cardTitle = screen.getByTestId('title')
    const subtitle = screen.getByTestId('subtitle')
    const bodyWrapper = screen.getByTestId('bodyWrapper')

    expect(listContainer).toBeInTheDocument()
    expect(container).toBeInTheDocument
    expect(cardTitle).toContainHTML(title)
    expect(subtitle).toContainHTML(`by user #${userId}`)
    expect(bodyWrapper).toBeInTheDocument

  })

  test('shoud render noData container instead of cardList',()=>{
    render(<PostCardList items={[]} isPrem={isPrem} />)
    const noData = screen.getByTestId('noData')
    expect(noData).toContainHTML('no information with this filter')
  })
})
