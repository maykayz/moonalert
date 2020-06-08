<template>
<div class="row">
  <div class="col-12 col-md-6">
    <div class="py-3">
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
    text: String,
    alertType: String
  },
  methods: {
    successAlert() {
      this.$swal.fire({
        text: this.text,
        icon: 'success',
      })
    },
    warningAlert() {
      this.$swal.fire({
        text: this.text,
        icon: 'warning',
      })
    },
    errorAlert() {
      this.$swal.fire({
        text: this.text,
        icon: 'error',
        confirmButtonText: 'Confirm',
      })
    },
    confirmAlert() {
      this.$swal.fire({
        title: 'Are you sure?',
        text: this.text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
      }).then((result) => {
        if (result.value) {
          this.$swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  },
}
</script>

<style lang="css">

</style>
