<template>
    <div>
        <h1>{{ category.name }}</h1>
        <ProductItem
            v-for="product in category.products"
            v-bind:key="product.id"
            v-bind:product="product"
        />
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import ProductItem from '@/components/ProductItem.vue';

const category = ref({ products: [] })
const route = useRoute();

async function getCategory() {
    const categorySlug = route.params.category_slug;
    try {
        const response = await axios.get(`/api/v1/products/${categorySlug}`);
        category.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

watch(route, (to, from) => {
    getCategory();
})

onMounted(async () => {
    await getCategory();
})
</script>