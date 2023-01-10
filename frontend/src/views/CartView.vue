<template>
    <div>
        <h1>Košík</h1>

        <div>
            <table v-if="cartTotalLength" class="table">
                <thead>
                    <tr>
                        <th scope="col">Produkt</th>
                        <th scope="col">Počet</th>
                        <th scope="col">Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem
                        v-for="item in cart.items"
                        v-bind:key="item.product.id"
                        v-bind:initialItem="item" 
                        v-on:removeFromCart="removeFromCart" 
                    />
                </tbody>
            </table>


            <p v-else>Cart is empty</p>
        </div>

        <div>
            <h2>Summary</h2>
            <strong>${{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items

            <hr>

            <RouterLink to="/cart/checkout">Proceed to checkout</RouterLink>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

import CartItem from '@/components/CartItem.vue';
import { useStore } from '@/stores/stores';

const cart = ref({ items: [] });

const cartTotalLength = computed(() => {
    return cart.value.items.reduce((acc, curVal) => {
        return acc += curVal.quantity;
    }, 0);
});

const cartTotalPrice = computed(() => {
    return cart.value.items.reduce((acc, curVal) => {
        return acc += curVal.product.price * curVal.quantity;
    }, 0);
});

function removeFromCart(item) {
    cart.value.items = cart.value.items.filter(i => i.product.id !== item.product.id)
}

onMounted(() => {
    const store = useStore();
    cart.value.items = store.cart.items;
})

</script>