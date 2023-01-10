<template>
    <tr>
        <th scope="row"><RouterLink :to="item.product.get_absolute_url">{{ item.product.name }}</RouterLink></th>
        <td>
            <input @click="changeQuantity()" type="number" :value="item.quantity" min="0">
            <button @click="removeFromCart(item)" class="btn btn-danger">
                Odstranit
            </button>
        </td>
        <td>{{ itemTotal }}</td>
    </tr>
</template>

<script>
import {  ref, computed, watch } from 'vue';

import { useStore } from '@/stores/stores'

export default {
    props: {
        initialItem: Object
    },
    emits: ['removeFromCart'],
    setup(props, { emit }) {
        const store = useStore();

        const item = ref(props.initialItem);
        const itemTotal = computed(() => {
            return item.value.quantity * item.value.product.price;
        })

        const changeQuantity = () => {
            if (item.value.quantity === 0) {
                console.log("remove it")
                removeFromCart(item);
            }
            updateCart();
        }

        const removeFromCart = (item) => {
            emit('removeFromCart', item);
            updateCart();
        }

        const updateCart = () => {
            localStorage.setItem('cart', JSON.stringify(store.cart))
        }


        return {
            item,
            itemTotal,
            changeQuantity,
            removeFromCart
        }
    }
}
</script>

