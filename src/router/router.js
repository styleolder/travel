import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import LoginRow from '@/pages/login/components/row'

export const routermap = [
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
    path: '/city',
    name: 'City',
    component: City
  }
]
export const routes = [
   {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home'),
    // component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login'),
    meta: {
      title: '登录页面',
      access: ['super_admin']
    },
    children: [
      {
        path: 'row',
        component: LoginRow
      }
    ]
  },
  {
    path: '*',
    name: 'errPage',
    component: () => import('@/pages/error_404')
  }
]
