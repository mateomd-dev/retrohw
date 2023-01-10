<template>
  <main>
    <ProductItem
      v-for="product in latestProducts"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </main>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

import ProductItem from '@/components/ProductItem.vue';

const latestProducts =  ref([]);
    
async function getLatestProducts() {
  try {
    const response = await axios.get('/api/v1/latest-products');
    latestProducts.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  await getLatestProducts();
});

</script>
