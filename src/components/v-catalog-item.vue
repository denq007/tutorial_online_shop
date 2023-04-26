<template>
<div class="v-catalog-item">
  <!-- use require for images-->
  <img class="v-catalog-item-image" :src="require('../assets/images/'+ product_data.image)" alt="img">
  <p class="v-catalog-item-name">{{product_data.name}}</p>
  <p class="v-catalog-item-price">{{product_data.price}} P </p>
  <button class="v-catalog-item-add-to-cart-button"
          @click="addToCart"
  >Add to cart</button>
</div>
</template>

<script>

export default {
  name: "v-catalog-item",
  props:{
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  computed:{},
  methods:{
    addToCart(){
      this.$emit('addToCart',this.product_data)
    }
  }
}
</script>
<!-- use variables from variavles.scss-->
<style lang="scss" scoped>
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &-image {
    width: 100px;
  }
  }
</style>