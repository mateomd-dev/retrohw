<template>
    <div>
        <RouterLink :to="product.get_absolute_url" class="btn">
            <div class="image"></div>
            <h3 class="text-start mt-2">{{ product.name }}</h3>
            <p class="text-start">{{ product.price }} Kč</p>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    product: Object
})
</script>

<style scoped>
.image {
    height: 256px;
    width: 256px;
    border: 5px solid white;
    border-radius: 15px
}
</style>