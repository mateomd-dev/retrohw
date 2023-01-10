import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

interface Cart {
    items: Item[];
}

interface Item {
    product: Product;
    quantity: number;
}

interface Product {
    id: number;
}

export const useStore = defineStore('store', () => {
    const cart = reactive<Cart>({
        items: [],
    })
    const isAuthenticated = ref(false)
    const token = ref('')

    function initStore() {
        if (localStorage.getItem('cart')) {
            cart.items = JSON.parse(localStorage.getItem('cart') ?? '{ "items": [] }').items;
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        if (localStorage.getItem('token')) {
            token.value = localStorage.getItem('token') ?? '';
            isAuthenticated.value = true;
        } else {
            token.value = '';
            isAuthenticated.value = false;
        }
    }

    function addToCart(item: Item) {
        const exists = cart.items.find(i => i.product.id == item.product.id);
        if (exists) {
            exists.quantity = exists.quantity + item.quantity;
        } else {
            cart.items.push(item);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function setToken(newToken: string) {
        token.value = '';
        isAuthenticated.value = true;
    }

    function removeToken() {
        token.value = '';
        isAuthenticated.value = false;
    }

    return {
        cart,
        isAuthenticated,
        token,
        initStore,
        addToCart,
        setToken,
        removeToken
    }
})