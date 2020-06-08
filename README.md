# moon-alert

## Install
```
npm install moonalert
```

### Importing into the project
```
import MoonAlert from 'moonalert'
Vue.component('moon-alert',MoonAlert)
```

### Usage
```
<moon-alert alertType="success" text="Your operation is successful!!">Continue</moon-alert>
<moon-alert alertType="warning" text="This might lead to problem">Warning</moon-alert>
<moon-alert alertType="danger" text="Sorry..! Your operation failed">Error</moon-alert>
<moon-alert alertType="confirm" text="Are you sure you want to delete???">Delete</moon-alert>
```
### dependencies
https://www.npmjs.com/package/vue-sweetalert2
https://bootstrap-vue.org
