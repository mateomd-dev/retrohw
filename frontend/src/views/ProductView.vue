<template>
    <div class="row justify-content-center mt-5">
        <div class="col-4">
            <div class="image"></div>
        </div>
        <div class="col-5 d-flex flex-column justify-content-between">
            <div>
                <h1 class="">{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <p>{{ product.price }} Kč</p>
            </div>

            <div class="row">
                <input type="number" class="input col-3" min="1" v-model="quantity" />
                <button type="button" class="btn btn-secondary col-4 ms-3" @click="addToCart">
                    <span class="btn-text">Přidat do košíku</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useStore } from '@/stores/stores'

const store = useStore();

const product = ref([]);
const quantity = ref(1);

async function getProduct() {
    const route = useRoute()
    const category_slug = route.params.category_slug;
    const product_slug = route.params.product_slug;
    try {
        const response = await axios.get(`/api/v1/products/${category_slug}/${product_slug}`);
        product.value = response.data
    } catch (error) {
        console.log(error);
    }

}

function addToCart() {
    if (isNaN(quantity) || quantity < 1) {
        quantity.value = 1;
    }
    const item = {
        product: product.value,
        quantity: quantity.value
    }
    store.addToCart(item);

}

onMounted(async () => {
    await getProduct();
});
</script>

<style scoped>
.image {
    height: 384px;
    width: 384px;
    border: 5px solid black;
    border-radius: 15px
}
</style>