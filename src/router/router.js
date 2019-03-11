import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/login/Login'
import LoginRow from '@/pages/login/components/row'

export const routes = [
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录页面'
    },
    children: [
      {
        path: 'row',
        component: LoginRow
      }
    ]

  },
  {
    path: '/',
    name: 'Home',
    // component: () => import('@/pages/home/Home')
    component: Home,
    meta: {
      title: '首页'
    }
  }
]
