const routes = [
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('src/pages/LoginPage.vue') },
      {
        name: 'forgot-password',
        path: '/ForgotPassword',
        component: () => import('src/pages/ForgotPassword.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
