import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestOneView from '../views/TestOneView.vue'
import TestTwoView from '../views/TestTwoView.vue'
import TestThreeView from '../views/TestThreeView.vue'
import TestFourView from '../views/TestFourView.vue'
import TestFiveView from '../views/TestFiveView.vue'
import TestSixView from '../views/TestSixView.vue'
import TestSevenView from '../views/testSevenView.vue'
import TestEightView from '../views/TestEightView.vue'
import TestNineView from '../views/TestNineView.vue'
import TestTenView from '../views/TestTenView.vue'
import TestElevenView from '../views/TestElevenView.vue'
import LoadView from '../views/LoadView.vue'
import ResultsView from '../views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testOne',
      name: 'test',
      component: TestOneView
    },
    {
      path: '/testTwo',
      name: 'testTwo',
      component: TestTwoView
    },
    {
      path: '/testThree',
      name: 'testThree',
      component: TestThreeView
    }
    ,
    {
      path: '/testFour',
      name: 'testFour',
      component: TestFourView
    },
    {
      path: '/testFive',
      name: 'testFive',
      component: TestFiveView
    }
    ,
    {
      path: '/testSix',
      name: 'testSix',
      component: TestSixView
    }
    ,
    {
      path: '/testSeven',
      name: 'testSeven',
      component: TestSevenView
    }
    ,
    {
      path: '/testEight',
      name: 'testEight',
      component: TestEightView
    }
    ,
    {
      path: '/testNine',
      name: 'testNine',
      component: TestNineView
    }
    ,
    {
      path: '/testTen',
      name: 'testTen',
      component: TestTenView
    }
    ,
    {
      path: '/testEleven',
      name: 'testEleven',
      component: TestElevenView
    },
    {
      path: '/testLoad',
      name: 'testLoad',
      component: LoadView
    },
    {
      path: '/testResults',
      name: 'testResults',
      component: ResultsView
    }
  ]
})

export default router
