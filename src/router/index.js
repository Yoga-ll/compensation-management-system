import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: false
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: false
  },

  {
    path: '/',
    component: Layout,
    redirect: '/basic',
    name: 'Basic',
    meta: {
      title: '基础信息',
      icon: 'basic_information'
    },
    // children: [{
    //     path: 'basic',
    //     name: 'Basic',
    //     component: () => import('@/views/users_and_permissions/basic_information/index'),
    //     meta: {
    //       title: '基础信息',
    //       icon: 'basic_information'
    //     }
    //   },
    //   {
    //     path: 'role',
    //     name: 'Role',
    //     component: () => import('@/views/users_and_permissions/role_management/index'),
    //     meta: {
    //       title: '角色管理',
    //       icon: 'role_management'
    //     }
    //   }, {
    //     path: 'department',
    //     name: 'Department',
    //     component: () => import('@/views/users_and_permissions/department_permission/index'),
    //     meta: {
    //       title: '部门权限',
    //       icon: 'department_permission'
    //     }
    //   }
    // ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/basic',
    name: 'Permission',
    meta: {
      title: '用户权限',
      icon: 'users_and_permissions'
    },
    children: [{
        path: 'basic',
        name: 'Basic',
        component: () => import('@/views/users_and_permissions/basic_information/index'),
        meta: {
          title: '基础信息',
          icon: 'basic_information'
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/users_and_permissions/role_management/index'),
        meta: {
          title: '角色管理',
          icon: 'role_management'
        }
      }, {
        path: 'department',
        name: 'Department',
        component: () => import('@/views/users_and_permissions/department_permission/index'),
        meta: {
          title: '部门权限',
          icon: 'department_permission'
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/basic',
    name: 'Permission',
    meta: {
      title: '用户权限',
      icon: 'users_and_permissions'
    },
    children: [{
        path: 'basic',
        name: 'Basic',
        component: () => import('@/views/users_and_permissions/basic_information/index'),
        meta: {
          title: '基础信息',
          icon: 'basic_information'
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/users_and_permissions/role_management/index'),
        meta: {
          title: '角色管理',
          icon: 'role_management'
        }
      }, {
        path: 'department',
        name: 'Department',
        component: () => import('@/views/users_and_permissions/department_permission/index'),
        meta: {
          title: '部门权限',
          icon: 'department_permission'
        }
      }
    ]
  },
  //不存在路由跳转到主页
  {
    path: "*",
    redirect: "/"
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
