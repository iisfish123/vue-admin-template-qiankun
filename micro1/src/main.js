import './public-path'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null

function render(props = {}) {
  const { container } = props
  console.log(window.__POWERED_BY_QIANKUN__)
  console.log(container)
  console.log('props', props.routerBase)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? props.routerBase : '/',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// console.log(instance, router)
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  // console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
