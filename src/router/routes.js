const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LoginPage.vue') },
      {
        name: 'forgot-password',
        path: '/ForgotPassword',
        component: () => import('src/pages/ForgotPassword.vue'),
      },
      {
        name: 'Warning-Desktop',
        path: '/warning',
        component: () => import('src/pages/DesktopWarning.vue'),
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
