import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Library from '../views/LibraryView.vue'
import UploadFile from '../components/UploadFile.vue'
import LoginSignUp from '../components/LoginSignUp.vue'
import LibraryContent from '../components/LibraryContent.vue'
import TunerView from '@/views/TunerView.vue'
import ContactView from '@/views/ContactView.vue'
import SheetMusic from '../components/SheetMusic.vue'
import SheetmusicView from '@/views/SheetmusicView.vue'
import LibraryView from '../views/LibraryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children:LoginSignUp,
    },
    {
      path: '/tuner',
      name: 'tuner',
      component: () => import('../views/TunerView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/library',
      name: 'library',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/LibraryView.vue')
      component: LibraryView
      // children: UploadFile,
    },
    {
      path: '/sheetmusic/:f',
      name: 'Notations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/LibraryView.vue')
    component:() => import('../views/SheetmusicView.vue')
      // props:true, 
      // children: UploadFile, LibraryContent
    },


  ]
})

export default router
