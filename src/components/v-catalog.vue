<template>
<div class='v-catalog'></div>
  <h1>Catalog</h1>
  <v-catalog-item></v-catalog-item>
</template>

<script>

import vCatalogItem from "@/components/v-catalog-item";

export default {
  name: "v-catalog",
  components: {vCatalogItem}
}
</script>

<style>

</style>