// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './stores'

import mainIndex from './views/main/main-index'

//iViewUI
// import  iView from 'iview'
// import 'iview/dist/styles/iview.css'
// import Button from 'iview/src/components/button';
// import Card from 'iview/src/components/card';
// import Icon from 'iview/src/components/icon';
// import Input from 'iview/src/components/input';
// import Menu from 'iview/src/components/menu';
// import Table from 'iview/src/components/table';
// import Message from 'iview/src/components/message';
// import Modal from 'iview/src/components/modal';
// Vue.component(Button.name, Button)
// Vue.component(Card.name, Card)
// Vue.component(Icon.name, Icon)
// Vue.component(Input.name, Input)
// Vue.component(Menu.name, Menu)
// Vue.component(Table.name, Table)
// Vue.component(Message.name, Message)
// Vue.component(Modal.name, Modal)
// Vue.use(iView)

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.silent = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<main-index/>',
  components: {mainIndex}
})
