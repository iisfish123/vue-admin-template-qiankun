import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import { registerMicroApps } from 'qiankun'

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)
registerMicroApps([
  {
    name: 'micro1',
    entry: '//localhost:8080/',
    // layout里面 设置个id="micro"的div，这里的container和子应用的$mount(container ? container.querySelector('#app') : '#app')没有关系
    container: '#micro',
    // activeRule: '#/micro1',
    // activeRule: getActiveRule('#/micro1'),
    activeRule: getActiveRule('#/micro1'),
    props: {
      routerBase: '#/micro1' // 设置子应用的 base 路径
    }
  }
  // {
  //   name: 'micro2',
  //   entry: '//localhost:8081/',
  //   container: '#micro',
  //   activeRule: '#/micro2',
  //   props: {
  //     routerBase: '#/micro1', // 设置子应用的 base 路径
  //   }
  // }
])
// 启动 qiankun
// start({ sandbox: true })

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    // start({ sandbox: true })
  },
  render: h => h(App)
})
