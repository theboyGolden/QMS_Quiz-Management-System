import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/student/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/student/CourseList.vue')
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: () => import('@/views/student/QuizView.vue')
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    component: () => import('@/views/student/QuizList.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/student/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router