<template>
  <div class="row">
    <ProductItem
      v-for="product in allProducts"
      v-bind:key="product.id"
      v-bind:product="product"
      class="col-3"
    />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

import ProductItem from '@/components/ProductItem.vue';

const allProducts =  ref([]);
    
async function getAllProducts() {
  try {
    const response = await axios.get('/api/v1/all-products');
    allProducts.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  await getAllProducts();
});

</script>
