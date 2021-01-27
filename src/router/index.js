const constantRouterMap = [

  {
      path: '/user/new',
      redirect: '/user/new/main',
      meta: {
          type: "user",
          icon: 'el-icon-star-off',
          title: '最新动态'
      },
      children: [
          {
              path: 'main',
              component: './src/views/new/Main.vue',
              meta: { title: '最新动态' }
          }
      ]
  },
  {
      path: '/user/social',
      redirect: '/user/social/main',
      meta: {
          type: "user",
          icon: 'el-icon-mobile-phone',
          title: '社交圈'
      },
      children: [
          {
              path: 'main',
              component: './src/views/social/Main.vue',
              meta: { title: '社交圈' }
          },
          {
              path: 'details/:name',
              component: './src/views/social/Details.vue',
              meta: { title: '用户资料' }
          }
      ]
  },
  {
      path: '/user/blog',
      redirect: '/user/blog/main',
      meta: {
          type: "user",
          icon: 'el-icon-edit-outline',
          title: '博客列表'
      },
      children: [
          {
              path: 'main',
              component: './src/views/blog/Main.vue',
              meta: { title: '博客列表' }
          },
          {
              path: 'add',
              component: './src/views/blog/Add.vue',
              meta: { title: '发表博客' }
          },
          // {
          //     path: 'edit/:id',
          //     component: './src/views/blog/Edit.vue',
          //     meta: { title: '编辑博客' }
          // },
          // {
          //     path: 'details/:id',
          //     component: './src/views/blog/Details.vue',
          //     meta: { title: '博客详情' }
          // }
      ]
  },
  {
      path: '/user/project',
      redirect: '/user/project/main',
      meta: {
          type: "user",
          icon: 'el-icon-service',
          title: '开源项目'
      },
      children: [
          {
              path: 'main',
              component: './src/views/project/Main.vue',
              meta: { title: '项目列表' }
          },
          {
              path: 'details/:name',
              component: './src/views/project/Details.vue',
              meta: { title: '项目详情' }
          }
      ]
  },
  {
      path: '/user/helper',
      redirect: '/user/helper/main',
      meta: {
          type: "user",
          icon: 'el-icon-printer',
          title: '使用帮助',
          mini: true
      },
      children: [
          {
              path: 'main',
              component: './src/views/helper/Main.vue',
              meta: { title: '使用帮助' }
          }
      ]
  },
  {
      path: '/user/readme',
      redirect: '/user/readme/main',
      meta: {
          type: "user",
          icon: 'el-icon-document',
          title: 'README.md'
      },
      children: [
          {
              path: 'main',
              component: './src/views/readme/Main.vue',
              meta: { title: 'README.md' }
          }
      ]
  },
  {
      path: '/user/configure',
      redirect: '/user/configure/main',
      meta: {
          type: "user",
          icon: 'el-icon-setting',
          title: '系统配置',
          LoginRequired: true
      },
      children: [
          {
              path: 'main',
              component: './src/views/configure/Main.vue',
              meta: { title: '系统配置' }
          }
      ]
  },


  //mobile
  {
      path: '/mobile/user/blog',
      redirect: '/mobile/user/blog/main',
      meta: {
          type: "mobile",
          icon: 'edit',
          title: '博客'
      },
      children: [
          {
              path: 'main',
              component: './src/mobile_views/blog/Main.vue',
              meta: {
                  scrollTop: true
              }
          },
          // {
          //     path: 'details/:id',
          //     component: './src/mobile_views/blog/Details.vue',
          //     meta: {
          //         scrollTop: true
          //     }
          // }
      ]
  },
  {
      path: '/mobile/user/project',
      redirect: '/mobile/user/project/main',
      meta: {
          type: "mobile",
          icon: 'like-o',
          title: '项目'
      },
      children: [
          {
              path: 'main',
              component: './src/mobile_views/project/Main.vue',
              meta: {
                  scrollTop: true
              }
          },
          {
              path: 'details/:name',
              component: './src/mobile_views/project/Details.vue',
              meta: {
                  scrollTop: true
              }
          }
      ]
  },
  {
      path: '/mobile/user/self',
      redirect: '/mobile/user/self/main',
      meta: {
          type: "mobile",
          icon: 'contact',
          title: '个人'
      },
      children: [
          {
              path: 'main',
              component: './src/mobile_views/self/Main.vue',
              meta: {
                  scrollTop: true
              }
          }
      ]

  },
]

module.exports = constantRouterMap