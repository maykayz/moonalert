# moon-alert
Alert and button component library

# npm
https://www.npmjs.com/package/moonalert

# repo
https://github.com/maykayz/moonalert

## Install
```
npm install moonalert
```

### Importing into the project
```
import {MoonAlert,MoonButton} from 'moonalert';
Vue.component('moon-alert',MoonAlert)
Vue.component('moon-button',MoonButton)
```

### Usage
```
        <moon-alert
          text="Your operation is successful"
          confirmButtonText="OK"
          alertType="success"
          :showButton="true"
        >
          Success
        </moon-alert>

        <moon-alert
          text="This might lead to a problem"
          confirmButtonText="Keep Going"
          alertType="warning"
          :showButton="true"
        >
          Warning
        </moon-alert>

        <moon-alert
          text="Sorry..! Your operation has failed..!"
          confirmButtonText="OK"
          alertType="danger"
          :showButton="true"
        >
          Error
        </moon-alert>

        <moon-alert
          title="Are you sure?"
          text="Are you sure you want to delete this?"
          alertType="confirm"
          :showButton="true"
          confirmButtonText="Delete"
          confirmCallbackTitle="Deleted!"
          confirmCallbackText="Your file has successfully deleted!"
          @onConfirm="deleteConfirm"
        >
          Confirm
        </moon-alert>

        <!-- Without Button and custom triggering -->
        <h5>Custom event trigger</h5>
        <moon-alert
          text="Your operation is successful"
          alertType="success"
          ref="successAlert"
          confirmButtonText="OK"
          :showButton="false"
        >
        </moon-alert>
        <moon-button @onClick="showAlert">Click</moon-button>
        <!-- Without Button and custom triggering -->
```

```` inside vue methods

  methods: {
    showAlert(){
      //do smth you have to do first...
      //after your operation, show success alert
      this.$refs.successAlert.successAlert()
    },
    deleteConfirm(){
      //operate delete actions
      this.$refs.successAlert.confirmSuccess('Deleted!','Your file is successfully deleted!')
    }
  },

````
### dependencies
https://www.npmjs.com/package/vue-sweetalert2
https://bootstrap-vue.org
