// import Guard from './guard'
const routes = [
  {
    path: '/',
    component: () => import('layouts/Header.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/meet_up',
    component: () => import('layouts/Header'),
    children: [
      {
        path: '',
        component: () => import('pages/meetup/Meetups.vue')
      }
    ]
  },
  {
    path: '/create',
    component: () => import('layouts/Header'),
    children: [
      {
        path: '',
        component: () => import('pages/meetup/Createmeetup.vue')
        // beforeEnter: Guard
      }
    ]
  },
  {
    path: '/meet_up/:id',
    component: () => import('layouts/Header'),
    children: [
      {
        path: '/meet_up/:id',
        props: true,
        component: () => import('pages/meetup/Meetup.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Header.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/auth/Login.vue')
      },
      {
        path: '/register',
        component: () => import('pages/auth/Register.vue')
      }
    ]
  }
  // {
  //   path: '/user/register',
  //   component: () => import('layouts/Header'),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('pages/auth/Register.vue')
  //     }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
