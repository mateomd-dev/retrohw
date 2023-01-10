import { createRouter, createWebHistory } from 'vue-router';

import AllProductsView from '@/views/AllProductsView.vue';
import CartView from '@/views/CartView.vue';
import CategoryView from '@/views/CategoryView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import HomeView from '@/views/HomeView.vue';
// import LogInView from '@/views/LogInView.vue';
import ProductView from '@/views/ProductView.vue';
import SignUpView from '@/views/SignUpView.vue';

import { useStore } from '@/stores/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/novinky',
      alias: ['/'],
      name: 'home',
      component: HomeView
    },
    {
      path: '/vsechny-produkty',
      name: 'all-products',
      component: AllProductsView
    },
    {
      path: '/:category_slug/:product_slug',
      name: 'product',
      component: ProductView
    },
    {
      path: '/:category_slug/',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/registrovat',
      name: 'signup',
      component: SignUpView
    },
    // {
    //   path: '/prihlasit',
    //   name: 'login',
    //   component: LogInView
    // },
    {
      path: '/kosik',
      name: 'cart',
      component: CartView
    },
    {
      path: '/kosik/dokonceni',
      name: 'checkout',
      component: CheckoutView,
      meta: {
        requireLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.matched.some(record => record.meta.requireLogin) && !store.isAuthenticated) {
    next({ name: 'login', query: { to: to.path } });
  } else {
    next();
  }
})

export default router;
