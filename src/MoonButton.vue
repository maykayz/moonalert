<template>
      <div class="d-inline-block px-1 py-1">
        <b-button type="type == 'submit'" :variant="variant" v-if="type == 'text'" :to="to" :href="href" @click="$emit('onClick')">
            <slot></slot>
        </b-button>
        <b-button type="type == 'submit'" :variant="variant" v-else-if="type == 'icon'" v-b-tooltip.hover :title="tooltipTitle" :to="to" :href="href" @click="$emit('onClick')">
            <font-awesome-icon :icon="icon" />
        </b-button>
        <b-button type="type == 'submit'" class="icononly border-0" :variant="'outline-'+variant" v-else-if="type == 'icononly'" v-b-tooltip.hover :title="tooltipTitle" :to="to" :href="href" @click="$emit('onClick')">
            <font-awesome-icon :icon="icon" />
            <slot></slot>
        </b-button>
        <b-button type="type == 'submit'" :variant="variant" v-else-if="type == 'icontext'" :to="to" :href="href" @click="$emit('onClick')">
            <font-awesome-icon :icon="icon" />
            <slot></slot>
        </b-button>
        <b-button type="type == 'submit'" v-else :to="to" :href="href" @click="$emit('onClick')">
            <slot></slot>
        </b-button>
      </div>
</template>


<script>
import Vue from 'vue';
import bootstrapVue from 'bootstrap-vue';
Vue.use(bootstrapVue)
export default {
  data() {
    return {

    };
  },
  props: [
    'variant',
    'type',
    'icon',
    'tooltipTitle',
    'to',
    'href'
  ],
  methods: {
  }
};
</script>

<style lang="css">

</style>
