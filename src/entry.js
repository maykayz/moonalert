
import MoonAlert from './MoonAlert.vue'
import MoonButton from './MoonButton.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('MoonAlert', MoonAlert)
  Vue.component('MoonButton', MoonButton)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

MoonAlert.install = install
MoonButton.install = install

export {
  MoonAlert,
  MoonButton
}
