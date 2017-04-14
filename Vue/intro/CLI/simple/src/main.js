// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './stores'

import mainIndex from './views/main/main-index'

//ElementUI
import {
  Menu,
  Submenu,
  MenuItem,
  Input,
  Button,
  Table,
  TableColumn,
  Icon,
  Card,
  Message,
  MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Message)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$message = Message

Vue.config.silent = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<main-index/>',
  components: {mainIndex}
})
