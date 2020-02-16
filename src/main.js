import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Antd from "ant-design-vue"

import Mint from "mint-ui"
import "mint-ui/lib/style.css"
import "ant-design-vue/dist/antd.css"

import "@/assets/style/common.less"
import "@/assets/style/index.less"

Vue.use(Mint)

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
