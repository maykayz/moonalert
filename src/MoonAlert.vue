<template>
<div class="row">
  <div class="col-12 col-md-6">
    <div class="py-3" v-if="showButton">
      <b-button variant="success" v-if="alertType == 'success'" @click="successAlert">
        <slot></slot>
      </b-button>
      <b-button variant="warning" v-if="alertType == 'warning'" @click="warningAlert">
        <slot></slot>
      </b-button>
      <b-button variant="danger" v-if="alertType == 'danger'" @click="errorAlert">
        <slot></slot>
      </b-button>
      <b-button variant="warning" v-if="alertType == 'confirm'" @click="confirmAlert">
        <slot></slot>
      </b-button>
    </div>
  </div>
</div>
</template>


<script>
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import bootstrapVue from 'bootstrap-vue';
Vue.use(VueSweetalert2);
Vue.use(bootstrapVue)
export default {
  data() {
    return {}
  },
  components: {},
  mounted() {},
  props: {
    title: String,
    text: String,
    confirmButtonText: String,
    alertType: String,
    showButton: Boolean,
    confirmCallbackTitle: String,
    confirmCallbackText: String,
    errorCallbackTitle: String,
    errorCallbackText: String
  },
  methods: {
    successAlert() {
      this.$swal.fire({
        text: this.text,
        icon: 'success',
        confirmButtonText: this.confirmButtonText,
      })
    },
    warningAlert() {
      this.$swal.fire({
        text: this.text,
        icon: 'warning',
        confirmButtonText: this.confirmButtonText,
      })
    },
    errorAlert() {
      this.$swal.fire({
        text: this.text,
        icon: 'error',
        confirmButtonText: this.confirmButtonText,
      })
    },
    confirmAlert() {
      this.$swal.fire({
        title: this.title,
        text: this.text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.confirmButtonText,
      }).then((result) => {
        if (result.value) {
          this.$emit('onConfirm')
        }
      })
    },
    confirmSuccess(title,text){
      this.$swal.fire(
        {
          title:title,
          text:text,
          icon:'success'
        }
      )
    }
  },
}
</script>

<style lang="css">

</style>
