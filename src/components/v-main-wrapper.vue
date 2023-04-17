<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog/>
    <v-cart></v-cart>
  </div>
</template>

<script>

import vCart from "@/components/v-cart";

import vCatalog from "@/components/v-catalog";
  export default {
   name: 'v-main-wrapper',
   components:{
     vCatalog,
     vCart
      },
    props:{},
    data() {
     return {
       title: 'Main wrapper'
     }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
     console.log('Hello i am alive')
    }
  }
</script>

<style>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>