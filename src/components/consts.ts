export type NavElems = {title:string , link:string}[]

export const navLeftElems:NavElems = [
  {title: 'main page', link: '/'},
  {title: 'posts', link: '/posts'},
  {title: 'premium posts(private)', link: '/private'},
]

export const guestNavRightElems:NavElems = [
  {title: 'login', link: '/auth/login'},
  {title: 'register', link: '/auth/register'}
]

export const userNavRightElems:NavElems = [
  {title: 'logout', link: '/auth/logout'},
  {title: 'profile', link: '/profile'}
]

export const meta_title_prefix = 'drv.ru | '

export const pageFullHeight = 'calc(100vh - 190px)'

export const publicRoutes = ['/auth/login' , '/auth/register', '/' , '/posts']
